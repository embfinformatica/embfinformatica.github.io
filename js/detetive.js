function main() {
    const tasks = new Tasks();
    const chat = new Chat();

    var isServerReady = false;        

    var toCount = 0;
    var categories = [
        'HACKER',
        'DIGITAIS',
        'FECHADURAS',
        'HACKER',
        'DIGITAIS',                
        'HACKER',
        'DIGITAIS',
        '',
        '',
        ''        
    ];
    var titles = [
        'Ataque Cibernético (Brute Force)',
        'Coleta Digitais (Pó Revelador)',
        'Abertura de Fechaduras',
        'Crackeando Sotware',
        'Coleta de Digitais (Iodo)',
        'Ataque Cibernético (SQL Injection)',
        'Coleta de Digitais (Cianoacrilato)',
        '',
        '',
        ''    
    ];
    var subtitles = [
        'Uso da Força Bruta para invasão',       
        'Método mais conhecido na perícia', 
        'Penetração física sem chave',
        'Prática da engenharia reversa',
        'Extração de digitais em papel',
        'Ataque comum a formulários WEB',
        'Uso do cianoacrilato em digitais',
        '',
        '',
        ''        
    ];
    var descriptions = [
        'O ataque de força bruta funciona como uma tentativa de acesso a um <br>sistema quando não sabem o usuário e a senha, mediante software robô.',
        'A extração de digitais mediante a impregnação de pó químico em superfície <br>de metal ou plástica é uma técnica realmente efetiva.',               
        'O Lock Picking é uma técnica de abertura de fechaduras quaisquer, <br>incluindo cadeados e portas, sem fazer uso da chave.',
        'Creackear software é a prática da engenharia reversa que tem o escopo de <br>alterar o conteúdo e comportamento do software, sem o código-fonte.',
        'Quando as digitais latentes estão em uma folha de papel, o método do pó <br>revelador mostra-se inefetivo, exigindo outras técnicas.',         
        'SQL Injection é bastante empregada nos ataques a um banco de dados <br>de um site especício, mediante o emprego de entradas maliciosas na WEB.',
        'A técnica de extração de digitais via cianoacrilato é uma das metodologias <br>forenses mais robustas, munindo o detetve de flexibilidade.',
        '',
        '',
        ''        
    ];
    var links = [
        'detetive/brute_force.html',
        'detetive/po.html',
        'detetive/lock_picking.html',        
        'detetive/crackeando.html',
        'detetive/iodo.html',
        'detetive/sql_injection.html',
        'detetive/cianoacrilato.html',
        '',
        '',
        ''        
    ];
    var images = [
        'detetive/brute_force.png',
        'detetive/po_digital.png',        
        'detetive/lock_picking.png',                
        'detetive/crackeando.png',
        'detetive/iodo.png',
        'detetive/sql_injection.png',
        'detetive/cianoacrilato.png',
        '',
        '',
        ''        
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
        loadNews();

    });

    attach('two', 'click', function () {
       
        toCount = 5;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "gray";        
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
        
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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
       
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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
       
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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
       
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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
       
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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
       
        const photos = ['url(\"img_/det/finger_brush.png\")','url(\"img_/hack/anon.jpg\")','url(\"img_/investigation/main.jpg\")','url(\"img_/det_job/main.png\"'];
        const titles = ['Papiloscopia','Investigação Cibernética','Investigação de Pessoas','Investigação de Empresas'];
        const subtitles = ['Coleta de digitais invisíveis','Resposta Rápida contra Hackers','Monitoramento efetivo e sigiloso','Análise e Perícia de PJ'];
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