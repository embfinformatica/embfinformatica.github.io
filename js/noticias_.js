function main() {
    const tasks = new Tasks();
    const chat = new Chat();

    var isServerReady = false;                    

    var toCount = 0;
    var categories = ['DETETIVE','ESTATÍSTICA','SOfTWARES','GAMES','DETETIVE','ESTATÍSTICA','SOFTWARES','GAMES','DETETIVE','ESTATÍSTICA','SOFTWARES','GAMES','DETETIVE','ESTATÍSTICA','SOFTWARES','GAMES'];
    var titles = [
        'Os detetives e os Testes de Intrusão',
        'Qual o melhor? Python ou R?',
        'Entenda a diferença entre Aplicativo e Software',
        'O significado de DirectX que você não sabia',
        'Roteiros para o êxito nas investigações',
        'Diagrama de dispersão no R',
        'As Classes Abstratas e suas aplicações',
        'O Destravamento de Xbox 360 e a Engenharia Reversa',
        'Detetive Particular Participa de Inquérito?',        
        'Preciso aprender a programar<br> para ser cientista de dados?',
        'Como é ser um hacker?',
        'Como é feito um jogo de computador?',
        'Como é a Perícia de Digitais?',
        'O Excel é suficiente para minha empresa?',
        'O que é uma Linguagem Orientada a Objetos',
        'Nova Plataforma de Jogos em Java'
    ];
    var subtitles = [
        'Eduardo Faria - 12/06/2022',
        'Eduardo Faria - 11/06/2022',
        'Eduardo Faria - 10/06/2022',
        'Eduardo Faria - 09/06/2022',
        'Eduardo Faria - 08/06/2022',
        'Eduardo Faria - 07/06/2022',
        'Eduardo Faria - 06/06/2022',
        'Eduardo Faria - 05/06/2022',
        'Eduardo Faria - 04/06/2022',
        'Eduardo Faria - 03/06/2022',
        'Eduardo Faria - 02/06/2022',
        'Eduardo Faria - 01/06/2022',
        'Eduardo Faria - 31/05/2022',
        'Eduardo Faria - 30/05/2022',
        'Eduardo Faria - 29/05/2022',
        'Eduardo Faria - 28/05/2022'
    ];
    var descriptions = [
        'Você já ouviu falar da palavra inglesa Pen Testing? Se sim, deve <br>ter em mente que os principais protagnistas são os',
        'Durante a análise de dados, é comum que o analista sinta <br>necessidade de lançar mão de programas e ferramentas',
        'Softwares, aplicativos, apps, Web Apps? Confuso, não? São <br>sinônimos? Iremos explicar... Em primeiro lugar, não',
        'Se você é um grande fã e habitualmente baixa e instala muitos <br>jogos para computador em seu PC, provavelmente em',
        'A profissão de detetive particular, também denominada de detetive <br>profissional, como já esposado na Lei 13.432/2017,',
        'O diagrama de pontos é utilizado para tecer conclusões entre <br>duas variáveis quantitativas nos eixos das abscissas e',
        'Hoje, sabe-se que existem muitas linguagens de programação <br>disponíveis no mercado, munindo o programador de opções',
        'Você já ouviu falar de engenharia reversa? Se não, <br>deve estar imaginando que o "engenheiro reverso" é alguém...',
        'A resposta é sim, juridicamente e faticamente. De acordo com o art. 5°,<br>\'caput\' e parágrafo único da Lei 13.482/2017, é possível a...',
        'A análise de dados é um ramo da informática multidisciplinar,<br>que faz uma intersecção entre os ensinamentos da estatística, computação, matemática e...',
        'O termo "hacker", de antemão, é um termo bastante rudimentar e banalizado<br>para denotar pessoas envolvidas em crimes cibernéticos como roubo de senhas...',
        'Basicamente, um game é constituído de códigos que gerenciam os recursos<br>trazidos pelo desenvolvedor de software, designer gráficos...',
        'Se você adora Netflix ou já assistiu a várias séries de investigação policial,<br>como a série CSI, com certeza você já se deparou com a curiosidade...',
        'É inegável a presença dos produtos da gigante Microsoft em nossas vidas:<br>do sistema Operacional Windows até os mais famigerados programas para computador...',
        'As linguagens orientadas a objetos implementam o conceito de classes,<br>que são unidades que tem a habilidades de encapsular...',
        'Já está disponível a plataforma de Eduardo Programador para design<br>de games profissionais no estilo 2D, na linguagem Java...'
    ];
    var links = [
        'noticias/12_06_2022_detetive.html',
        'noticias/11_06_2022_estatistica.html',
        'noticias/10_06_2022_softwares.html',
        'noticias/09_06_2022_jogos.html',
        'noticias/08_06_2022_detetive.html',
        'noticias/07_06_2022_estatistica.html',
        'noticias/06_06_2022_softwares.html',
        'noticias/05_06_2022_games.html',
        'noticias/04_06_2022_detetive.html',
        'noticias/03_06_2022_estatistica.html',
        'noticias/02_06_2022_softwares.html',
        'noticias/01_06_2022_jogos.html',
        'noticias/31_05_2022_detetive.html',
        'noticias/30_05_2022_estatistica.html',
        'noticias/29_05_2022_softwares.html',
        'noticias/28_05_2022_games.html'
    ];
    var images = [
        'img_/noticias/16.jpg',
        'img_/noticias/15.jpg',
        'img_/noticias/14.jpg',
        'img_/noticias/13.jpg',
        'img_/noticias/12.jpg',
        'img_/noticias/11.png',
        'img_/noticias/10.jpg',
        'img_/noticias/09.jpg',
        'img_/noticias/08.jpg',
        'img_/noticias/01.jpg',
        'img_/noticias/02.jpg',
        'img_/noticias/03.jpg',
        'img_/noticias/04.jpg',
        'img_/noticias/07.png',
        'img_/noticias/05.jpg',
        'img_/noticias/06.jpg'
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
                                           
}