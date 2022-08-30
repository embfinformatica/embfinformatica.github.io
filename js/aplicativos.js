function main() {
    const tasks = new Tasks();    

    var isServerReady = false;        
           

    var toCount = 0;
    var categories = [
        'GPS',
        'CONTABILIDADE',
        'LICITAÇÃO',
        'REDE',
        'NAVEGADOR',                
        'CRIPTOGRAFIA',
        'BANCO DE DADOS',
        'REDE',
        'ESTATÍSTICA',
        'LICITAÇÃO',
        'TEMPO',
        'REDE',
        'CNPJ',
        'TEMPO',
        'ANOTAÇÕES'        
    ];
    var titles = [
        'Onde Eu Estou',
        'RPA Online',
        'Caçador ComprasNET',
        'Wifi Analyzer (Amazon)',
        'Fenix Web Browser',
        'Checksum Analyzer',
        'MySQL CLient Go',
        'Wifi Analyzer (Android)',
        'Calculadora Estatística',
        'CEIS Mobile',
        'Linux Epoch Converter',
        'My External IP',
        'CNPJ Finder',
        'Temperature Converter',
        'Fenix Note Pad'                       
    ];
    var subtitles = [
        'Rastreamento via GPS',       
        'Calculadora de RPA', 
        'Fornecedores no SICAF',
        'Rastreador de Wifi',
        'Navegador Web',
        'Calculadora de Hash',
        'Cliente MySQL',
        'Rastreador de Wifi',
        'Calcula parâmetros estatísticos',
        'Consulta ao CEIS',
        'Converte Data Unix',
        'Descubra seu IP Público',
        'Consulta CNPJ',
        'Conversor de Temperatura',
        'Bloco de Notas'        
    ];
    var descriptions = [
        'Com o Onde Eu Estou você rastreia em tempo real a localização do seu celular <br>via GPS, assim como rastreia outros usuários com a chave secreta.',
        'Calcule o Recibo de Pagamento de Autônomo (RPA) com as retenções devidas, <br>incluindo INSS, ISS e IRPF, tudo isso na palma da sua mão.',               
        'Para os servidores de licitação e compras: busque fornecedores cadastrados <br>no SICAF, pesquisando por ramo de fornecimento, UF,etc.',
        'Com este app, você pode fazer uma varredura completa das redes Wifi próximas <br>ao seu dispositivo, com uma imensa lista de informações.',
        'Navegador completo para Android que embute compatibilidade para download <br>de PDF, Screenshots, navegação anônima e outros recursos.',         
        'Calcule o hash (checksum) de arquivos no seu celular, incluindo <br>algoritmos como MD5, SHA-1, SHA-256 e SHA-512.',
        'Versão para Android do software MySQL Client Go, cliente MySQL capaz <br>de conectar o seu celular a qualquer servidor MySQL do mundo.',
        'Versão para Android do aplicativo da Amazon que faz uma varredura completa <br>das redes Wifi, retornando informações relevantes.',
        'Statisitc Calc fornece ao analista de dados meios fáceis para calcular o <br>desvio-padrão, variância, curtose, mediana e muito mais.',
        'Faça consulta diretamente à base de dados do CEIS e verifique se uma <br>determinada empresa foi declarada inidônea ou se tem impedimentos.',
        'Essa espécie de calculadora efetua a conversão entre datas normais <br>e datas Unix (ou Linux), de uma maneira rápida e intuitiva.',
        'Descubra o IP público do seu celular Android através da rede em que você <br>está conectado, pressionando apenas um simples botão.',
        'Consulta CNPJ sem captcha, rápido, fácil e prático. O app ainda permite <br>compartilhar os dados do CNPJ via WhatsApp, e-mail e ver no mapa.',
        'Converta entre diferentes medidas de temperatura, de Celsius para Fahrenheit, <br>com uma interface amigável baseada em um termômetro.',
        'Faça anotações no seu celular facilmente para o dia-a-dia, com uma facilidade <br>de edição surpreendente e visualização bem confortável.'        
    ];
    var links = [
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.ondeeuestou',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.rpaonline',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.cacadorfornecedorescomprasnet',        
        'https://www.amazon.com.br/eduprogramacao-Wifi-Analyzer/dp/B087D5WBCP/ref=sr_1_3?__mk_pt_BR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1DWI7JNLPAVUH&keywords=wifi+analyzer&qid=1648824044&sprefix=wifi+analyze%2Caps%2C194&sr=8-3',
        'https://play.google.com/store/apps/details?id=com.github.eduprogrammer.fenixbrowser',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.whathash',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.mysqlclientgo',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.wifianalyzer',
        'https://play.google.com/store/apps/details?id=com.github.eduprogrammer.fenixcalculator',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.ceismobile',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.linuxepochconverter',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.meuipexterno',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.cnpjfinder',
        'https://play.google.com/store/apps/details?id=com.eduardoprogramador.temperatureconverter',
        'https://play.google.com/store/apps/details?id=com.github.eduprogrammer.fenixnote'        
    ];
    var images = [
        'img/icos/onde_estou.png',
        'img/icos/rpa_online.png',        
        'img/icos/cacador.png',                
        'img/icos/wifi_ana.png',
        'img/icos/web_browser.png',
        'img/icos/checksum.png',
        'img/icos/mysql_droid.png',
        'img/icos/wifi_ana.png',
        'img_/logos/logo.png',
        'img/icos/ceis.png',
        'img/icos/linux_epoch.png',
        'img/icos/external.png',
        'img/icos/cnpj.png',
        'img/icos/temperature.png',
        'img_/logos/logo.png'        
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
        loadNews();

    });

    attach('two', 'click', function () {
       
        toCount = 5;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "gray";
        S('three').backgroundColor = "black";               
        loadNews();

    });

    attach('three', 'click', function () {
       
        toCount = 10;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "gray";               
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
        
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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
       
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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
       
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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
       
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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
       
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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
       
        const photos = ['url(\"img_/programming/android.png\")','url(\"img_/informatics/iphone.jpg\")','url(\"img_/informatics/smart_tv.png\")','url(\"img_/informatics/custom.jpg\"'];
        const titles = ['Aplicativos para Android','Aplicativos para IPhone','Apps para Smart TV','Aplicativos Customizados'];
        const subtitles = ['Leve a sua empresa à Play Store','Alcance clientes na Apple Store','Ofereça opções na TV aos seus clientes','Solicite um app altamente customizável'];
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



     
}