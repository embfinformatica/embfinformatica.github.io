function main() {
    
    let tasks = new Tasks();

    if(tasks.isHttp()) {
        tasks.set("https://eduardoprogramador.com/informatics.html");
    }

    _in("entry");

    attach("start","click",function () {

        let entry = val("entry");        
        let option = val("options");
        
        var base = 0, baseOut = 0;
        

        if(ob("in2").checked) {
            base = 2;
        } else if(ob("in8").checked) {
            base = 8;
        } else if(ob("in10").checked) {
            base = 10;
        } else if(ob("in16").checked) {
            base = 16;
        }

        switch(option) {
            case "2":
                baseOut = 2;
                break;

            case "8":
                baseOut = 8;
                break;

            case "10":
                baseOut = 10;
                break;

            case "16":
                baseOut = 16;
                break;

                default:
                    break;
        }

        let res = tasks.convert(entry,base,baseOut); 
        
        if(!res.localeCompare("NaN") == 0) {
            txt("result",res);
        } else {
            alert("Informe um número válido!");
        }               

    });

    tasks.httpPost("php/services.php",encodeURI("service=Informatics&time=" + tasks.getTime() + "&date=" + tasks.getTime() + "&param=Informatics"));

            if(!tasks.getCookie("_eduardoprogramador_com").localeCompare("") == 0) {

                Off("policy_dialog");
            }

            attach("agree","click", function () {
                
                let cookie = tasks.setCookie("_eduardoprogramador_com");
                tasks.httpPost("php/cookies.php",encodeURI("name_cookie=_eduardoprogramador_com&value_cookie=" + cookie.split(";")[0].split("=")[1] + "&expiration_cookie=" + cookie.split(";")[1] + "&privacy_accepted=yes"));

                Off("policy_dialog");
            });

            attach("disagree","click",function () {
               
                tasks.httpPost("php/cookies.php",encodeURI("name_cookie=refused&value_cookie=refused&expiration_cookie=refused&privacy_accepted=no"));
                
                Off("policy_dialog");

            });

        

}