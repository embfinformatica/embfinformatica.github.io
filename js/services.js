function main() {
    const tasks = new Tasks();
    const chat = new Chat();

    var isServerReady = false;                     

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
        'rpa.html','calculadora_estatistica.html','consulta_cnpj.html','gov_imposto.html','pdf_lovers.html',        
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
     
}