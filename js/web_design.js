function main() {
    const tasks = new Tasks();    

    var isServerReady = false;        

    if(!tasks.isHttps()) {
        tasks.set('https://eduardoprogramador.com/web_design.html');
    }
    
    var toCount = 0;
    var categories = [
        'CENTRALIZADO',
        'VERTICAL',
        'À DIREITA',
        'CENTRALIZADO',
        'OCULTO'
    ];
    var titles = [
        'Suave Centralizado',
        'Vertical Esquerdo',
        'Alinhado à Direita',
        'Fundo em Destaque',
        'Oculto e Vídeo'
    ];
    var subtitles = [
        'Menu centralizado com fundo suave',       
        'Menu vertical com fundo suave', 
        'Menu alinhado à direita e suave',
        'Menu centralizado e fundo forte',
        'Menu oculto e vídeo no fundo'
    ];
    var descriptions = [
        'Estilo com menu centralizado, fundo suave e detalhes <br>com imagens no centro, refletindo dizeres.',
        'Estilo com o menu do tipo vertical, similar à barra <br>de porcentagem, com detalhes de classe.',          
        'Estilo onde o menu é alinhado à direita e o centro é <br>livre de detalhes, evidenciando o plano de fundo.',
        'Estilo padrão onde o menu é centralizado, porém o fundo <br>é rico em detalhes e o menu é mais estilizado.',
        'Maravilhoso template que contém menu oculto em formato <br>de \"Hambúrguer\" e que possui vídeo no fundo.'
    ];
    var links = [
        'web_design/modelo_um.html',
        'web_design/modelo_dois.html',
        'web_design/modelo_tres.html',        
        'web_design/modelo_quatro.html',
        'web_design/modelo_cinco.html'
    ];
    var images = [
        'web_design/templates/01.png',
        'web_design/templates/02.png',        
        'web_design/templates/03.png',                
        'web_design/templates/04.png',
        'web_design/templates/05.png'
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
        
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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
       
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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
       
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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
       
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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
       
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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
       
        const photos = ['url(\"img_/web_design_/01.jpg")','url(\"img_/web_design_/05.jpg\")','url(\"img_/web_design_/09.jpg")','url(\"img_/web_design_/13.jpg"'];
        const titles = ['Construção de Web Sites','Aplicativos Web','API\'s para Desenvolvedores','Intranet e Soluções'];
        const subtitles = ['Sua empresa presente na Web','Soluções que independem da plataforma','Soluções Open Source','Integrações Personalizadas'];
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


    tasks.httpPost("php/main.php",encodeURI("date=" + tasks.getTime() + "&time=" + tasks.getTime() + "&acao=WebDesign_New_Site"),function () {
        
    });

    if(tasks.getCookie("_eduardoprogramador_com").localeCompare("") == 0) {            
        On("cookie");
    } else {            
        Off("cookie");
    }                                  

     attach('go_on', 'click', function () {
        
        let cookie = tasks.setCookie("_eduardoprogramador_com");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });               

        Off('cookie');

     });

     attach('chat', 'click', function () {
                        
        Off('chat');
        Off('chat_close');
        On('chat_main');
        _in('chat_main_input');

        chat.createChat(tasks.getCookie('_eduardoprogramador_com'));
        txt_('day_week', tasks.getOnlyDate());
        let initMsg = _txt('kelly_init_msg');
        initMsg += ' ' + tasks.getOnlyTime();
        txt_('kelly_init_msg', initMsg);

     });

     attach('chat_close', 'click', function () {
        Off('chat');
        Off('chat_close'); 
     });

     attach('chat_main_close', 'click', function () {
        
        Off('chat_main');
        On('chat');
        On('chat_close');

     });

     attach('chat_main_send', 'click', function () {
        
        const msg = val('chat_main_input');
        if(msg != null && msg.localeCompare('') != 0) {
            On('user_msg');
            let par = document.createElement('p');
            par.innerText = msg + ' ' + tasks.getOnlyTime();
            document.getElementById('user_msg').appendChild(par);

            valp('chat_main_input','');
            _in('chat_main_input');
            
            chat.putUserMsg(msg);

            if(!isServerReady) {
                isServerReady = true;
            }

            if(isServerReady) {
                chat.getServerMsg();
                isServerReady = false;
            }


        }

     });

    ob('chat_main_input').addEventListener('keydown', function (e) {
        
        if(e.keyCode == 13) {
            
            const msg = val('chat_main_input');
        if(msg != null && msg.localeCompare('') != 0) {
            On('user_msg');
            let par = document.createElement('p');
            par.innerText = msg + ' '+ tasks.getOnlyTime();
            ob('user_msg').appendChild(par);

            valp('chat_main_input','');
            _in('chat_main_input');
            
            chat.putUserMsg(msg);

            if(!isServerReady) {
                isServerReady = true;
            }

            if(isServerReady) {
                chat.getServerMsg();
                isServerReady = false;
            }
            
        }

        }

     });     

     attach('manage', 'click', function () {
        
        On('cookie_manage');

     });

     attach('btn_close_manage', 'click', function () {
        
        Off('cookie_manage');

     });

     attach('btn_save_manage', 'click', function () {
        
        alert('Configurações de Cookies Salvas com Sucesso!\n\nSomos pioneiros na implantação da Lei de Proteção de Dados (LGPD), e o melhor de tudo isso: com tecnologia própria, o que garante que seus dados não são processados com ferramentas de terceiros, aumentando ainda mais a sua segurança.\n\nObrigado! :)');

        Off('cookie_manage');
        Off('cookie');
        
        const follow = ob('cookie_follow').checked;
        const statistics = ob('cookie_statistics').checked;
        const security = ob('cookie_security').checked;
        const marketing = ob('cookie_marketing').checked;
        const better = ob('cookie_better').checked;

        if(follow) {

            if(tasks.getCookie("_eduardoprogramador_com_follow").localeCompare("") == 0) {            
                let cookie = tasks.setCookie("_eduardoprogramador_com_follow");                
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_follow&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });
            } 
        } else {
            if(!tasks.getCookie("_eduardoprogramador_com_follow").localeCompare("") == 0) {            
                tasks.deleteCookie("_eduardoprogramador_com_follow");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_follow&value_cookie=deleted" + "&expiration_cookie=deleted" + "&privacy_accepted=deleted"),function () {

               });
            }
        }

        if(statistics) {
            
            if(tasks.getCookie("_eduardoprogramador_com_statistics").localeCompare("") == 0) {            
                let cookie = tasks.setCookie("_eduardoprogramador_com_statistics");                
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_statistics&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });
            } 
        } else {
            if(!tasks.getCookie("_eduardoprogramador_com_statistics").localeCompare("") == 0) {            
                tasks.deleteCookie("_eduardoprogramador_com_statistics");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_statistics&value_cookie=deleted" + "&expiration_cookie=deleted" + "&privacy_accepted=deleted"),function () {

               });
            }
        }

        if(security) {
            
            if(tasks.getCookie("_eduardoprogramador_com_security").localeCompare("") == 0) {            
                let cookie = tasks.setCookie("_eduardoprogramador_com_security");                
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_security&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });
            } 
        } else {
            if(!tasks.getCookie("_eduardoprogramador_com_security").localeCompare("") == 0) {            
                tasks.deleteCookie("_eduardoprogramador_com_security");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_security&value_cookie=deleted" + "&expiration_cookie=deleted" + "&privacy_accepted=deleted"),function () {

               });
            }
        }

        if(marketing) {
            
            if(tasks.getCookie("_eduardoprogramador_com_marketing").localeCompare("") == 0) {            
                let cookie = tasks.setCookie("_eduardoprogramador_com_marketing");                
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_marketing&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });
            } 
        } else {
            if(!tasks.getCookie("_eduardoprogramador_com_marketing").localeCompare("") == 0) {            
                tasks.deleteCookie("_eduardoprogramador_com_marketing");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_marketing&value_cookie=deleted" + "&expiration_cookie=deleted" + "&privacy_accepted=deleted"),function () {

               });
            }
        }

        if(better) {
            
            if(tasks.getCookie("_eduardoprogramador_com_better").localeCompare("") == 0) {            
                let cookie = tasks.setCookie("_eduardoprogramador_com_better");                
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_better&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });
            } 
        } else {
            if(!tasks.getCookie("_eduardoprogramador_com_better").localeCompare("") == 0) {            
                tasks.deleteCookie("_eduardoprogramador_com_better");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com_better&value_cookie=deleted" + "&expiration_cookie=deleted" + "&privacy_accepted=deleted"),function () {

               });
            }
        }


     });   

     
}