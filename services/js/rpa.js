function main() {

    const tasks = new Tasks();

    if(!tasks.isHttps()) {
        tasks.set('https://eduardoprogramador.com/services/rpa.html');
    }

    var pattern = {

        prefeitura : "no",
        iss : 5,
        valor : 1000,
        dependentes : 0,
        rpa_received : 0
    };

    var isPref = true;
    var scene = 1;
    
    S('prefeitura_sim').border = "0.1em solid black";
    S('prefeitura_nao').border = "none";
    
    attach('prefeitura_sim', 'click', function () {               
        f_prefeitura_sim();
    });

    attach('prefeitura_nao', 'click', function () {
        f_prefeitura_nao();
    });

    attach('iss_confirmar', 'click', function () {       
        f_iss();
    });

    attach('service_confirmar', 'click', function () {       
        f_service();
    });
    
    attach('dependentes_confirmar', 'click', function () {               
        f_dependentes();
    });

    attach('received_confirmar', 'click', function (result) {               
        
        f_received();

    });

    attach('status_see', 'click', function () {
               
        S('result').display = 'block';
        window.scrollBy(0,620);

    });

    attach('redo', 'click', function () {                                            

        f_redo();

    });

    attach_('keydown', function (k) {
       
        switch (k.key) {

            case "ArrowLeft":                                                  

                if(!isPref) {
                    isPref = !isPref;
                    S('prefeitura_sim').border = "0.1em solid black";
                    S('prefeitura_nao').border = "none";
                }

                break;

            case "ArrowRight":           

                if(isPref) {
                    isPref = !isPref;
                    S('prefeitura_nao').border = "0.1em solid black";
                    S('prefeitura_sim').border = "none";
                }
            
                break;

            case "ArrowUp":
                switch (scene) {                    

                    case 1:
                        if(!isPref) {
                            isPref = !isPref;
                            S('prefeitura_sim').border = "0.1em solid black";
                            S('prefeitura_nao').border = "none";
                        }
                        break;

                    case 2:
                        let iss = val('iss_valor');
                        iss = parseInt(iss,10);
                        
                        if(iss < 5) {
                            iss += 1;
                            valp('iss_valor', iss);
                        }
                        break;

                    case 3:
                        let service = val('service_valor');
                        service = parseInt(service,10);
                        
                        if(service < 99989.49) {
                            service += 10.51;
                            valp('service_valor', service);
                        }
                        break;

                    case 4:

                        let dependentes = val('dependentes_valor');
                        dependentes = parseInt(dependentes,10);
                        
                        if(dependentes < 20) {
                            dependentes += 1;
                            valp('dependentes_valor', dependentes);
                        }

                        break;

                    case 5:

                        let received = val('received_valor');
                        received = parseInt(received,10);
                        
                        if(received < 99989.49) {
                            received += 10.51;
                            valp('received_valor', received);
                        }

                        break;
                
                    default:
                        break;
                }
                break;

            case "ArrowDown":
                switch (scene) {
                    case 1:
                        if(isPref) {
                            isPref = !isPref;
                            S('prefeitura_nao').border = "0.1em solid black";
                            S('prefeitura_sim').border = "none";
                        }
                        break;

                    case 2:
                        let iss = val('iss_valor');
                        iss = parseInt(iss,10);
                        
                        if(iss > 2) {
                            iss -= 1;
                            valp('iss_valor', iss);
                        }
                        break;

                    case 3:
                        let service = val('service_valor');
                        service = parseInt(service,10);
                        
                        if(service > 20.51) {
                            service -= 10.51;
                            valp('service_valor', service);
                        }
                        break;

                    case 4:

                        let dependentes = val('dependentes_valor');
                        dependentes = parseInt(dependentes,10);
                        
                        if(dependentes > 0) {
                            dependentes -= 1;
                            valp('dependentes_valor', dependentes);
                        }

                        break;

                    case 5:

                        let received = val('received_valor');
                        received = parseInt(received,10);
                        
                        if(received > 20.51) {
                            received -= 10.51;
                            valp('service_valor', received);
                        }

                        break;
                
                    default:
                        break;
                }
                
                break;

            case "Enter":                          

                switch (scene) {
                    

                    case 1:      
                        if(isPref) {
                            f_prefeitura_sim();
                        } else {
                            f_prefeitura_nao();
                        }                  
                        break;

                    case 2:
                        f_iss();
                        break;

                    case 3:
                        f_service();
                        break;

                    case 4:
                        f_dependentes();
                        break;

                    case 5:
                        f_received();
                        break;
                
                    default:
                        S('result').display = 'block';
                        window.scrollBy(0,620);
                        break;
                }
                break;

            case "Backspace":
                f_redo();
                break;
        
            default:                
                break;
        }

    });

    function f_prefeitura_sim() {    
      
        pattern.prefeitura = "yes";
        txt_('prefeitura_status', '1. Autônomo Com Cadastro');
        S('prefeitura').display = 'none';
        S('iss').display = 'block';
        txt_('step_count', 'Etapa 2 de 5');
        _in('iss_valor');
        scene = 2;        
    };

    function f_prefeitura_nao() {                
        
        pattern.prefeitura = "no";
        txt_('prefeitura_status', '1. Autônomo Sem Cadastro');
        S('prefeitura').display = 'none';
        S('iss').display = 'block';
        txt_('step_count', 'Etapa 2 de 5');
        _in('iss_valor');
        scene = 2;

    };

    function f_iss() {
      
        let iss = val('iss_valor');
        pattern.iss = iss;        
        txt_('iss_status', '2. Valor do ISS: ' + iss + '%');
        S('iss').display = 'none';
        S('service').display = 'block';
        txt_('step_count', 'Etapa 3 de 5');
        _in('service_valor');
        scene = 3;

    };

    function f_service() {
      
        let valor = val('service_valor');
        pattern.valor = valor;        
        txt_('valor_status', '3. Valor do Serviço: R$ ' + valor);
        S('service').display = 'none';
        S('dependentes').display = 'block';
        txt_('step_count', 'Etapa 4 de 5');
        _in('dependentes_valor');
        scene = 4;

    };

    function f_dependentes() {
      
        let dependentes = val('dependentes_valor');
        pattern.dependentes = dependentes;        
        txt_('dependentes_status', '4. Dependentes: ' + dependentes);
        S('dependentes').display = 'none';
        S('received').display = 'block';
        txt_('step_count', 'Etapa 5 de 5');
        _in('received_valor');
        scene = 5;

    };

    function f_received() {
        

        let received = val('received_valor');
        pattern.received = received;        
        txt_('received_status', '5. Já Recebido: R$ ' + received);
        S('received').display = 'none';        
        txt_('step_count', 'Tudo Pronto!');
        S('step_img').display = 'block';
        S('step_img').marginLeft = 'auto';
        S('step_img').marginRight = 'auto'; 
        S('step_img').animation = 'fadeIn 3s ease-in-out forwards';               

        const contabil = new Contabil();
        contabil.rpaCalculator(pattern, function (result) {       
            S('status_see').display = 'block';    
            S('status_see').animation = '';
            see_result();                    
        });

        scene = -1;

    };

    function f_redo() {
      
        scene = 1;  
        S('prefeitura').display = 'block';
        S('iss').display = 'none';
        S('service').display = 'none';
        S('dependentes').display = 'none';
        S('received').display = 'none';
        S('step_img').display = 'none';
        S('status_see').display = 'none';
        txt_('prefeitura_status', '1. A completar');
        txt_('iss_status', '2. A completar');
        txt_('valor_status', '3. A completar');
        txt_('dependentes_status', '4. A completar');
        txt_('received_status', '5. A completar');
        txt_('step_count', 'Etapa 1 de 5');                      
        isPref = true;
        S('prefeitura_sim').border = "0.1em solid black";
        S('prefeitura_nao').border = "none";

        S('result').display = 'none';

        document.activeElement.blur();

    };

    attach('logotipo', 'click', function () {
       
        tasks.go('https://eduardoprogramador.com');

    });

    function see_result() {
      
        const ct = new Contabil();                                          

                ct.rpaCalculator(pattern, function (obj) {
                                    
                    txt_('valor_servico', pattern.valor);
                   
                    txt_("valor_iss", obj.iss_valor);
                    txt_("perc_iss", obj.iss_perc);
                    txt_("legal_iss", obj.iss_legal);
                    txt_("valor_inss", obj.inss_valor);
                    txt_("perc_inss", obj.inss_perc);
                    txt_("legal_inss", obj.inss_legal);
                    txt_("valor_irrf", obj.irrf_valor);
                    txt_("perc_irrf", obj.irrf_perc);
                    txt_("legal_irrf", obj.irrf_legal);
                    txt_("ded_dependentes", obj.deducao_dependentes);
                    txt_("base_irrf", obj.base_irrf);
                    txt_("aliq_irrf", obj.aliquota_rir);
                    txt_("aplic_irrf", obj.aliquota_rir_valor);
                    txt_("ded_tabela", obj.deducao_rir);
                    txt_("valor_liquido", obj.valor_a_pagar);
                    txt_("valor_cpp", obj.cpp_inss);
                    txt_("valor_total", obj.custo_pj);
                    txt_("retencao", obj.impostos_perc);

                    tasks.httpPost('php/links.php',encodeURI('link=rpa_online_usage_detected&time=' + tasks.getTime()),function () {});                                                                    

                });

    };


}