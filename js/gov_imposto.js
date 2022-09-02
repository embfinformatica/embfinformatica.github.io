function main() {
  
    const tasks = new Tasks();

    var isMaterial = true;
    var ir = 1.2; 
    var csll = 1; var cofins = 3;
    var pis = 0.65;
    var code = 0;
    var obj_response;

    Off("up_arrow");

    if(tasks.isHttp()) {
        tasks.set("https://eduardoprogramador.com/gov_imposto.html");
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


    tasks.httpPost('php/links.php',encodeURI('link=gob_imposto_page&time=' + tasks.getTime()),function () {});

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

    ob("iss_value").disabled = true;

    attach("material","click",function () {
       ob("material").checked = true;
       ob("service").checked = false; 
       ob("iss_value").disabled = true;
       isMaterial = true;
    });

    attach("service","click",function () {
        ob("material").checked = false;
        ob("service").checked = true;
        ob("iss_value").disabled = false;
        isMaterial = false;
    });

    attach("6147","click", function () {

        ir = 1.2;
        csll = 1;
        cofins = 3;
        pis = 0.65;
        code = 6147;
       
        ob("6147").checked = true;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("9060","click", function () {

        ir = 0.24;
        csll = 1;
        cofins = 3;
        pis = 0.65;
        code = 9060;
       
        ob("6147").checked = false;
        ob("9060").checked = true;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("8739","click", function () {

        ir = 0.24;
        csll = 1;
        cofins = 0;
        pis = 0;
        code = 8739;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = true;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("8767","click", function () {

        ir = 1.2;
        csll = 1;
        cofins = 0;
        pis = 0;
        code = 8767;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = true;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("6175","click", function () {

        ir = 2.4;
        csll = 1;
        cofins = 3;
        pis = 0.65;
        code = 6175;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = true;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("8850","click", function () {

        ir = 2.4;
        csll = 1;
        cofins = 0;
        pis = 0;
        code = 8850;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = true;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("8863","click", function () {

        ir = 0;
        csll = 1;
        cofins = 3;
        pis = 0.65;
        code = 8863;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = true;
        ob("6188").checked = false;
        ob("6190").checked = false;
        
    });

    attach("6188","click", function () {

        ir = 2.4;
        csll = 1;
        cofins = 3;
        pis = 0.65;
        code = 6188;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = true;
        ob("6190").checked = false;
        
    });

    attach("6190","click", function () {

        ir = 4.8;
        csll = 1;
        cofins = 3;
        pis = 0.65;
        code = 6190;
       
        ob("6147").checked = false;
        ob("9060").checked = false;
        ob("8739").checked = false;
        ob("8767").checked = false;
        ob("6175").checked = false;
        ob("8850").checked = false;
        ob("8863").checked = false;
        ob("6188").checked = false;
        ob("6190").checked = true;
        
    });

    attach("calc","click", function () {

        var nf = val("nf_value");
        var iss = 0;
        var aliq = 0;
        var impostos = 0.0;
        var liquido = 0.0;

     
       
        if(isMaterial) {
            iss = 0; 

        } else {
            iss = val("iss_value");
        }

    

        var totalAliq = parseFloat(ir) + parseFloat(csll) + parseFloat(cofins) + parseFloat(pis);

        impostos = parseFloat(((totalAliq * nf)/100)) + parseFloat(((iss * nf)/100));
        liquido = nf - impostos;

        obj_response = {
            "valor_nf" : nf,
            "valor_iss" : (iss * nf)/100,
            "valor_ir" : (ir * nf)/100,
            "valor_csll" : (csll * nf)/100,
            "valor_cofins" : (cofins * nf)/100,
            "valor_pis" : (pis * nf)/100,
            "valor_liquido" : liquido,
            "aliquota" : totalAliq,
            "valor_impostos" : impostos,
            "base_legal" : "IN 1.234/2012 (RFB)"
            
        }        

        txt("v_nf","R$ " + obj_response.valor_nf);
        txt("v_iss","R$ " + obj_response.valor_iss.toFixed(2));
        txt("v_ir","R$ " + obj_response.valor_ir.toFixed(2));
        txt("v_csll","R$ " + obj_response.valor_csll.toFixed(2));
        txt("v_cofins","R$ " + obj_response.valor_cofins.toFixed(2));
        txt("v_pis","R$ " + obj_response.valor_pis.toFixed(2));
        txt("v_liquido","R$ " + obj_response.valor_liquido.toFixed(2));
        txt("v_aliquota", obj_response.aliquota.toFixed(2).toString() + "%");
        txt("v_impostos","R$: " + obj_response.valor_impostos.toFixed(2));
        txt("v_legal", obj_response.base_legal);

        alert("Retenção Contabilizada com Sucesso!\n\nFonte: Biblioteca Contabil.js (Javascript)");

        to("result");


    });

    

};