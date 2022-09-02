function main() {    

    
    var isMore = true;
        
                    
        Off("up_arrow");
        
        let tasks = new Tasks();

        if(tasks.isHttp()) {
            tasks.set("https://eduardoprogramador.com/aleatorio.html");
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
                        
    
    const random = new Random();

    attach("single_start","click",function () {
        const x = val("single_from");
        const y = val("single_to");

        const res = random.get(x,y);

        valp("single_res",res);

        tasks.httpPost('php/links.php',encodeURI('link=aleatorio_single&time=' + tasks.getTime()),function () {});

        
    });

    attach("range_start","click",function () {

        var result = "";

        const total = val("range_total");
        const x = val("range_from");
        const y = val("range_to");

        const res = random.getList(total,x,y);

        for(let num of res) {
            result += num + ",";
        }

        valp("range_res",result);

        tasks.httpPost('php/links.php',encodeURI('link=aleatorio_range&time=' + tasks.getTime()),function () {});

        
    });

    attach("special_start","click",function () {

        var result = "";

        const total = val("special_total");        

        const res = random.withSpecial(total);

        for(let num of res) {
            result += num;
        }

        valp("special_res",result);

        tasks.httpPost('php/links.php',encodeURI('link=aleatorio_special&time=' + tasks.getTime()),function () {});

        
    });


};