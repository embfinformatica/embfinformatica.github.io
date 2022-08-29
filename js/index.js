function main() {
    
    const tasks = new Tasks();    

    var isServerReady = false;
    
    let slidesSettingsTi = {
        'photo' : 'photo',
        'title' : 'title',        
        'link' : 'link1',
        'position' : 0 
    }

    let slidesSettingsDet = {
        'photo' : 'photo',
        'title' : 'title',        
        'link' : 'link1',
        'position' : 0 
    }

    var dataLink = 'docs/data_analysis/pdf/inss_beneficio.pdf';                

    if(slidesSettingsTi.position == 0) {
        S('consult01').color = 'yellowgreen';
    }

    if(slidesSettingsDet.position == 0) {
        S('det01').color = 'yellowgreen';
    }
    

    S('data01').color = 'yellowgreen';
    
    S('data_img').width = '40em';
    S('data_img').height = '28em';
    

    setInterval(parseSlidesTi, 3000);

    setInterval(parseSlidesDet, 3000);
    

    function parseSlidesTi() {
        
        const photos = ['url(\"img_/informatics/data_mining.jpg\")','url(\"img_/security/computer_padlock.jpg\")','url(\"img_/security/test.jpg\")','url(\"img_/job/mobile.jpg\"','url(\"img_/informatics/magic_cube.jpg\"'];
        const titles = ['Assessoria em Tecnologia da Informação Remota','Medidas Preventivas e Corretivas em SGBD','Detecção e Remoção de Trojans, Keyloggers e Ameaças','Alcance Clientes com seu app na Play Store e na Apple Store', 'Revisão Completa no PC, Internet, Desempenho de Memória e Análise de Configurações'];        
        const links = ['link01','link02','link03','link04','link05'];              

        if(slidesSettingsTi.position == 4) {
            slidesSettingsTi.position = 0;
        } else {
            slidesSettingsTi.position++;
        }
        

        slidesSettingsTi.photo = photos[slidesSettingsTi.position];
        slidesSettingsTi.title = titles[slidesSettingsTi.position];        
        slidesSettingsTi.link = links[slidesSettingsTi.position];                

        S('consult_container').backgroundImage = slidesSettingsTi.photo;
        S('consult_container').backgroundSize = 'cover';
        txt_('consult_title',titles[slidesSettingsTi.position]);        

        const pos = slidesSettingsTi.position;

        switch (pos) {
            case 0:   
                S('consult01').color = 'yellowgreen';   
                S('consult02').color = 'white';
                S('consult03').color = 'white';
                S('consult04').color = 'white';
                S('consult05').color = 'white';
                break;

            case 1:
                S('consult02').color = 'yellowgreen';   
                S('consult01').color = 'white';
                S('consult03').color = 'white';
                S('consult04').color = 'white';
                S('consult05').color = 'white';
                break;

            case 2:
                S('consult03').color = 'yellowgreen';   
                S('consult01').color = 'white';
                S('consult02').color = 'white';
                S('consult04').color = 'white';
                S('consult05').color = 'white';
                break;

            case 3:
                S('consult04').color = 'yellowgreen';   
                S('consult01').color = 'white';
                S('consult02').color = 'white';
                S('consult03').color = 'white';
                S('consult05').color = 'white';
                break;

            case 4:
                S('consult05').color = 'yellowgreen';   
                S('consult01').color = 'white';
                S('consult02').color = 'white';
                S('consult03').color = 'white';
                S('consult04').color = 'white';
                break;
        
            default:
                break;
        }
                                        
    }

    function parseSlidesDet() {
        
        const photos = ['url(\"img_/detetive/05_latent.jpg\")','url(\"img_/detetive/magnify_people.jpg\")','url(\"img_/detetive/hacker.jpg\")','url(\"img_/detetive/court_evidence.jpg\"','url(\"img_/detetive/home_office.jpg\"'];
        const titles = ['Digitais Invisíveis','Investigação de Rotinas Profissional, Social e Pessoal','Recuperação de Dispositivos Hackeados, inclusive Redes Sociais','Elaboração de Evidências no Processo Civil ou Administrativo', 'Acompanhamento de Pessoas'];        
        const links = ['link01','link02','link03','link04','link05'];              

        if(slidesSettingsDet.position == 4) {
            slidesSettingsDet.position = 0;
        } else {
            slidesSettingsDet.position++;
        }
        

        slidesSettingsDet.photo = photos[slidesSettingsDet.position];
        slidesSettingsDet.title = titles[slidesSettingsDet.position];        
        slidesSettingsDet.link = links[slidesSettingsDet.position];                

        S('detective_container').backgroundImage = slidesSettingsDet.photo;
        S('detective_container').backgroundSize = 'cover';
        txt_('det_title',titles[slidesSettingsDet.position]);        

        const pos = slidesSettingsDet.position;

        switch (pos) {
            case 0:   
                S('det01').color = 'yellowgreen';   
                S('det02').color = 'white';
                S('det03').color = 'white';
                S('det04').color = 'white';
                S('det05').color = 'white';
                break;

            case 1:
                S('det02').color = 'yellowgreen';   
                S('det01').color = 'white';
                S('det03').color = 'white';
                S('det04').color = 'white';
                S('det05').color = 'white';
                break;

            case 2:
                S('det03').color = 'yellowgreen';   
                S('det01').color = 'white';
                S('det02').color = 'white';
                S('det04').color = 'white';
                S('det05').color = 'white';
                break;

            case 3:
                S('det04').color = 'yellowgreen';   
                S('det01').color = 'white';
                S('det02').color = 'white';
                S('det03').color = 'white';
                S('det05').color = 'white';
                break;

            case 4:
                S('det05').color = 'yellowgreen';   
                S('det01').color = 'white';
                S('det02').color = 'white';
                S('det03').color = 'white';
                S('det04').color = 'white';
                break;
        
            default:
                break;
        }
                                        
    }    

     attach('consult01','click',function () {

        const magic = 0;
       
        const photos = ['url(\"img_/informatics/data_mining.jpg\")','url(\"img_/security/computer_padlock.jpg\")','url(\"img_/security/test.jpg\")','url(\"img_/job/mobile.jpg\"','url(\"img_/informatics/magic_cube.jpg\"'];
        const titles = ['Assessoria em Tecnologia da Informação Remota','Medidas Preventivas e Corretivas em SGBD','Detecção e Remoção de Trojans, Keyloggers e Ameaças','Alcance Clientes com seu app na Play Store e na Apple Store', 'Revisão Completa no PC, Internet, Desempenho de Memória e Análise de Configurações'];        
        const links = ['link01','link02','link03','link04','link05'];              

        slidesSettingsTi.position = 0;        

        slidesSettingsTi.photo = photos[magic];
        slidesSettingsTi.title = titles[magic];        
        slidesSettingsTi.link = links[magic];                

        S('consult_container').backgroundImage = slidesSettingsTi.photo;
        S('consult_container').backgroundSize = 'cover';
        txt_('consult_title',titles[magic]);        

        S('consult01').color = 'yellowgreen';   
        S('consult02').color = 'white';
        S('consult03').color = 'white';
        S('consult04').color = 'white';
        S('consult05').color = 'white';
                    
    });

    attach('consult02','click',function () {
        const magic = 1;
       
        const photos = ['url(\"img_/informatics/data_mining.jpg\")','url(\"img_/security/computer_padlock.jpg\")','url(\"img_/security/test.jpg\")','url(\"img_/job/mobile.jpg\"','url(\"img_/informatics/magic_cube.jpg\"'];
        const titles = ['Assessoria em Tecnologia da Informação Remota','Medidas Preventivas e Corretivas em SGBD','Detecção e Remoção de Trojans, Keyloggers e Ameaças','Alcance Clientes com seu app na Play Store e na Apple Store', 'Revisão Completa no PC, Internet, Desempenho de Memória e Análise de Configurações'];        
        const links = ['link01','link02','link03','link04','link05'];              

        slidesSettingsTi.position = magic;        

        slidesSettingsTi.photo = photos[magic];
        slidesSettingsTi.title = titles[magic];        
        slidesSettingsTi.link = links[magic];                

        S('consult_container').backgroundImage = slidesSettingsTi.photo;
        S('consult_container').backgroundSize = 'cover';
        txt_('consult_title',titles[magic]);        

        S('consult02').color = 'yellowgreen';   
        S('consult01').color = 'white';
        S('consult03').color = 'white';
        S('consult04').color = 'white';
        S('consult05').color = 'white';
    });

    attach('consult03','click',function () {
        const magic = 2;
       
        const photos = ['url(\"img_/informatics/data_mining.jpg\")','url(\"img_/security/computer_padlock.jpg\")','url(\"img_/security/test.jpg\")','url(\"img_/job/mobile.jpg\"','url(\"img_/informatics/magic_cube.jpg\"'];
        const titles = ['Assessoria em Tecnologia da Informação Remota','Medidas Preventivas e Corretivas em SGBD','Detecção e Remoção de Trojans, Keyloggers e Ameaças','Alcance Clientes com seu app na Play Store e na Apple Store', 'Revisão Completa no PC, Internet, Desempenho de Memória e Análise de Configurações'];        
        const links = ['link01','link02','link03','link04','link05'];              

        slidesSettingsTi.position = magic;        

        slidesSettingsTi.photo = photos[magic];
        slidesSettingsTi.title = titles[magic];        
        slidesSettingsTi.link = links[magic];                

        S('consult_container').backgroundImage = slidesSettingsTi.photo;
        S('consult_container').backgroundSize = 'cover';
        txt_('consult_title',titles[magic]);        

        S('consult03').color = 'yellowgreen';   
        S('consult01').color = 'white';
        S('consult02').color = 'white';
        S('consult04').color = 'white';
        S('consult05').color = 'white';
     });
 
     attach('consult04','click',function () {
        const magic = 3;
       
        const photos = ['url(\"img_/informatics/data_mining.jpg\")','url(\"img_/security/computer_padlock.jpg\")','url(\"img_/security/test.jpg\")','url(\"img_/job/mobile.jpg\"','url(\"img_/informatics/magic_cube.jpg\"'];
        const titles = ['Assessoria em Tecnologia da Informação Remota','Medidas Preventivas e Corretivas em SGBD','Detecção e Remoção de Trojans, Keyloggers e Ameaças','Alcance Clientes com seu app na Play Store e na Apple Store', 'Revisão Completa no PC, Internet, Desempenho de Memória e Análise de Configurações'];        
        const links = ['link01','link02','link03','link04','link05'];              

        slidesSettingsTi.position = magic;        

        slidesSettingsTi.photo = photos[magic];
        slidesSettingsTi.title = titles[magic];        
        slidesSettingsTi.link = links[magic];                

        S('consult_container').backgroundImage = slidesSettingsTi.photo;
        S('consult_container').backgroundSize = 'cover';
        txt_('consult_title',titles[magic]);        

        S('consult04').color = 'yellowgreen';   
        S('consult01').color = 'white';
        S('consult02').color = 'white';
        S('consult03').color = 'white';
        S('consult05').color = 'white';
     });

     attach('consult05','click',function () {
        const magic = 4;
       
        const photos = ['url(\"img_/informatics/data_mining.jpg\")','url(\"img_/security/computer_padlock.jpg\")','url(\"img_/security/test.jpg\")','url(\"img_/job/mobile.jpg\"','url(\"img_/informatics/magic_cube.jpg\"'];
        const titles = ['Assessoria em Tecnologia da Informação Remota','Medidas Preventivas e Corretivas em SGBD','Detecção e Remoção de Trojans, Keyloggers e Ameaças','Alcance Clientes com seu app na Play Store e na Apple Store', 'Revisão Completa no PC, Internet, Desempenho de Memória e Análise de Configurações'];        
        const links = ['link01','link02','link03','link04','link05'];              

        slidesSettingsTi.position = magic;        

        slidesSettingsTi.photo = photos[magic];
        slidesSettingsTi.title = titles[magic];        
        slidesSettingsTi.link = links[magic];                

        S('consult_container').backgroundImage = slidesSettingsTi.photo;
        S('consult_container').backgroundSize = 'cover';
        txt_('consult_title',titles[magic]);        

        S('consult05').color = 'yellowgreen';   
        S('consult01').color = 'white';
        S('consult02').color = 'white';
        S('consult03').color = 'white';
        S('consult04').color = 'white';
     });

     attach('det01','click',function () {

        const magic = 0;
       
        const photos = ['url(\"img_/detetive/05_latent.jpg\")','url(\"img_/detetive/magnify_people.jpg\")','url(\"img_/detetive/hacker.jpg\")','url(\"img_/detetive/court_evidence.jpg\"','url(\"img_/detetive/home_office.jpg\"'];
        const titles = ['Digitais Invisíveis','Investigação de Rotinas Profissional, Social e Pessoal','Recuperação de Dispositivos Hackeados, inclusive Redes Sociais','Elaboração de Evidências no Processo Civil ou Administrativo', 'Acompanhamento de Pessoas'];        
        const links = ['link01','link02','link03','link04','link05'];               

        slidesSettingsDet.position = 0;        

        slidesSettingsDet.photo = photos[magic];
        slidesSettingsDet.title = titles[magic];        
        slidesSettingsDet.link = links[magic];                

        S('detective_container').backgroundImage = slidesSettingsDet.photo;
        S('detective_container').backgroundSize = 'cover';
        txt_('det_title',titles[magic]);        

        S('det01').color = 'yellowgreen';   
        S('det02').color = 'white';
        S('det03').color = 'white';
        S('det04').color = 'white';
        S('det05').color = 'white';
                    
    });

    attach('det02','click',function () {
        const magic = 1;
       
        const photos = ['url(\"img_/detetive/05_latent.jpg\")','url(\"img_/detetive/magnify_people.jpg\")','url(\"img_/detetive/hacker.jpg\")','url(\"img_/detetive/court_evidence.jpg\"','url(\"img_/detetive/home_office.jpg\"'];
        const titles = ['Digitais Invisíveis','Investigação de Rotinas Profissional, Social e Pessoal','Recuperação de Dispositivos Hackeados, inclusive Redes Sociais','Elaboração de Evidências no Processo Civil ou Administrativo', 'Acompanhamento de Pessoas'];        
        const links = ['link01','link02','link03','link04','link05'];               

        slidesSettingsDet.position = magic;        

        slidesSettingsDet.photo = photos[magic];
        slidesSettingsDet.title = titles[magic];        
        slidesSettingsDet.link = links[magic];                

        S('detective_container').backgroundImage = slidesSettingsDet.photo;
        S('detective_container').backgroundSize = 'cover';
        txt_('det_title',titles[magic]);        

        S('det02').color = 'yellowgreen';   
        S('det01').color = 'white';
        S('det03').color = 'white';
        S('det04').color = 'white';
        S('det05').color = 'white';
    });

    attach('det03','click',function () {
        const magic = 2;
       
        const photos = ['url(\"img_/detetive/05_latent.jpg\")','url(\"img_/detetive/magnify_people.jpg\")','url(\"img_/detetive/hacker.jpg\")','url(\"img_/detetive/court_evidence.jpg\"','url(\"img_/detetive/home_office.jpg\"'];
        const titles = ['Digitais Invisíveis','Investigação de Rotinas Profissional, Social e Pessoal','Recuperação de Dispositivos Hackeados, inclusive Redes Sociais','Elaboração de Evidências no Processo Civil ou Administrativo', 'Acompanhamento de Pessoas'];        
        const links = ['link01','link02','link03','link04','link05'];              

        slidesSettingsDet.position = magic;        

        slidesSettingsDet.photo = photos[magic];
        slidesSettingsDet.title = titles[magic];        
        slidesSettingsDet.link = links[magic];                

        S('detective_container').backgroundImage = slidesSettingsDet.photo;
        S('detective_container').backgroundSize = 'cover';
        txt_('det_title',titles[magic]);        

        S('det03').color = 'yellowgreen';   
        S('det01').color = 'white';
        S('det02').color = 'white';
        S('det04').color = 'white';
        S('det05').color = 'white';
     });
 
     attach('det04','click',function () {
        const magic = 3;
       
        const photos = ['url(\"img_/detetive/05_latent.jpg\")','url(\"img_/detetive/magnify_people.jpg\")','url(\"img_/detetive/hacker.jpg\")','url(\"img_/detetive/court_evidence.jpg\"','url(\"img_/detetive/home_office.jpg\"'];
        const titles = ['Digitais Invisíveis','Investigação de Rotinas Profissional, Social e Pessoal','Recuperação de Dispositivos Hackeados, inclusive Redes Sociais','Elaboração de Evidências no Processo Civil ou Administrativo', 'Acompanhamento de Pessoas'];        
        const links = ['link01','link02','link03','link04','link05'];             

        slidesSettingsDet.position = magic;        

        slidesSettingsDet.photo = photos[magic];
        slidesSettingsDet.title = titles[magic];        
        slidesSettingsDet.link = links[magic];                

        S('detective_container').backgroundImage = slidesSettingsDet.photo;
        S('detective_container').backgroundSize = 'cover';
        txt_('det_title',titles[magic]);        

        S('det04').color = 'yellowgreen';   
        S('det01').color = 'white';
        S('det02').color = 'white';
        S('det03').color = 'white';
        S('det05').color = 'white';
     });

     attach('det05','click',function () {
        const magic = 4;
       
        const photos = ['url(\"img_/detetive/05_latent.jpg\")','url(\"img_/detetive/magnify_people.jpg\")','url(\"img_/detetive/hacker.jpg\")','url(\"img_/detetive/court_evidence.jpg\"','url(\"img_/detetive/home_office.jpg\"'];
        const titles = ['Digitais Invisíveis','Investigação de Rotinas Profissional, Social e Pessoal','Recuperação de Dispositivos Hackeados, inclusive Redes Sociais','Elaboração de Evidências no Processo Civil ou Administrativo', 'Acompanhamento de Pessoas'];        
        const links = ['link01','link02','link03','link04','link05'];            

        slidesSettingsDet.position = magic;        

        slidesSettingsDet.photo = photos[magic];
        slidesSettingsDet.title = titles[magic];        
        slidesSettingsDet.link = links[magic];                

        S('detective_container').backgroundImage = slidesSettingsDet.photo;
        S('detective_container').backgroundSize = 'cover';
        txt_('det_title',titles[magic]);        

        S('det05').color = 'yellowgreen';   
        S('det01').color = 'white';
        S('det02').color = 'white';
        S('det03').color = 'white';
        S('det04').color = 'white';
     });     

     attach('data01', 'over', function () {
         
        S('data01').color = 'yellowgreen';
        S('data02').color = 'black';
        S('data03').color = 'black';
        S('data04').color = 'black';
        ob('data_img').src = 'img_/detetive/graphs.jpg';      
        txt_('data_description','Deixe de lado as velhas planilhas de formatação condicional com fórmulas de soma e subtração e conheça o poder das linguagens de programação R e Python, capazes de trazer à sua empresa dados cruciais de difícil consecução.');  
        dataLink = 'docs/data_analysis/pdf/inss_beneficio.pdf';

     });

     attach('data02', 'over', function () {
         
        S('data02').color = 'yellowgreen';
        S('data01').color = 'black';
        S('data03').color = 'black';
        S('data04').color = 'black';
        ob('data_img').src = 'docs/data_analysis/img/obito_pe.png';
        txt_('data_description','Mapas geográficos profissionais com temas variados, criado com algoritmos de ponta e baseado nos modelos originais disponibilizados pelo IBGE.');  
        dataLink = 'docs/data_analysis/pdf/obito_pe.pdf';
        

     });

     attach('data03', 'over', function () {
         
        S('data03').color = 'yellowgreen';
        S('data01').color = 'black';
        S('data02').color = 'black';
        S('data04').color = 'black';
        ob('data_img').src = 'docs/data_analysis/img/analise_dados_tarifa_aneel.png';
        txt_('data_description','Obtenha um relatório com precisão, escrito em uma linguagem estruturada e formal, com Introdução, Desenvolvimento e Conclusão, combinando uma redação concisa e gráficos de suporte.');  
        dataLink = 'docs/data_analysis/pdf/vendas_combustivel_.pdf';

     });

     attach('data04', 'over', function () {
         
        S('data04').color = 'yellowgreen';
        S('data01').color = 'black';
        S('data02').color = 'black';
        S('data03').color = 'black';
        ob('data_img').src = 'docs/data_analysis/img/box_bruto.png';
        txt_('data_description','Um gráfico bem elaborado vale mais do que mil palavras ou dezenas de tabelas. Tenha gráficos avançados como o Box-Plot e Histograma e veja resultados mais avançados do que os gráficos tradicionais.');  
        dataLink = 'docs/data_analysis/img/hist_bruto.png';
        
     });

     attach('tb_list_data', 'click', function () {
        
        tasks.go(dataLink);

     });       

}