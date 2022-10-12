function main() {
    
    document.getElementById('button').onclick = function () {
      
        const date = document.getElementById('date').value;
        const date_ = date.split('-');
        if(date.localeCompare('') == 0) {
            alert('Escolha uma data');
        } else {

            var dataInicio, dataFim, signoNome, descricao;
            
            const req = new XMLHttpRequest();
            req.open('get','https://digaseusigno.000webhostapp.com/');
            req.onload = function () {
              
              const xml = req.responseText;
              const parser = new DOMParser();
              const xmlBase = parser.parseFromString(xml,'text/xml');
              
              for(let i = 0; i < xmlBase.getElementsByTagName('dataInicio').length; i++) {

                const begin = xmlBase.getElementsByTagName('dataInicio')[i].childNodes[0].nodeValue;
                const beginDay = begin.split('/')[0];
                const beginMonth = begin.split('/')[1];                


                if(beginMonth.localeCompare(date_[1]) == 0) {

                    
                    if(parseInt(date_[2],10) >= parseInt(beginDay,10)) {                        

                        dataInicio = begin;
                        dataFim = xmlBase.getElementsByTagName('dataFim')[i].childNodes[0].nodeValue;
                        signoNome = xmlBase.getElementsByTagName('signoNome')[i].childNodes[0].nodeValue;
                        descricao = xmlBase.getElementsByTagName('descricao')[i].childNodes[0].nodeValue;

                        doSigno(dataInicio,dataFim,signoNome,descricao);

                    } else {        

                        if(date_[1].localeCompare('01') == 0) {
                            dataInicio = begin;
                            dataFim = xmlBase.getElementsByTagName('dataFim')[11].childNodes[0].nodeValue;
                            signoNome = xmlBase.getElementsByTagName('signoNome')[11].childNodes[0].nodeValue;
                            descricao = xmlBase.getElementsByTagName('descricao')[11].childNodes[0].nodeValue;                            

                            doSigno(dataInicio,dataFim,signoNome,descricao);

                        } else {
                            dataInicio = begin;
                            dataFim = xmlBase.getElementsByTagName('dataFim')[i-1].childNodes[0].nodeValue;
                            signoNome = xmlBase.getElementsByTagName('signoNome')[i-1].childNodes[0].nodeValue;
                            descricao = xmlBase.getElementsByTagName('descricao')[i-1].childNodes[0].nodeValue;
                            
                            doSigno(dataInicio,dataFim,signoNome,descricao);
                        }

                        

                    }
                }


              }

              

            };

            req.send();

            
        }

    };

};

function doSigno(one, two, three, four) {
    const show = new XMLHttpRequest();
    window.open('https://digaseusigno.000webhostapp.com/descricao.php?dataInicio=' + encodeURI(one) + '&dataFim=' + encodeURI(two) + '&signoNome=' + encodeURI(three) + '&descricao=' + encodeURI(four));    
}