/*
    Copyright 2021. Eduardo Programador

    Site: www.eduardoprogramador.com
    Instagram: @eduardo_programador
    Email: consultoria@eduardoprogramador.com

    All rights reserved
*/

function main() {    

    let tasks = new Tasks();
    if(tasks.isHttp()) {
        tasks.set("https://eduardoprogramador.com/meu_ip_externo.html");
    }

    var current = 0;

    S("imgPt").width = "100px";
    S("imgPt").height = "100px";
    S("pPt").color = "yellow";
    
    attach_("keydown",function (e) {
        
       
        switch(e.keyCode) {

            case 37: //left key
                switch (current) {
                    case 1:
                        current = 0;

                        S("imgPt").width = "100px";
                        S("imgPt").height = "100px";
                        S("pPt").color = "yellow";

                        S("imgEn").width = "80px";
                        S("imgEn").height = "80px";
                        S("pEn").color = "black";

                        S("imgEs").width = "80px";
                        S("imgEs").height = "80px";
                        S("pEs").color = "black";

                        getPortuguese();

                        break;

                    case 2:
                        current = 1;                        
                                        
                        S("imgPt").width = "80px";
                        S("imgPt").height = "80px";
                        S("pPt").color = "black";

                        S("imgEn").width = "100px";
                        S("imgEn").height = "100px";
                        S("pEn").color = "yellow";

                        S("imgEs").width = "80px";
                        S("imgEs").height = "80px";
                        S("pEs").color = "black";

                        getEnglish();

                        break;
                
                    default:
                        break;
                }
                break;            
            

            case 39: //right key
                
                switch (current) {
                    case 0:
                        current = 1;

                        S("imgPt").width = "80px";
                        S("imgPt").height = "80px";
                        S("pPt").color = "black";

                        S("imgEn").width = "100px";
                        S("imgEn").height = "100px";
                        S("pEn").color = "yellow";

                        S("imgEs").width = "80px";
                        S("imgEs").height = "80px";
                        S("pEs").color = "black";

                        getEnglish();

                        break;

                    case 1:
                        current = 2;                        
                                        
                        S("imgPt").width = "80px";
                        S("imgPt").height = "80px";
                        S("pPt").color = "black";

                        S("imgEn").width = "80px";
                        S("imgEn").height = "80px";
                        S("pEn").color = "black";

                        S("imgEs").width = "100px";
                        S("imgEs").height = "100px";
                        S("pEs").color = "yellow";

                        getSpanish();

                        break;
                
                    default:
                        break;
                }

                break; 

            case 13: //ok button
                
                txt_("result","0.0.0.0");
        
                On("loading");
                Off("done");

                doConsult();

                break;             

            default:
                break;
        }

    });

    setTimeout(doConsult,3000);
}

function doConsult() {
        
    let tasks = new Tasks();

    
    tasks.httpPost("https://eduardoprogramador.com/php/ip.php", encodeURI("key=eduardo_programador_invited"),function () {
        
        let ip = this.responseText;

        txt_("result",ip);
        
        Off("loading");
        On("done");

    });
    
    
}

function getPortuguese() {
    txt_("title", "Meu IP Externo");
                        txt_("searching","Consultando...");
                        txt_("yours","Seu IP Externo É ...");
                        txt_("notes","Copyright 2021. Eduardo Programador || www.eduardoprogramador.com || consultoria@eduardoprogramador.com || (81) 98860-0704");
}

function getEnglish(params) {
    txt_("title", "My Extern IP");
                        txt_("searching","Searching...");
                        txt_("yours","Your Extern IP Is ...");
                        txt_("notes","Copyright 2021. Eduardo Programador || www.eduardoprogramador.com || consultoria@eduardoprogramador.com || +55 81 98860-0704");
}

function getSpanish(params) {
    txt_("title", "Mi IP Externo");
                        txt_("searching","Buscando...");
                        txt_("yours","Tu IP Externo Es ...");
                        txt_("notes","Copyright 2021. Eduardo Programador || www.eduardoprogramador.com || consultoria@eduardoprogramador.com || +55 81 98860-0704");
}