function main() {
    const tasks = new Tasks();    

    var isServerReady = false;        

    var toCount = 0;
    var categories = [
        'ESTRATÉGIA',
        'CENÁRIOS',
        'CICLOS',
        'PROCESSOS',
        'PROGRAMAÇÃO'                        
    ];
    var titles = [
        'Análise SWOT',
        'Casos de Uso',
        'Monitoramento de Atividades',
        'Diagrama de Sequências',
        'Estruturas de Classes'        
    ];
    var subtitles = [
        'Coleta de Forças, Fraquezas, Oportunidades e Ameaças',       
        'Interação entre atores e cenários específicos', 
        'Análise geral do ciclo de atividades',
        'Interação entre atores e objetos do sistema',
        'Estudo das classes na Programação a Objetos'        
    ];
    var descriptions = [
        'Utilização da ferramenta SWOT, com o fim de situar a sua empresa <br>no cenário atual, mapeando os prós e contras para estratégias.',
        'De acordo com distintos cenários, entenda o comportamento dos <br>usuários de um sistema com o diagrama de casos de uso.',               
        'O diagrama de atividades monitora o ciclo completo de etapas de um projeto, <br>do início ao fim, passando inclusive por nós de decisões.',
        'Um dos mais completos e robustos diagramas da UML, o de sequência, mune <br>os Stakeholders de uma noção completa dos objetos e atores sistêmicos.',
        'A Classe é uma unidade basilar na Programação Orientada a Objetos (POO). <br>Assim, sem rigor técnico, é feita uma abstração do modelo.'        
    ];
    var links = [
        'consultoria/img/swot.jpg',
        'consultoria/img/use_case.jpg',
        'consultoria/img/activity_diagram.jpg',        
        'consultoria/img/sequence_diagram.jpg',
        'consultoria/img/class_diagram.jpg',        
    ];
    var images = [
        'consultoria/img/swot.jpg',
        'consultoria/img/use_case.jpg',
        'consultoria/img/activity_diagram.jpg',        
        'consultoria/img/sequence_diagram.jpg',
        'consultoria/img/class_diagram.jpg',        
    ];

    loadNews();

    function loadNews() {
        
        txt('title01', titles[toCount]);
        txt('subtitle01', subtitles[toCount]);
        txt('description01', descriptions[toCount]);
        txt('category01', categories[toCount]);
        S('image01').backgroundImage = 'url(\'' + images[toCount] + '\')';

        txt('title02', titles[toCount + 1]);
        txt('subtitle02', subtitles[toCount + 1]);
        txt('description02', descriptions[toCount + 1]);
        txt('category02', categories[toCount + 1]);
        S('image02').backgroundImage = 'url(\'' + images[toCount + 1] + '\')';

        txt('title03', titles[toCount + 2]);
        txt('subtitle03', subtitles[toCount + 2]);
        txt('description03', descriptions[toCount + 2]);
        txt('category03', categories[toCount + 2]);
        S('image03').backgroundImage = 'url(\'' + images[toCount + 2] + '\')';        

        txt('title04', titles[toCount + 3]);
        txt('subtitle04', subtitles[toCount + 3]);
        txt('description04', descriptions[toCount + 3]);
        txt('category04', categories[toCount + 3]);
        S('image04').backgroundImage = 'url(\'' + images[toCount + 3] + '\')';

        txt('title05', titles[toCount + 4]);
        txt('subtitle05', subtitles[toCount + 4]);
        txt('description05', descriptions[toCount + 4]);
        txt('category05', categories[toCount + 4]);
        S('image05').backgroundImage = 'url(\'' + images[toCount + 4] + '\')';
    }

    attach('one', 'click', function () {
       
        toCount = 0;
        S('one').backgroundColor = "gray";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "black";              
        loadNews();

    });    
    

    attach('link01', 'click', function () {       
        tasks.go(links[toCount]);        
    });

    attach('link02', 'click', function () {       
        tasks.go(links[toCount + 1]);        
    });

    attach('link03', 'click', function () {       
        tasks.go(links[toCount + 2]);        
    });

    attach('link04', 'click', function () {       
        tasks.go(links[toCount + 3]);        
    });

    attach('link05', 'click', function () {       
        tasks.go(links[toCount + 4]);        
    });

    let slidesSettings = {
        'photo' : 'photo',
        'title' : 'title',
        'subtitle' : 'subtitle',
        'link' : 'software_java.html',
        'position' : 0 
    }

    if(slidesSettings.position == 0) {
        S('point_one').backgroundColor = 'crimson';   

    }

    setInterval(parseSlides,3000);

    function parseSlides() {
        
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              

        if(slidesSettings.position == 3) {
            slidesSettings.position = 0;
        } else {
            slidesSettings.position++;
        }
        

        slidesSettings.photo = photos[slidesSettings.position];
        slidesSettings.title = titles[slidesSettings.position];
        slidesSettings.subtitle = subtitles[slidesSettings.position];
        slidesSettings.link = links[slidesSettings.position];                

        S('slide').backgroundImage = slidesSettings.photo;
        txt_('slide_title',titles[slidesSettings.position]);
        txt('slide_subtitle',subtitles[slidesSettings.position]);

        const pos = slidesSettings.position;

        switch (pos) {
            case 0:   
                S('point_one').backgroundColor = 'crimson';   
                S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';

                break;

            case 1:
                S('point_two').backgroundColor = 'crimson';
                S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
                break;

            case 2:
                S('point_three').backgroundColor = 'crimson';
                S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
                break;

            case 3:
                S('point_four').backgroundColor = 'crimson';
                S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                break;
        
            default:
                break;
        }
                                        
    }

    attach('left_arrow','click',function () {        
       
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              
        
        const index = slidesSettings.position;      
          
        if(index > 0) {
            slidesSettings.position -= 1;            
        } else {            
            return;
        }

            slidesSettings.photo = photos[index - 1];
            slidesSettings.title = titles[index - 1];
            slidesSettings.subtitle = subtitles[index - 1];
            slidesSettings.link = links[index - 1];                

            S('slide').backgroundImage = slidesSettings.photo;
            txt_('slide_title',titles[index - 1]);
            txt('slide_subtitle',subtitles[index - 1]);

            const pos = slidesSettings.position;

            switch (pos) {
                case 0:   
                    S('point_one').backgroundColor = 'crimson';   
                    S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';

                    break;

                case 1:
                    S('point_two').backgroundColor = 'crimson';
                    S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
                    break;

                case 2:
                    S('point_three').backgroundColor = 'crimson';
                    S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
                    break;

                case 3:
                    S('point_four').backgroundColor = 'crimson';
                    S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                    break;
        
                default:
                    break;
            }                    

    });

    attach('right_arrow','click',function () {
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              
        
        const index = slidesSettings.position;      
          
        if(index < 3) {
            slidesSettings.position += 1;            
        } else {            
            return;
        }

            slidesSettings.photo = photos[index + 1];
            slidesSettings.title = titles[index + 1];
            slidesSettings.subtitle = subtitles[index + 1];
            slidesSettings.link = links[index + 1];                

            S('slide').backgroundImage = slidesSettings.photo;
            txt_('slide_title',titles[index + 1]);
            txt('slide_subtitle',subtitles[index + 1]);

            const pos = slidesSettings.position;

            switch (pos) {
                case 0:   
                    S('point_one').backgroundColor = 'crimson';   
                    S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';

                    break;

                case 1:
                    S('point_two').backgroundColor = 'crimson';
                    S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
                    break;

                case 2:
                    S('point_three').backgroundColor = 'crimson';
                    S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
                    break;

                case 3:
                    S('point_four').backgroundColor = 'crimson';
                    S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
                    S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
                    break;
        
                default:
                    break;
            }


    });

    attach('point_one','click',function () {

        const magic = 0;
       
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              
        
        const index = slidesSettings.position;      
          
        
        slidesSettings.position = magic;            
        

            slidesSettings.photo = photos[magic];
            slidesSettings.title = titles[magic];
            slidesSettings.subtitle = subtitles[magic];
            slidesSettings.link = links[magic];                

            S('slide').backgroundImage = slidesSettings.photo;
            txt_('slide_title',titles[magic]);
            txt('slide_subtitle',subtitles[magic]);

            S('point_one').backgroundColor = 'crimson';   
            S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
            

    });

    attach('point_two','click',function () {
        const magic = 1;
       
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              
        
        const index = slidesSettings.position;      
          
        
        slidesSettings.position = magic;            
        

            slidesSettings.photo = photos[magic];
            slidesSettings.title = titles[magic];
            slidesSettings.subtitle = subtitles[magic];
            slidesSettings.link = links[magic];                

            S('slide').backgroundImage = slidesSettings.photo;
            txt_('slide_title',titles[magic]);
            txt('slide_subtitle',subtitles[magic]);

            S('point_two').backgroundColor = 'crimson';   
            S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
    });

    attach('point_three','click',function () {
        const magic = 2;
       
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              
        
        const index = slidesSettings.position;      
          
        
        slidesSettings.position = magic;            
        

            slidesSettings.photo = photos[magic];
            slidesSettings.title = titles[magic];
            slidesSettings.subtitle = subtitles[magic];
            slidesSettings.link = links[magic];                

            S('slide').backgroundImage = slidesSettings.photo;
            txt_('slide_title',titles[magic]);
            txt('slide_subtitle',subtitles[magic]);

            S('point_three').backgroundColor = 'crimson';   
            S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_four').backgroundColor = 'rgba(173,6,6,0.575)';
     });
 
     attach('point_four','click',function () {
        const magic = 3;
       
        const photos = ['url(\"img_/con_/01.jpg\")','url(\"img_/con_/05.jpg\")','url(\"img_/con_/09.jpg\")','url(\"img_/con_/13.jpg\"'];
        const titles = ['Modelagem de Projetos UML','Consultoria em Segurança de TI','Consultoria de Software','Consultoria para StartUP em TI'];
        const subtitles = ['Modelos de Processo e Negócio','Criptografia, Privacidade e Dados','Orientações para o Desenvolvimento','Agregando valor à Gestão'];
        const links = ['software_java.html','software_c_plus_plus.html','prompt.html','robots.html'];              
        
        const index = slidesSettings.position;      
          
        
        slidesSettings.position = magic;            
        

            slidesSettings.photo = photos[magic];
            slidesSettings.title = titles[magic];
            slidesSettings.subtitle = subtitles[magic];
            slidesSettings.link = links[magic];                

            S('slide').backgroundImage = slidesSettings.photo;
            txt_('slide_title',titles[magic]);
            txt('slide_subtitle',subtitles[magic]);

            S('point_four').backgroundColor = 'crimson';   
            S('point_two').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_three').backgroundColor = 'rgba(173,6,6,0.575)';
            S('point_one').backgroundColor = 'rgba(173,6,6,0.575)';
     });                                   
     
}