function main() {

    const tasks = new Tasks();

    Off("up_arrow");
        

        if(tasks.isHttp()) {
            tasks.set("https://eduardoprogramador.com/index.html");
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
    
    attach("send","click",function () {
        
        const ddd = val("ddd");
        const num = val("number");

        let link = "https://web.whatsapp.com/send?phone=55" + ddd + num + "&text&app_absent=0";

        if(ddd.length < 2 || ddd == undefined) {
            alert("Informe um DDD válido");
        } else if(num.length < 8 || num == undefined) {
            alert("Informe um número válido");
        } else {
            tasks.go(link);
            tasks.httpPost("php/links.php",encodeURI("link=easy_zap_param_" + link + "&time=" + tasks.getTime()), function () {});
        }
    })

    attach("up_arrow","click",function () {
           
        window.scrollTo(0,0);
        tasks.httpPost('php/links.php',encodeURI('link=up_arrow&time=' + tasks.getTime()),function () {});

    });    

}