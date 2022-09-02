function main() {
    const tasks = new Tasks();
    const chat = new Chat();

    var isServerReady = false;        

    if(!tasks.isHttps()) {
        tasks.set('https://eduardoprogramador.com/services.html');
    }                 

    var toCount = 0;
    var categories = [
        'CONTABILIDADE','ESTATÍSTICA','CONTABILIDADE','CONTABILIDADE','ESCRITÓRIO',
        'LICITAÇÃO','ESCRITÓRIO','INFORMÁTICA','GPS','BATE-PAPO',
        'UTILIDADES','MATEMÁTICA','LICITAÇÃO','INFORMÁTICA','INFORMÁTICA',
        'INFORMÁTICA','GOVERNO','GOVERNO','UTILIDADES','UTILIDADES'
    ];
    var titles = [
        'RPA Online','Calculadora Estatística','Consulta CNPJ','GOV Imposto','PDF Lovers',
        'Caçador ComprasNET','Photo Edit','Certidão IP','Onde Eu Estou','WhatsApp Fácil',
        'Qr-Code Generator','Números Aleatórios','Consulta CEIS','Serviço WhoIS','Informatics',
        'File Analyzer','Auxílio Emergencial','AuditeGOV','Color Generator','Consulta CEP'        
    ];
    var subtitles = [
        'Calculadora de RPA Online','Cálculos Estatísticos','Consulta CNPJ sem captcha','Retenção de Impostos','Mescla, Quebra e lê PDF',
        'Pesquisa de Licitações','Muda o Tamanho da Imagem','Descubra seu IP','Localização e Rastramento GPS','Ferramenta para WhatsApp',
        'Gerador de QR Code','Gere Números Aleatórios Online','Consulta ao CEIS','Rastreamento de IP','Conversor de Bases Decimais',
        'Perícia de Arquivos','Consulta de Auxílio Emergencial','Auditoria Governamental','Geração de Cores','Consulta de Rua por CEP'        
    ];
    var descriptions = [
        'Calcule o Recibo de Pagamento de Autônomo (RPA) com retenção de INSS,<br> ISS, Imposto de Renda e legislação atualizada...',
        'Calcule facilmente a média de uma amostra, variância, desvio padrão,<br> curtose de uma amostra e também juros simples e composto...',
        'Confira os dados do CNPJ de qualquer empresa, sem a demora de fazer<br> o Captcha, com localização da empresa no mapa e dados atualizados...',
        'Calcule as retenções de impostos federais no DANFE ou na NFS-e,<br> de acordo com a IN 1.234/2012 da Receita Federal...',        
        'Combine vários arquivos em um único PDF, ou faça o contrário:<br> varias páginas de um PDF, tudo online. Extraia textos de PDF...',
        'Pesquise licitações com filtros avançados, incluindo pesquisa por<br> CNPJ de fornecedor, parte do nome, UASG, objeto e muito mais...',
        'Mude rapidamente o tamanho da imagem online, por exemplo: convertendo<br> de 640x480 para 1020 x 850, sem danificar a imagem original...',
        'Obtenha uma certidão completa do seu endeço IP, contendo a cidade<br> de localização, latitude e longitude aproximadas e ganhe uma certidão...',
        'Para usar o Onde Eu Estou Web, você precisa baixar primeiro<br> o app oficial na PlayStore e ler o QR Code em seguida...',
        'Abra uma janela do WhatsApp sem precisar adicionar a pessoa aos<br> seus contatos. Você precisa estar logado no WhatsApp Web no navegador...',
        'Obtenha online, de uma maneira fácil e rapida, o código Qr-Code<br> de uma URL ou de qualquer sequência de caracteres...',
        'Agora você pode facilmente gerar números aleatorios online,<br> de forma automatizada, para uma situação específica no seu dia...',
        'Consulte se uma empresa está registrada no Cadastro de Empresas<br> Inidôneas e Suspensas (CEIS), mantido pela CGU...',
        'Com o WhoISde Eduardo Programador, você tem acesso ao relatório<br> de dados de um IP e descobre a quem pertence o registro...',
        'Converta números entre diferentes sistemas decimais, incluindo<br> binário, decimal, hexadecimal e octal, rápido e fácil...',
        'Examine o conteúdo dentro de um arquivo e obtenha o hash<br> (checksum) dos arquivos analisados...',
        'Confira se algum beneficiário recebeu o Auxílio Emergencial,<br> com os extratos e períodos de cada parcela, usando o CPF...',
        'Programa Web de auditoria governamental, com módulos de licitação,<br> convênios, servidores, empenhos e despesas e muito mais...',
        'Obtenha cores customizadas com o código RGB e hexadecimal para<br> usos diversos, incluindo editores de imagem e programação...',
        'Descubra a qual logradouro um determinado CEP pertence, incluindo<br> cidade e estado da federação, com dados atualizadíssimos...'
    ];
    var links = [
        'services/rpa.html','calculadora_estatistica.html','consulta_cnpj.html','gov_imposto.html','pdf_lovers.html',        
        'licitacao.html','photo_edit.html','certidao_ip.html','onde_estou.html','easy_zap.html',
        'qr_code_generator.html','aleatorio.html','ceis.html','whois.html','informatics.html',
        'file_analyzer.html','auxilio_emergencial.html','audite_gov.html','color_generator.html','consulta_cep.html'
    ];
    var images = [
        'img/count_euro.jpg','img/logo.png','img/icos/cnpj.png','img/plant.jpg','img/happy_people.jpg',                
        'img/icos/cacador.png','img/icos/photo_logo.png','img/icos/computer.jpg','img/icos/onde_estou.png','img/iphone_user.jpg',
        'img/icos/easy_qr.png','img/ball_digital.jpg','img/icos/ceis.png','img/icos/whois.png','img/icos/binary.jpg',
        'img/icos/kid_detetive.jpg','img/icos/hands.jpg','img/icos/audit.png','img/icos/color.png','img/icos/cep.png'
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
    
    tasks.httpPost("php/main.php",encodeURI("date=" + tasks.getTime() + "&time=" + tasks.getTime() + "&acao=Servicos_New_Site"),function () {
        
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

     attach('secure', 'click', function () {
        tasks.go('lgpd.html');                                        
     });

     attach('secure_close', 'click', function () {
        Off('secure');
        Off('secure_close'); 
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