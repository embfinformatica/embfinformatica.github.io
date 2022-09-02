function main() {
  
    Off("up_arrow");
        
        let tasks = new Tasks();

        if(tasks.isHttp()) {
            tasks.set("https://eduardoprogramador.com/sem_fundo.html");
        }               
        
        if(tasks.getCookie("_eduardoprogramador_com").localeCompare("") == 0) {            
            On("policy_dialog");
        } else {            
            Off("policy_dialog");
        }

        window.onscroll = function () {
            
            if(window.pageYOffset == 0) {   

                Off("up_arrow");                                          
                    
               } else {
                
                On("up_arrow");
    
               }
        };
                                                                
        attach("up_arrow","click",function () {
           
            window.scrollTo(0,0);
            tasks.httpPost('php/links.php',encodeURI('link=up_arrow&time=' + tasks.getTime()),function () {});

        });        
                                    

            attach("agree","click",function () {
               let cookie = tasks.setCookie("_eduardoprogramador_com");
               tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"),function () {

               });
               Off("policy_dialog"); 
            });            

            attach("disagree","click",function () {
               
                tasks.httpPost("php/cookies.php",encodeURI("name_cookie=refused&value_cookie=refused&expiration_cookie=refused&privacy_accepted=no"),function () {
                    
                });
                
                Off("policy_dialog");

            });  
        

};