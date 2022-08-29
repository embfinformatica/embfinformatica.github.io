/*
    Copyright 202. EMBF Softwares e Investigação
    www.embfinformatica.github.io
    consultoria@eduardoprogramador.com
    
    Todos os direitos reservados.                

    Classe que contÃ©m funÃ§Ãµes de Contabilidade 
    para utilizaÃ§Ã£o em cÃ³digos Javascript.
    Ã€ medida em que novas funÃ§Ãµes forem criadas,
    o script seguirÃ¡ sendo atualizado.

    Confira a lista de funÃ§Ãµes atualizada em 10/01/2021
    

    1) rpaCalculator: Calcula o valor lÃ­quido e as retenÃ§Ãµes tributÃ¡rias 
        no RPA (Recibo de Pagamento de AutÃ´nomo), que Ã© o documento tributÃ¡rio 
        para registro dos serviÃ§os prestados por pessoa fÃ­sica.

    2) in1234: Calcula todas as retenÃ§Ãµes tributÃ¡rias de acordo 
                com a IN 1.234/2012 da RFB.

              

    Tutorial:

        a) Inclua o seguinte cÃ³digo HTML na sua pÃ¡gina web entre as tags <head> e </head>:             
            <script type="text/javascript" src="js/contabil.js"></script>

        b) No seu cÃ³digo javascript da pÃ¡gina, inicie a classe:
            Ex.: const contabilidade = new Contabil();

        c) Pronto, basta agora invocar as funÃ§Ãµes.
            Ex.: contabilidade.rpaCalculator();

        2) in1234: 

*/



class Contabil {

    /*
        Construtor Vazio
    */
    constructor() {
        
    }
    
    /*
        FunÃ§Ã£o que calcula o RPA.
        Exemplo no cabeÃ§alho do cÃ³digo.

         ParÃ¢metros:

            a) rpaData: as propriedas do RPA em formato JSON.
                Ex.: let pattern = {
                        prefeitura : "no",
                        iss : 5,
                        valor : 1000,
                        dependentes : 0,
                        rpa_received : 0
                    }

            b) resultCallback: Uma funÃ§Ã£o que serÃ¡ executada ao tÃ©rmino no cÃ¡lculo,
                    tendo como parÃ¢metro o cÃ¡lculos retornados em JSON.
    */
    rpaCalculator(rpaData, resultCallBack) {

        var iss_res, inss_res, irrf_res;
        var dependente_res, dependente_base;
        var iss_base, inss_base, irrf_base;
        var base_calc;
        var aliquota_irrf, aliquota_irrf_res,reduction;
        var p_inss, p_irrf, p_interest, liquido, cpp;
        var total_company, total_in_month, difference;
                
        let pattern = {
            prefeitura : "no",
            iss : 5,
            valor : 1000,
            dependentes : 0,
            rpa_received : 0
        }
                
        let data = (rpaData == null) ? pattern : rpaData;        

        let pref = data.prefeitura;
        let iss = data.iss;
        let price = data.valor;
        let child = data.dependentes;
        let money = data.rpa_received;

        if(pref.localeCompare("no") == 0) {
            iss_res = ((iss * price) / 100);
            iss_res = parseFloat(iss_res.toFixed(2));
            iss_base = "Art. 1, 'caput'; 8,II; 8-A, 'caput' da Lei 116/2003";
        } else if(pref.localeCompare("yes") == 0){
            iss_res = parseInt(0,10);
            iss_base = "NÃ£o hÃ¡ retenÃ§Ã£o do ISSQN, pois o prestador tem cadastro na prefeitura e efetua seu recolhimento anualmente.";
        }

        if(price < 1212) {
            p_inss = 11;
            inss_base = "Tabela de 2022 do INSS para contribuinte individual e facultativo. AlÃ­quota de 11% valores abaixo de R$ 1.212,00";
            
        } else {
            p_inss = 20;
            inss_base = "Tabela de 2022 do INSS para contribuinte individual e facultativo. AlÃ­quota de 20% de R$ 1.212,00 atÃ© R$ 7.087,22";
        }

        if(price > 7087.22) {
            p_inss = 20;
        }

        inss_res = (price <= 7087.22) ? parseFloat(((p_inss * price) / 100).toFixed(2)) : parseFloat(((p_inss * 7087.22) / 100).toFixed(2));
        inss_base = (price <= 7087.22) ? inss_base : "Quando o valor do serviÃ§o estÃ¡ acima do teto do INSS (R$ 7087.22), o percentual de 20% aplica-se sobre o teto e nÃ£o sobre o valor do serviÃ§o.";

        if(money > 0) {
            total_in_month = money + price;            
            if(total_in_month > 7087.22) {
                p_inss = 20;
                inss_res = parseFloat(((p_inss * 7087.22) / 100).toFixed(2));
                inss_base = "O valor do serviÃ§o somado aos valores que o autÃ´nomo recebeu estÃ¡ acima do teto do INSS (R$ 7.087,22), o percentual de 20% aplica-se sobre o teto e nÃ£o sobre o valor do serviÃ§o."
            } else {
                difference = parseFloat(7087.22) - parseFloat(money);                                
                p_inss = 20;
                inss_res = parseFloat(((p_inss * difference) / 100).toFixed(2));
                inss_base = "Como o autÃ´nomo jÃ¡ recebeu valores no mÃªs, a base de cÃ¡lculo do INSS serÃ¡ a diferenÃ§a do teto (R$ 7.087,22) pelo somatÃ³rio dos valores jÃ¡ recebidos pelo profissional, com vistas Ã  aplicaÃ§Ã£o da alÃ­quota de 20%";
            }
        }

        irrf_base = "Decreto 9.580/2018 - Arts. 38, I; 71, VI; 122, VI; 158, II; 681, 'caput'; 685, 'caput'; 710 em diante.";
        base_calc = price - inss_res;

        dependente_res = parseFloat((child * 189.59).toFixed(2));
        dependente_base = `${child} * R$ 189,59: ${dependente_res}`;

        base_calc -= dependente_res;
        base_calc = parseFloat(base_calc.toFixed(2));

        if(base_calc <= 1903.98) {
            aliquota_irrf = 0;
            reduction = 0;
        } else if(base_calc > 1903.98 && base_calc <= 2826.65) {
            aliquota_irrf = 7.5;
            reduction = 142.80;
        } else if(base_calc > 2826.65 && base_calc <= 3751.05 ) {
            aliquota_irrf = 15;
            reduction = 354.80;
        } else if(base_calc > 3751.05 && base_calc <= 4664.68) {
            aliquota_irrf = 22.5;
            reduction = 636.13;
        } else if(base_calc > 4664.68) {
            aliquota_irrf = 27.5;
            reduction = 869.36;
        }

        aliquota_irrf_res = parseFloat(((aliquota_irrf * base_calc) / 100).toFixed(2));

        irrf_res = parseFloat((aliquota_irrf_res - reduction).toFixed(2));

        p_irrf = parseFloat(((irrf_res / price) * 100).toFixed(2));       

        cpp = parseFloat((0.2 * price).toFixed(2));

        liquido = parseFloat((price - iss_res - inss_res - irrf_res).toFixed(2));

        total_company = parseFloat(cpp) + parseFloat(price);

        p_interest = parseFloat(iss) + parseFloat(p_inss) + parseFloat(p_irrf);


        let final_res = {
            iss_valor : iss_res,
            iss_perc : iss,
            iss_legal : iss_base,
            inss_valor : inss_res,
            inss_perc : p_inss,
            inss_legal : inss_base,
            irrf_valor : irrf_res,
            irrf_perc : p_irrf,
            irrf_legal : irrf_base,
            base_irrf : base_calc,
            aliquota_rir : aliquota_irrf,
            aliquota_rir_valor : aliquota_irrf_res,
            deducao_dependentes : dependente_res,
            deducao_rir : reduction,
            impostos_perc : p_interest,
            valor_a_pagar : liquido,
            cpp_inss : cpp,
            custo_pj : parseFloat(total_company.toFixed(2))
        }

        resultCallBack(final_res);        

    }

    /*
        FunÃ§Ã£o que calcula as retenÃ§Ãµes de acordo com a IN 1.234/2021.

        ParÃ¢metros:

        a) inData: Objeto no formato JSON com as seguintes propriedas.
            Ex.:
                let in = {
                    "nota_fiscal" : 2343.34, << Valor da Nota 
                    "tipo" : 1, << 0 - Material | 1 - ServiÃ§o
                    "iss" : 5, << - Porcentagem ISS
                    "codigo_receita" : 6147 << CÃ³digo Anexo I - IN 1.234/2012
                };

        b) resultCallBack: FunÃ§Ã£o que executarÃ¡ a saÃ­da dos dados. 
                Ex.:
                    const contabil = new Contabil();
                    contabil.in1234(in,function(data){
                        let iss = data.iss;
                        let nf = data.nota_fiscal;
                        (...)
                    };)
    */
    in1234(inData,resultCallBack) {
        var nf, type, iss, orderTable;                
        var ir, csll,cofins,pis,code;
        var liquido;
        var code, impostos;

        nf = inData.nota_fiscal;
        type = inData.tipo;        
        orderTable = inData.codigo_receita;

        switch (type) {
            case 0:
                iss = 0;
                break;
        
            default:
                iss = inData.iss;
                break;
        }

        switch (orderTable) {
            case 6147:
                ir = 1.2;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 6147;
                break;

            case 9060:
                ir = 0.24;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 9060;
                break;
                
            case 8739:
                ir = 0.24;
                csll = 1;
                cofins = 0;
                pis = 0;
                code = 8739;

            case 8767:
                ir = 1.2;
                csll = 1;
                cofins = 0;
                pis = 0;
                code = 8767;
                break;

            case 6175:
                ir = 2.4;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 6175;
                break;

            case 8850:
                ir = 2.4;
                csll = 1;
                cofins = 0;
                pis = 0;
                code = 8850;
                break;

            case 8863:
                ir = 0;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 8863;
                break;

            case 6188:
                ir = 2.4;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 6188;
                break;

            case 6190:
                ir = 4.8;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 6190;
                break;                    

            default:
                ir = 1.2;
                csll = 1;
                cofins = 3;
                pis = 0.65;
                code = 6147;
                break;
        }

        var totalAliq = parseFloat(ir) + parseFloat(csll) + parseFloat(cofins) + parseFloat(pis);

        impostos = parseFloat(((totalAliq * nf)/100)) + parseFloat(((iss * nf)/100));
        liquido = nf - impostos;

        var obj_response = {
            "valor_nf" : nf,
            "valor_iss" : (iss * nf)/100,
            "valor_ir" : (ir * nf)/100,
            "valor_csll" : (csll * nf)/100,
            "valor_cofins" : (cofins * nf)/100,
            "valor_pis" : (pis * nf)/100,
            "valor_liquido" : liquido,
            "aliquota" : totalAliq,
            "valor_impostos" : impostos,
            "base_legal" : "IN 1.234/2012 (RFB)"            
        }        

        resultCallBack(obj_response);

    }

}