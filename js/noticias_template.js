function main() {
    const tasks = new Tasks();
    const chat = new Chat();

    var isServerReady = false;        

    //if(!tasks.isHttps()) {
      //  tasks.set('https://eduardoprogramador.com/noticias.html');
    //}                 

    

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