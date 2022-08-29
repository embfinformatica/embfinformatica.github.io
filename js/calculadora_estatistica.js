function main() {

    attach('menu_avg','over',function () {
       
        S('avg_median').display = 'block';
        S('standard_desviation').display = 'none';
        S('variance').display = 'none';
        S('cv').display = 'none';
        S('cur').display = 'none';
        S('asy').display = 'none';
        S('jur').display = 'none';
        S('jurC').display = 'none';

    });

    attach('menu_sd','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'block';
        S('variance').display = 'none';
        S('cv').display = 'none';
        S('cur').display = 'none';
        S('asy').display = 'none';
        S('jur').display = 'none';
        S('jurC').display = 'none';

    });

    attach('menu_var','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'none';
        S('variance').display = 'block';
        S('cv').display = 'none';
        S('cur').display = 'none';
        S('asy').display = 'none';
        S('jur').display = 'none';
        S('jurC').display = 'none';

    });

    attach('menu_cv','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'none';
        S('variance').display = 'none';
        S('cv').display = 'block';
        S('cur').display = 'none';
        S('asy').display = 'none';
        S('jur').display = 'none';
        S('jurC').display = 'none';

    });

    attach('menu_cur','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'none';
        S('variance').display = 'none';
        S('cv').display = 'none';
        S('cur').display = 'block';
        S('asy').display = 'none';
        S('jur').display = 'none';
        S('jurC').display = 'none';

    });

    attach('menu_asy','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'none';
        S('variance').display = 'none';
        S('cv').display = 'none';
        S('cur').display = 'none';
        S('asy').display = 'block';
        S('jur').display = 'none';
        S('jurC').display = 'none';

    });

    attach('menu_jur','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'none';
        S('variance').display = 'none';
        S('cv').display = 'none';
        S('cur').display = 'none';
        S('asy').display = 'none';
        S('jur').display = 'block';
        S('jurC').display = 'none';

    });

    attach('menu_jurC','over',function () {
       
        S('avg_median').display = 'none';
        S('standard_desviation').display = 'none';
        S('variance').display = 'none';
        S('cv').display = 'none';
        S('cur').display = 'none';
        S('asy').display = 'none';
        S('jur').display = 'none';
        S('jurC').display = 'block';

    });
    
    attach('avg_median_calc', 'click', function () {        
       
        const data = val('text_avg_median');
        
        if(data == null || data.localeCompare('') == 0) {

            alert("Dados inválidos. Informe apenas números separados por vírgula (,).");

        } else {                        

            const strArr = data.split(",");   
            
            let numArr = [];

            for(let i of strArr) {                
                numArr.push(parseFloat(i));                
            }
            const calc = new FenixCalculator(numArr);
            const res = calc.statistical();
            txt_('res_avg', 'Média: ' + res.mean);
            txt_('res_median', 'Mediana: ' + res.med);
            

        }        
        

    });

    attach('button_std_dv', 'click', function () {        
       
        const data = val('text_std_dv');
        
        if(data == null || data.localeCompare('') == 0) {

            alert("Dados inválidos. Informe apenas números separados por vírgula (,).");

        } else {                        
                                    
            const strArr = data.split(",");   
            
            let numArr = [];

            for(let i of strArr) {                
                numArr.push(parseFloat(i));                
            }
            const calc = new FenixCalculator(numArr);
            const res = calc.statistical();
            txt_('res_std_dv_pop', 'Desvio-Padrão Populacional: ' + res.stdvPop);
            txt_('res_std_dv_sample', 'Desvio-Padrão Amostral: ' + res.stdvSp);
            
        }        
        

    });

    attach('button_variance', 'click', function () {        
       
        const data = val('text_variance');
        
        if(data == null || data.localeCompare('') == 0) {

            alert("Dados inválidos. Informe apenas números separados por vírgula (,).");

        } else {                        
                                    
            const strArr = data.split(",");   
            
            let numArr = [];

            for(let i of strArr) {                
                numArr.push(parseFloat(i));                
            }
            const calc = new FenixCalculator(numArr);
            const res = calc.statistical();
            txt_('res_variance_pop', 'Variância Populacional: ' + res.variancePop);
            txt_('res_variance_sample', 'Variância Amostral: ' + res.varianceSp);
            
        }        
        

    });

    attach('button_cv', 'click', function () {        
       
        const data = val('text_cv');
        
        if(data == null || data.localeCompare('') == 0) {

            alert("Dados inválidos. Informe apenas números separados por vírgula (,).");

        } else {                        
                                    
            const strArr = data.split(",");   
            
            let numArr = [];

            for(let i of strArr) {                
                numArr.push(parseFloat(i));                
            }
            const calc = new FenixCalculator(numArr);
            const res = calc.statistical();
            txt_('res_cv_pop', 'Coeficiente de Variação Populacional: ' + res.cvPop);
            txt_('res_cv_sample', 'Coeficiente de Variação Amostral: ' + res.cvSp);
            
        }        
        

    });

    attach('button_cur', 'click', function () {        
       
        const data = val('text_cur');
        
        if(data == null || data.localeCompare('') == 0) {

            alert("Dados inválidos. Informe apenas números separados por vírgula (,).");

        } else {                        
                                    
            const strArr = data.split(",");   
            
            let numArr = [];

            for(let i of strArr) {                
                numArr.push(parseFloat(i));                
            }
            const calc = new FenixCalculator(numArr);
            const res = calc.statistical();
            txt_('res_cur_pop', 'Curtose Populacional: ' + res.kurtosisPop);
            txt_('res_cur_sample', 'Curtose Amostral: ' + res.kurtosisSp);
            
        }        
        

    });

    attach('button_asy', 'click', function () {        
       
        const data = val('text_asy');
        
        if(data == null || data.localeCompare('') == 0) {

            alert("Dados inválidos. Informe apenas números separados por vírgula (,).");

        } else {                        
                                    
            const strArr = data.split(",");   
            
            let numArr = [];

            for(let i of strArr) {                
                numArr.push(parseFloat(i));                
            }
            const calc = new FenixCalculator(numArr);
            const res = calc.statistical();
            txt_('res_asy_pop', 'Assimetria Populacional: ' + res.skewnessPop);
            txt_('res_asy_sample', 'Assimetria Amostral: ' + res.skewnessSp);
            
        }                
    });

    attach('button_jur', 'click', function () {        
       
        const capital = val('capital');
        const taxa = val('taxa');
        const tempo = val('tempo');        
        const juros = val('juros');        
        

        if(capital.localeCompare('') == 0) {
            if(taxa.localeCompare('') != 0 && tempo.localeCompare('') != 0 && juros.localeCompare('') != 0)   {
                
                let resS = ((100 * juros) / (taxa * tempo));
                alert('Capital (Juros Simples): R$ ' + resS);

            } else {
                alert('Preenchimento incorreto. Apenas o campo a ser calculado deve estar em branco!');
            }
        } else if(taxa.localeCompare('') == 0) {
            if(capital.localeCompare('') != 0 && tempo.localeCompare('') != 0 && juros.localeCompare('') != 0)   {
                
                let resS = ((100 * juros) / (capital * tempo));
                alert('Taxa (Juros Simples): ' + resS + '%');

            } else {
                alert('Preenchimento incorreto. Apenas o campo a ser calculado deve estar em branco!');
            }
        } else if(tempo.localeCompare('') == 0) {
            if(capital.localeCompare('') != 0 && taxa.localeCompare('') != 0 && juros.localeCompare('') != 0)   {
                
                let resS = ((100 * juros) / (capital * taxa));
                alert('Tempo (Juros Simples): ' + resS);

            } else {
                alert('Preenchimento incorreto. Apenas o campo a ser calculado deve estar em branco!');
            }
        } else if(juros.localeCompare('') == 0) {
            if(capital.localeCompare('') != 0 && taxa.localeCompare('') != 0 && tempo.localeCompare('') != 0)   {
                
                let resS = ((capital * taxa * tempo) / 100);
                alert('Juros Simples: R$ ' + resS);

            } else {
                alert('Preenchimento incorreto. Apenas o campo a ser calculado deve estar em branco!');
            }
        }        

    });


    attach('button_jurC', 'click', function () {                
       
        const capital = val('capitalC');
        const taxa = val('taxaC');
        const tempo = val('tempoC');        
        const juros = val('jurosC');        
        const montante = val('montante');        
        

        if(capital.localeCompare('') == 0 && montante.localeCompare('') != 0 && juros.localeCompare('') != 0 && taxa.localeCompare('') != 0 && tempo.localeCompare('') != 0) {
                
                let resS = montante - juros;
                alert('Capital (Juros Compostos): R$ ' + resS);
            
        } else if(taxa.localeCompare('') == 0 && capital.localeCompare('') != 0 && tempo.localeCompare('') != 0 && juros.localeCompare('') != 0 && montante.localeCompare('') != 0)   {
                
                let resS = (Math.pow(montante/capital, 1/tempo) - 1) * 100;
                alert('Taxa (Juros Compostos): ' + resS + '%');
            
        } else if(tempo.localeCompare('') == 0 && capital.localeCompare('') != 0 && taxa.localeCompare('') != 0 && juros.localeCompare('') != 0 && montante.localeCompare('') != 0)   {
                
                let resS = Math.log(montante / capital) / Math.log(1 + (taxa/100));
                alert('Tempo (Juros Compostos): ' + resS);
                
        } else if(juros.localeCompare('') == 0 && capital.localeCompare('') != 0 && taxa.localeCompare('') != 0 && tempo.localeCompare('') != 0 && montante.localeCompare('') != 0)   {
                
                let resS = capital * Math.pow(1 + (taxa/100),tempo);
                resS -= capital;
                alert('Juros Compostos: R$ ' + resS);            

        } else if(juros.localeCompare('') == 0 && capital.localeCompare('') != 0 && montante.localeCompare('') != 0 && taxa.localeCompare('') == 0 && tempo.localeCompare('') == 0) {                
                
                let resS = montante - capital;
                alert('Juros Compostos: R$ ' + resS);            
        
        } else if(montante.localeCompare('') == 0 && capital.localeCompare('') != 0 && taxa.localeCompare('') != 0 && tempo.localeCompare('') != 0 && juros.localeCompare('') != 0) {
                
                let resS = capital * Math.pow(1 + (taxa/100),tempo);
                alert('Montante (Juros Compostos): R$ ' + resS);


        } else if(montante.localeCompare('') == 0 && juros.localeCompare('') != 0 && capital.localeCompare('') != 0 && taxa.localeCompare('') == 0 && tempo.localeCompare('') == 0) {
                
                let resS = parseFloat(capital) + parseFloat(juros);
                alert('Montante (Juros Compostos): R$ ' + resS);

        } else {
                alert('Preenchimento incorreto. Apenas o campo a ser calculado e/ou o(s) campo(s) desnecessários deve(m) estar em branco!');
            
        }             

    });    

}