function main() {
    const tasks = new Tasks();
    const chat = new Chat();

    var isServerReady = false;        

    if(!tasks.isHttps()) {
        tasks.set('https://eduardoprogramador.com/noticias_.html');
    }                 

    var toCount = 0;
    var categories = ['GAMES','DETETIVE','SOFTWARES','ESTATÍSTICA','GAMES','DETETIVE','SOFTWARES','ESTATÍSTICA','GAMES','SOFTWARES','DETETIVE','DETETIVE','ESTATÍSTICA','SOfTWARES','GAMES','DETETIVE','ESTATÍSTICA','SOFTWARES','GAMES','DETETIVE','ESTATÍSTICA','SOFTWARES','GAMES','DETETIVE','ESTATÍSTICA','SOFTWARES','GAMES','','',''];
    var titles = [
        'A melhor linguagem para jogos',
        'O que um detetive investiga?',
        'Nova Plataforma de RPA Online',
        'A importância de funções em Python',
        'Os games para PC e seus requisitos',
        'Veja um Ataque de Força Bruta',
        'Como é feito um site?',
        'Alternativas para Análise',
        'Raciocínio Lógico e Jogos',
        'Diferença entre EXE, DLL e LIB',
        'Guerra Cibernética: Mito x Realidade',
        'Os detetives e os Testes de Intrusão',
        'Qual o melhor? Python ou R?',
        'Entenda a diferença entre Aplicativo e Software',
        'O significado de DirectX que você não sabia',
        'Roteiros para o êxito nas investigações',
        'Diagrama de dispersão no R',
        'As Classes Abstratas e suas aplicações',
        'O Destravamento de Xbox 360 e a Engenharia Reversa',
        'Detetive Particular Participa de Inquérito?',        
        'Preciso aprender a programar<br> para ser cientista de dados?',
        'Como é ser um hacker?',
        'Como é feito um jogo de computador?',
        'Como é a Perícia de Digitais?',
        'O Excel é suficiente para minha empresa?',
        'O que é uma Linguagem Orientada a Objetos',
        'Nova Plataforma de Jogos em Java',
        '',
        '',
        '',
    ];
    var subtitles = [
        'Eduardo Faria - 09/08/2022',
        'Eduardo Faria - 28/07/2022',
        'Eduardo Faria - 24/07/2022',
        'Eduardo Faria - 17/07/2022',
        'Eduardo Faria - 15/07/2022',
        'Eduardo Faria - 07/07/2022',
        'Eduardo Faria - 05/07/2022',
        'Eduardo Faria - 25/06/2022',
        'Eduardo Faria - 23/06/2022',
        'Eduardo Faria - 18/06/2022',
        'Eduardo Faria - 17/06/2022',
        'Eduardo Faria - 12/06/2022',
        'Eduardo Faria - 11/06/2022',
        'Eduardo Faria - 10/06/2022',
        'Eduardo Faria - 09/06/2022',
        'Eduardo Faria - 08/06/2022',
        'Eduardo Faria - 07/06/2022',
        'Eduardo Faria - 06/06/2022',
        'Eduardo Faria - 05/06/2022',
        'Eduardo Faria - 04/06/2022',
        'Eduardo Faria - 03/06/2022',
        'Eduardo Faria - 02/06/2022',
        'Eduardo Faria - 01/06/2022',
        'Eduardo Faria - 31/05/2022',
        'Eduardo Faria - 30/05/2022',
        'Eduardo Faria - 29/05/2022',
        'Eduardo Faria - 28/05/2022',
        '',
        '',
        '',
    ];
    var descriptions = [
        'Praticamente todas as pessoas jogam ou já jogaram algum game <br>em sua vida, seja ele pertencente a uma plataforma Web,',
        'No mundo em que vivemos, praticamente em algum dia você já <br>se deparou com a necessidade de investigar um',
        'É com imensa satisfação que o nosso site vem acumulando <br>significativamente um grande aumento de acessos mensais e,',
        'Sabe-se que a linguagem Python proporciona uma tremenda <br>oferta de bibliotecas que facilitam o trabalho do',
        'Sabe-se que, antes de instalar qualquer jogo de computador, <br>o gamer deve verificar se as configurações de sua',
        'Em um mundo tão inseguro em que vivemos, repleto de pessoas <br>mal intencionadas, a defesa é a melhor opção, incusive',
        'Hoje é cada vez mais "obrigatório" uma empresa ter um site na <br>internet para oferecer seus serviços. Pouco importa se',
        'É verdade que as ferramentas utilizadas pelos analistas de <br>dados são bastante consagradas e conhecidas: linguagens',
        'O raciocínio lógico é uma disciplina à parte que estuda <br>a lógica entre proposições, relação de problemas de',
        'Se você é amante de computador, sabe todos os atalhos <br>do Windows, é bom de Excel, mas não sabe como a engenharia de',
        'Infelizmente, no mundo em que vivemos, ninguém está <br>satisfeito! Nações abrem mão da paz para disputarem territórios',
        'Você já ouviu falar da palavra inglesa Pen Testing? Se sim, deve <br>ter em mente que os principais protagnistas são os',
        'Durante a análise de dados, é comum que o analista sinta <br>necessidade de lançar mão de programas e ferramentas',
        'Softwares, aplicativos, apps, Web Apps? Confuso, não? São <br>sinônimos? Iremos explicar... Em primeiro lugar, não',
        'Se você é um grande fã e habitualmente baixa e instala muitos <br>jogos para computador em seu PC, provavelmente em',
        'A profissão de detetive particular, também denominada de detetive <br>profissional, como já esposado na Lei 13.432/2017,',
        'O diagrama de pontos é utilizado para tecer conclusões entre <br>duas variáveis quantitativas nos eixos das abscissas e',
        'Hoje, sabe-se que existem muitas linguagens de programação <br>disponíveis no mercado, munindo o programador de opções',
        'Você já ouviu falar de engenharia reversa? Se não, <br>deve estar imaginando que o "engenheiro reverso" é alguém...',
        'A resposta é sim, juridicamente e faticamente. De acordo com o art. 5°,<br>\'caput\' e parágrafo único da Lei 13.482/2017, é possível a...',
        'A análise de dados é um ramo da informática multidisciplinar,<br>que faz uma intersecção entre os ensinamentos da estatística, computação, matemática e...',
        'O termo "hacker", de antemão, é um termo bastante rudimentar e banalizado<br>para denotar pessoas envolvidas em crimes cibernéticos como roubo de senhas...',
        'Basicamente, um game é constituído de códigos que gerenciam os recursos<br>trazidos pelo desenvolvedor de software, designer gráficos...',
        'Se você adora Netflix ou já assistiu a várias séries de investigação policial,<br>como a série CSI, com certeza você já se deparou com a curiosidade...',
        'É inegável a presença dos produtos da gigante Microsoft em nossas vidas:<br>do sistema Operacional Windows até os mais famigerados programas para computador...',
        'As linguagens orientadas a objetos implementam o conceito de classes,<br>que são unidades que tem a habilidades de encapsular...',
        'Já está disponível a plataforma de Eduardo Programador para design<br>de games profissionais no estilo 2D, na linguagem Java...',
        '',
        '',
        '',
    ];
    var links = [
        'https://eduardoprogramador.com/noticias/09_08_2022_games.html',
        'https://eduardoprogramador.com/noticias/28_07_2022_detetive.html',
        'https://eduardoprogramador.com/noticias/24_07_2022_softwares.html',
        'https://eduardoprogramador.com/noticias/17_07_2022_estatistica.html',
        'https://eduardoprogramador.com/noticias/15_07_2022_games.html',
        'https://eduardoprogramador.com/noticias/07_07_2022_detetive.html',
        'https://eduardoprogramador.com/noticias/05_07_2022_softwares.html',
        'noticias/25_06_2022_estatistica.html',
        'noticias/23_06_2022_games.html',
        'noticias/18_06_2022_softwares.html',
        'noticias/17_06_2022_detetive.html',
        'noticias/12_06_2022_detetive.html',
        'noticias/11_06_2022_estatistica.html',
        'noticias/10_06_2022_softwares.html',
        'noticias/09_06_2022_jogos.html',
        'noticias/08_06_2022_detetive.html',
        'noticias/07_06_2022_estatistica.html',
        'noticias/06_06_2022_softwares.html',
        'noticias/05_06_2022_games.html',
        'noticias/04_06_2022_detetive.html',
        'noticias/03_06_2022_estatistica.html',
        'noticias/02_06_2022_softwares.html',
        'noticias/01_06_2022_jogos.html',
        'noticias/31_05_2022_detetive.html',
        'noticias/30_05_2022_estatistica.html',
        'noticias/29_05_2022_softwares.html',
        'noticias/28_05_2022_games.html',
        '',
        '',
        '',
    ];
    var images = [
        'img_/noticias/27.jpg',
        'img_/noticias/26.png',
        'img_/noticias/25.png',
        'img_/noticias/24.png',
        'img_/noticias/23.png',
        'img_/noticias/22.png',
        'img_/noticias/21.png',
        'img_/noticias/20.png',
        'img_/noticias/19.png',
        'img_/noticias/18.jpg',
        'img_/noticias/17.jpg',
        'img_/noticias/16.jpg',
        'img_/noticias/15.jpg',
        'img_/noticias/14.jpg',
        'img_/noticias/13.jpg',
        'img_/noticias/12.jpg',
        'img_/noticias/11.png',
        'img_/noticias/10.jpg',
        'img_/noticias/09.jpg',
        'img_/noticias/08.jpg',
        'img_/noticias/01.jpg',
        'img_/noticias/02.jpg',
        'img_/noticias/03.jpg',
        'img_/noticias/04.jpg',
        'img_/noticias/07.png',
        'img_/noticias/05.jpg',
        'img_/noticias/06.jpg',
        '',
        '',
        '',
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
        S('four').backgroundColor = "black";
        S('five').backgroundColor = "black";
        S('six').backgroundColor = "black";
        loadNews();

    });

    attach('two', 'click', function () {
       
        toCount = 5;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "gray";
        S('three').backgroundColor = "black";
        S('four').backgroundColor = "black";
        S('five').backgroundColor = "black";
        S('six').backgroundColor = "black";
        loadNews();

    });

    attach('three', 'click', function () {
       
        toCount = 10;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "gray"
        S('four').backgroundColor = "black";
        S('five').backgroundColor = "black";
        S('six').backgroundColor = "black";
        loadNews();

    });
    
    attach('four', 'click', function () {
       
        toCount = 15;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "black";
        S('four').backgroundColor = "gray";
        S('five').backgroundColor = "black";
        S('six').backgroundColor = "black";
        loadNews();

    });
    
    attach('five', 'click', function () {
       
        toCount = 20;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "black";
        S('four').backgroundColor = "black";
        S('five').backgroundColor = "gray";
        S('six').backgroundColor = "black";
        loadNews();

    });
    
    attach('six', 'click', function () {
       
        toCount = 25;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "black";
        S('four').backgroundColor = "black";
        S('five').backgroundColor = "black";
        S('six').backgroundColor = "gray";
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
    
    tasks.httpPost("php/main.php",encodeURI("date=" + tasks.getTime() + "&time=" + tasks.getTime() + "&acao=Noticias_All_New_Site"),function () {
        
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
        
        alert('Configurações de Cookies Salvas com Sucesso!\n\nSomos pioneiros na implantação da Lei de Proteção de Dados (LGBD), e o melhor de tudo isso: com tecnologia própria, o que garante que seus dados não são processados com ferramentas de terceiros, aumentando ainda mais a sua segurança.\n\nObrigado! :)');

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