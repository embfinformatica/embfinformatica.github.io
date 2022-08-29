function main() {
    const tasks = new Tasks();
    const chat = new Chat();
    
    var language = 0, format = 0, line = 0, col = 0;
    var mb_ = {
        platform : -1,
        language : -1,        
        added : {
            'native' : 0,
            'gps' : 0,
            'camera' : 0,
            'microphone' : 0,
            'audio' : 0,
            'video' : 0,
            'sqlite' : 0,
            'sql' : 0,
            'accelerometer' : 0,
            'giroscope' : 0,
            'vibration' : 0,
            'explorer' : 0,
            'internet' : 0,
            'image' : 0,
            'screenshot' : 0,
            'text' : 0,
            'pdf' : 0,
            'video' : 0,
            'facial' : 0,
            'fingers' : 0,
            'firebase' : 0,
            'crypto' : 0,
            'share' : 0,
            'bluetooth' : 0,
            'read_video' : 0
        }
    }

    var tv_ = {
        platform : -1,        
        added : {
            'native' : 0,
            'gps' : 0,                               
            'sqlite' : 0,
            'sql' : 0,            
            'internet' : 0,
            'image' : 0,
            'screenshot' : 0,
            'text' : 0,
            'pdf' : 0,                             
            'read_video' : 0
        }
    }

    var st_ = {
        platform : -1,        
        added : {
            'email' : 0,
            'gps' : 0,                               
            'nosql' : 0,
            'sql' : 0,            
            'domain' : 0,
            'server' : 0,
            'logs' : 0,
            'remote' : 0,            
        }
    }

    var isServerReady = false;        


    attach('ad_select', 'change', function () {
       
        let chosen = val('ad_select');

        switch (chosen) {
            case 'nothing':              
                Off('ad');                  
                Off('mb');
                Off('tv');
                break;

            case 'analise_dados':
                On('ad');
                Off('mb');
                Off('tv');
                break;

            case 'app_mobile':
                Off('ad');
                On('mb');
                Off('tv');
                break;

            case 'app_tv':
                Off('ad');
                Off('mb');
                On('tv');
                break;

            case 'web_site':
                alert('Em Desenvolvimento');
                break;

            case 'consult':
                alert('Em Desenvolvimento');
                break;
            
            case 'games':
                alert('Em Desenvolvimento');
                break;

            case 'detective':
                alert('Em Desenvolvimento');
                break;

            case 'desktop':
                alert('Em Desenvolvimento');
                break;
        
            default:
                break;
        }

        txt_('total', 'R$ 0,00');

    });

    attach('ad_r','click',function () {
        ob('ad_r').style.filter = "sepia(1)";
        ob('ad_python').style.filter = "sepia(0)";
        language = 0;
        calculate();
    });

    attach('ad_python','click',function () {
        ob('ad_r').style.filter = "sepia(0)";
        ob('ad_python').style.filter = "sepia(1)";
        language = 1;
        calculate();
    });

    attach('ad_csv','click',function () {
        format = 0;
        ob('ad_csv').checked = true;        
        ob('ad_json').checked = false;
        ob('ad_xml').checked = false;
        ob('ad_xlsx').checked = false;
        ob('ad_ods').checked = false;
        ob('ad_pdf').checked = false;
        calculate();
    });
    attach('ad_json','click',function () {
        format = 1;
        ob('ad_csv').checked = false;        
        ob('ad_json').checked = true;
        ob('ad_xml').checked = false;
        ob('ad_xlsx').checked = false;
        ob('ad_ods').checked = false;
        ob('ad_pdf').checked = false;
        calculate();
    });
    attach('ad_xml','click',function () {
        format = 2;
        ob('ad_csv').checked = false;        
        ob('ad_json').checked = false;
        ob('ad_xml').checked = true;
        ob('ad_xlsx').checked = false;
        ob('ad_ods').checked = false;
        ob('ad_pdf').checked = false;
        calculate();
    });
    attach('ad_xlsx','click',function () {
        format = 3;
        ob('ad_csv').checked = false;        
        ob('ad_json').checked = false;
        ob('ad_xml').checked = false;
        ob('ad_xlsx').checked = true;
        ob('ad_ods').checked = false;
        ob('ad_pdf').checked = false;
        calculate();
    });
    attach('ad_ods','click',function () {
        format = 4;
        ob('ad_csv').checked = false;        
        ob('ad_json').checked = false;
        ob('ad_xml').checked = false;
        ob('ad_xlsx').checked = false;
        ob('ad_ods').checked = true;
        ob('ad_pdf').checked = false;
        calculate();
    });
    attach('ad_pdf','click',function () {
        format = 5;
        ob('ad_csv').checked = false;        
        ob('ad_json').checked = false;
        ob('ad_xml').checked = false;
        ob('ad_xlsx').checked = false;
        ob('ad_ods').checked = false;
        ob('ad_pdf').checked = true;
        calculate();
    });

    attach('ad_line','change',function () {
       txt_('p_ad_line', val('ad_line'));
       line = val('ad_line');
       calculate();
    });
    
    attach('ad_col','change',function () {
        txt_('p_ad_col', val('ad_col'));
        col = val('ad_col');
        calculate();
     });

     attach('mb_android','click',function () {
        ob('mb_android').style.filter = "sepia(1)";
        ob('mb_ios').style.filter = "sepia(0)";
        ob('mb_java').style.filter = "sepia(1)";
        ob('mb_kotlin').style.filter = "sepia(0)";
        mb_.platform = 0;   
        mb_.language = 0;     
        On('mb_only_android');
        Off('mb_only_ios');
        calculateMb();
    });

    attach('mb_ios','click',function () {
        ob('mb_android').style.filter = "sepia(0)";
        ob('mb_ios').style.filter = "sepia(1)";
        ob('mb_swift').style.filter = "sepia(1)";
        ob('mb_objective_c').style.filter = "sepia(0)";
        mb_.platform = 1;
        mb_.language = 2;
        Off('mb_only_android');
        On('mb_only_ios');        
        calculateMb();
    });

    attach('mb_java','click',function () {
        ob('mb_java').style.filter = "sepia(1)";
        ob('mb_kotlin').style.filter = "sepia(0)";
        mb_.language = 0;
        calculateMb();
    });

    attach('mb_kotlin','click',function () {
        ob('mb_java').style.filter = "sepia(0)";
        ob('mb_kotlin').style.filter = "sepia(1)";
        mb_.language = 1;
        calculateMb();
    });

    attach('mb_swift','click',function () {
        ob('mb_swift').style.filter = "sepia(1)";
        ob('mb_objective_c').style.filter = "sepia(0)";
        mb_.language = 2;
        calculateMb();
    });

    attach('mb_objective_c','click',function () {
        ob('mb_swift').style.filter = "sepia(0)";
        ob('mb_objective_c').style.filter = "sepia(1)";
        mb_.language = 3;
        calculateMb();
    });

    attach('mb', 'click', function () {
        
        
        if(ob('mb_c_native').checked) {
            mb_.added.native = 550;
            calculateMb();
        } else {
            mb_.added.native = 0;
            calculateMb();
        }

        if(ob('mb_c_gps').checked) {
            mb_.added.gps = 1300;
            calculateMb();
        } else {
            mb_.added.gps = 0;
            calculateMb();
        }

        if(ob('mb_c_camera').checked) {
            mb_.added.camera = 210;
            calculateMb();
        } else {
            mb_.added.camera = 0;
            calculateMb();
        }

        if(ob('mb_c_microfone').checked) {
            mb_.added.microphone = 110;
            calculateMb();
        } else {
            mb_.added.microphone = 0;
            calculateMb();
        }

        if(ob('mb_c_audio').checked) {
            mb_.added.audio = 130;
            calculateMb();
        } else {
            mb_.added.audio = 0;
            calculateMb();
        }

        if(ob('mb_c_video').checked) {
            mb_.added.video = 200;
            calculateMb();
        } else {
            mb_.added.video = 0;
            calculateMb();
        }        

        if(ob('mb_c_sqlite').checked) {
            mb_.added.sqlite = 80.5;
            calculateMb();
        } else {
            mb_.added.sqlite = 0;
            calculateMb();
        }

        if(ob('mb_c_sql').checked) {
            mb_.added.sql = 130.35;
            calculateMb();
        } else {
            mb_.added.sql = 0;
            calculateMb();
        }

        if(ob('mb_c_accelerometer').checked) {
            mb_.added.accelerometer = 25;
            calculateMb();
        } else {
            mb_.added.accelerometer = 0;
            calculateMb();
        }

        if(ob('mb_c_giroscope').checked) {
            mb_.added.giroscope = 31.25;
            calculateMb();
        } else {
            mb_.added.giroscope = 0;
            calculateMb();
        }

        if(ob('mb_c_vibration').checked) {
            mb_.added.vibration = 15.5;
            calculateMb();
        } else {
            mb_.added.vibration = 0;
            calculateMb();
        }

        if(ob('mb_c_explorer').checked) {
            mb_.added.explorer = 330;
            calculateMb();
        } else {
            mb_.added.explorer = 0;
            calculateMb();
        }

        if(ob('mb_c_internet').checked) {
            mb_.added.internet = 150.75;
            calculateMb();
        } else {
            mb_.added.internet = 0;
            calculateMb();
        }

        if(ob('mb_read_image').checked) {
            mb_.added.image = 85;
            calculateMb();
        } else {
            mb_.added.image = 0;
            calculateMb();
        }

        if(ob('mb_c_screenshot').checked) {
            mb_.added.screenshot = 69;
            calculateMb();
        } else {
            mb_.added.screenshot = 0;
            calculateMb();
        }

        if(ob('mb_c_text').checked) {
            mb_.added.text = 12;
            calculateMb();
        } else {
            mb_.added.text = 0;
            calculateMb();
        }

        if(ob('mb_c_pdf').checked) {
            mb_.added.pdf = 340;
            calculateMb();
        } else {
            mb_.added.pdf = 0;
            calculateMb();
        }

        if(ob('mb_c_read_video').checked) {
            mb_.added.read_video = 839.4;
            calculateMb();
        } else {
            mb_.added.read_video = 0;
            calculateMb();
        }

        if(ob('mb_c_facial').checked) {
            mb_.added.facial = 980;
            calculateMb();
        } else {
            mb_.added.facial = 0;
            calculateMb();
        }

        if(ob('mb_c_fingers').checked) {
            mb_.added.fingers = 711.4;
            calculateMb();
        } else {
            mb_.added.fingers = 0;
            calculateMb();
        }


        if(ob('mb_c_firebase').checked) {
            mb_.added.firebase = 1011;
            calculateMb();
        } else {
            mb_.added.firebase = 0;
            calculateMb();
        }

        if(ob('mb_c_crypto').checked) {
            mb_.added.crypto = 550;
            calculateMb();
        } else {
            mb_.added.crypto = 0;
            calculateMb();
        }

        if(ob('mb_c_share').checked) {
            mb_.added.share = 89;
            calculateMb();
        } else {
            mb_.added.share = 0;
            calculateMb();
        }

        if(ob('mb_c_bluetooth').checked) {
            mb_.added.bluetooth = 250;
            calculateMb();
        } else {
            mb_.added.bluetooth = 0;
            calculateMb();
        }

    });        

    attach('st_site','click',function () {
        ob('st_site').style.filter = "sepia(1)";
        ob('st_app').style.filter = "sepia(0)";
        ob('st_intranet').style.filter = "sepia(0)";
        ob('st_api').style.filter = "sepia(0)";
        st_.platform = 0;   
        mb_.language = 0;     
        On('mb_only_android');
        Off('mb_only_ios');
        calculateMb();
    });

    //continue...

     function calculateMb() {
        
       
        let total = 0;
        if(mb_.platform == 0) {
            total += 1050;
        } else if(mb_.platform == 1){
            total += 2500;
        } 
        
        switch (mb_.language) {
            case 0:                
                total += 250;
                break;
        
            case 1:
                total += 500;
                break;

            case 2:
                total += 200;
                break;

            case 3:
                total += 500
                break;

            default:
                break;
        }

        var sum = 0;

        for (const key in mb_.added) {
            if (Object.hasOwnProperty.call(mb_.added, key)) {                                
                sum += mb_.added[key];
                              
            }
            
        }  
        
        total += sum;

        txt_('total', 'R$ ' + total);

     };

     attach('tv_samsung','click',function () {
        ob('tv_samsung').style.filter = "sepia(1)";
        ob('tv_lg').style.filter = "sepia(0)";
        ob('tv_sony').style.filter = "sepia(0)";
        ob('tv_android').style.filter = "sepia(0)";
        tv_.platform = 0;                   
        calculateTv();
    });

    attach('tv_lg','click',function () {
        ob('tv_samsung').style.filter = "sepia(0)";
        ob('tv_lg').style.filter = "sepia(1)";
        ob('tv_sony').style.filter = "sepia(0)";
        ob('tv_android').style.filter = "sepia(0)";
        tv_.platform = 1;                   
        calculateTv();        
    });

    attach('tv_sony','click',function () {
        ob('tv_samsung').style.filter = "sepia(0)";
        ob('tv_lg').style.filter = "sepia(0)";
        ob('tv_sony').style.filter = "sepia(1)";
        ob('tv_android').style.filter = "sepia(0)";
        tv_.platform = 2;                   
        calculateTv();
    });

    attach('tv_android','click',function () {
        ob('tv_samsung').style.filter = "sepia(0)";
        ob('tv_lg').style.filter = "sepia(0)";
        ob('tv_sony').style.filter = "sepia(0)";
        ob('tv_android').style.filter = "sepia(1)";
        tv_.platform = 3;                   
        calculateTv();
    });

     attach('tv', 'click', function () {

        if(ob('tv_c_native').checked) {
            tv_.added.native = 550;
            calculateTv();
        } else {
            tv_.added.native = 0;
            calculateTv();
        }
                        

        if(ob('tv_c_gps').checked) {
            tv_.added.gps = 1300;
            calculateTv();
        } else {
            tv_.added.gps = 0;
            calculateTv();
        }                        

        if(ob('tv_c_sqlite').checked) {
            tv_.added.sqlite = 80.5;
            calculateTv();
        } else {
            tv_.added.sqlite = 0;
            calculateTv();
        }

        if(ob('tv_c_sql').checked) {
            tv_.added.sql = 130.35;
            calculateTv();
        } else {
            tv_.added.sql = 0;
            calculateTv();
        }                        

        if(ob('tv_c_internet').checked) {
            tv_.added.internet = 150.75;
            calculateTv();
        } else {
            tv_.added.internet = 0;
            calculateTv();
        }

        if(ob('tv_read_image').checked) {
            tv_.added.image = 85;
            calculateTv();
        } else {
            tv_.added.image = 0;
            calculateTv();
        }

        if(ob('tv_c_screenshot').checked) {
            tv_.added.screenshot = 69;
            calculateTv();
        } else {
            tv_.added.screenshot = 0;
            calculateTv();
        }

        if(ob('tv_c_text').checked) {
            tv_.added.text = 12;
            calculateTv();
        } else {
            tv_.added.text = 0;
            calculateTv();
        }

        if(ob('tv_c_pdf').checked) {
            tv_.added.pdf = 340;
            calculateTv();
        } else {
            tv_.added.pdf = 0;
            calculateTv();
        }

        if(ob('tv_c_read_video').checked) {
            tv_.added.read_video = 839.4;
            calculateTv();
        } else {
            tv_.added.read_video = 0;
            calculateTv();
        }                        

    });        


     function calculateTv() {
       
        let total = 0;
        if(tv_.platform == 0) {
            total += 1875.50;
        } else if(tv_.platform == 1){
            total += 1520.50;
        } else if(tv_.platform == 2) {
            total += 2300.40;
        } else if(tv_.platform == 3) {
            total += 2920;
        }                

        var sum = 0;

        for (const key in tv_.added) {
            if (Object.hasOwnProperty.call(tv_.added, key)) {                                
                sum += tv_.added[key];
                              
            }
            
        }  
        
        total += sum;

        txt_('total', 'R$ ' + total);

     };






    function calculate() {
        let total = 0;
        switch (language) {
            case 0:   
                total += 300;             
                break;
    
            case 1:
                total += 450;
                break;
            
            default:
                break;
        }

        switch (format) {
            case 0:
                total *= 1.25;                
                break;

            case 1:
                total *= 1.30;
                break;
        
            case 2:
                total *= 1.35;
                break;

            case 3:
                total *= 1.4;
                break;

            case 4:
                total *= 1.45;
                break;

            case 5:
                total *= 1.5;
                break;

            default:
                break;
        }

        total += (line * 0.002);
        total += (col * 25);

        txt_('total', 'R$ ' + total);


    }
     
}