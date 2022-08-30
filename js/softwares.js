function main() {
    const tasks = new Tasks();    

    var isServerReady = false;        
    
    var toCount = 0;
    var categories = [
        'DESENHO',
        'CRIPTOGRAFIA',
        'BANCO DE DADOS',
        'CRIPTOGRAFIA',
        'PACOTE',                
        'REDE',
        'CRIPTOGRAFIA',
        'REDE',
        'REDE',
        'REDE',
        'ARQUIVOS',
        'AUDITORIA',
        'MULTIMÍDIA',
        'ZIP',
        'ARQUIVOS',
        'CHAT',
        'SSH',
        'SSH',
        'BANCO DE DADOS',
        'FTP'
    ];
    var titles = [
        'Nice Pen',
        'Hash Calculator',
        'MySQL CLient GO',
        'Encrypt and Decrypt',
        'Java 19 em 1',
        'ICMP Launcher',
        'Base64 Parser',
        'Net Adapters',
        'Netstat Knife',
        'Qual IP',
        'Fenix File Transfer',
        'Fenix Sniffer',
        'Multimedia Show',
        'Easy Extractor',
        'Fenix File Transfer - Java (Mini)',
        'Fenix Chat',
        'Fenix SSHd',
        'Fenix SSH',
        'Fenix MySQL',
        'Fenix FTP'                
    ];
    var subtitles = [
        'Desenho e Escrita',       
        'Hash e Checksum', 
        'Cliente MySQL',
        'Criptografia de Arquivos',
        'Kit de Softwares em Java',
        'Lançador de Pacotes ICMP',
        'Codificador e Decodificador Base64',
        'Leitor de adaptadores de rede',
        'Lista as conexões do dispositivo',
        'Descubra o IP de um domínio',
        'Uploads de Arquivos',
        'Sniffer de Rede',
        'MP3 Player e Vídeo',
        'Cria e Extrai ZIP',
        'Uploads de Arquivos',
        'Programa de Bate-Papo',
        'Servidor SSH',
        'Cliente SSH',
        'Cliente MySQL',
        'Cliente FTP'                
    ];
    var descriptions = [
        'Faça desenhos e escritas com uma caneta mágica que simula o <br>ambiente Paint do Windows e tire Screenshots de seu trabalho.',
        'Confira a integridade de arquivos com os algoritmos MD5, SHA-1, <br>SHA-256 e SHA-512 com esse software leve e de fácil manuseio.',               
        'Cliente do Banco de Dados MySQL. Consulte, acesse e modifique qualquer<br> banco SQL do mundo, sem ter o SQL instalado em seu computador',
        'Criptografe e descriptografe arquivos de maneira profissional, <br>utilizando algoritmos como AES, DES e RC4 e chaves geradas no app',
        'Um kit completo de 19 softwares em Java, com diferentes temas e aplicações,<br> incluindo ferramentas governamentais,, escritório, pDF, etc.',         
        'ICMP Launcher é um software que lança pacotes de rede no protocolo ICMP,<br> similar ao tradicional Ping, porém com mais opções e GUI.',
        'Codifica e decodifica mensagens usando a tecnologia Base64, a qual<br> representa um conjunte de Bytes com caracteres ANSI.',
        'O software lista e detalha os adaptadores de rede do computador, <br>fornecendo o número do endereço MAC, nome e outras configurações.',
        'Programa poderoso que lista todas as conexões TCP e UDP da sua máquina, <br>fornecendo informações dos IP\'s e portas de origem e destino.',
        'Com este programa, você decifra o endereço IP (Internet Protocol) de <br>um domínio específico, de uma maneira bastante rápida e intuitiva.',
        'Transfira e Receba Arquivos a/de outros dispositivos na mesma rede,<br> utilizando este software no modo servidor ou cliente.',
        'Software sniffer de rede baseado na biblioteca LibPCAP, capaz de capturar pacotes <br>de rede e fazer auditoria nos protocolos TCP, UDP,ARP, etc.',
        'Software leitor de MP3, áudio e vídeo, totalmente escrito em Java<br>, leve, dinâmico e extremamente fácil de usar.',
        'Extraia e Descompacte arquivos compactados no formato ZIP de forma<br> automática; crie e compacte novos arquivos nessa extensão.',
        'Software que transfere e recebe arquivos de dispositivos da mesma rede, <br>na versão em Java e com uma janela bastante reduzida.',
        'Maravilhoso programa de bate-papo escrito na linguagem Java e que permite <br>o envio e recebimento de mensagens de máquinas na mesma rede.',
        'Utilize o protocolo SSH para criação de conexões seguras. O Fenix SSHd <br>é a versão servidor desse protocolo que usa criptografia.Use no cmd',
        'O Fenix SSH é a versão cliente do protocolo SSH, que usa a criptografia <br>para estabelecer conexões seguras. Utilize o software no cmd.',
        'Fenix MySQL é um cliente MySQL com utilização via prompt de comando. <br>É diferente do MySQL CLient Go, que utiliza a interface gráfica.',
        'Cliente do tradicional protocolo FTP. Execute o software, informe os dados <br>da conexão do servidor e lance os comandos intuitivamente.'
    ];
    var links = [
        'https://apps.microsoft.com/store/detail/nice-pen/9NGS7WXTL4P1',
        'https://apps.microsoft.com/store/detail/hash-calculator-v10/9NNQ6KKMQXXF',
        'https://www.microsoft.com/pt-br/p/mysql-client-go/9pmcw63w4g3b',        
        'https://apps.microsoft.com/store/detail/forensical/9NWSLHFHM4JQ',
        'https://github.com/eduprogrammer/JavaSuite',
        'https://apps.microsoft.com/store/detail/icmp-launcher/9NZLG43Q7CBN',
        'https://apps.microsoft.com/store/detail/base64-parser/9PFSL1J9DP1S',
        'https://apps.microsoft.com/store/detail/net-adapters/9NMHR8S0CX72',
        'https://apps.microsoft.com/store/detail/netstat-knife/9P5R2F2L7X6V',
        'https://apps.microsoft.com/store/detail/which-ip/9P5DR27Q3T91',
        'https://github.com/eduprogrammer/FenixFileTransfer',
        'https://github.com/eduprogrammer/fenixsniffer',
        'https://github.com/eduprogrammer/MultimediaShow',
        'https://github.com/eduprogrammer/EasyExtractorDesktop',
        'https://github.com/eduprogrammer/fenixfiletransferjava',
        'https://github.com/eduprogrammer/fenixchat',
        'https://github.com/eduprogrammer/fenixsshd',
        'https://github.com/eduprogrammer/FenixSSH',
        'https://github.com/eduprogrammer/FenixMySQL',
        'https://github.com/eduprogrammer/FenixFTP'                
    ];
    var images = [
        'img/icos/nice_pen.png',
        'img/icos/hash_calc.jpg',        
        'img/icos/mysql_client.png',                
        'img/icos/forensical.png',
        'img/java.png',
        'img/icos/icmp_la.png',
        'img/icos/base64.png',
        'img/icos/net_adapters.png',
        'img/icos/netstat.png',
        'img/icos/qual_ip.png',
        'img_/logos/logo.png',
        'img_/logos/logo.png',
        'img_/logos/multimedia.png',
        'img/icos/f_zip.png',
        'img_/logos/logo.png',
        'img/icos/chat.png',
        'img_/logos/logo.png',
        'img_/logos/logo.png',
        'img_/logos/logo.png',
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
        S('four').backgroundColor = "black";        
        loadNews();

    });

    attach('two', 'click', function () {
       
        toCount = 5;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "gray";
        S('three').backgroundColor = "black";
        S('four').backgroundColor = "black";        
        loadNews();

    });

    attach('three', 'click', function () {
       
        toCount = 10;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "gray";
        S('four').backgroundColor = "black";        
        loadNews();

    });

    attach('four', 'click', function () {
       
        toCount = 15;
        S('one').backgroundColor = "black";
        S('two').backgroundColor = "black";
        S('three').backgroundColor = "black";
        S('four').backgroundColor = "gray";        
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
        
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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
       
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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
       
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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
       
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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
       
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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
       
        const photos = ['url(\"img_/programming/java_code.png\")','url(\"img_/programming/exe.png\")','url(\"img_/programming/ruby.png\")','url(\"img_/informatics/robots.jpg\"'];
        const titles = ['Softwares em Java','Ferramentas em C / C++','Scripts para Prompt de Comando','Programas Automatizados'];
        const subtitles = ['Programas Multiplataformas para sua Empresa','Executáveis (.exe) e Bibliotecas (.dll)','Soluções Sem Interface Gráfica (GUI)','Criação de Robots Automáticos'];
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