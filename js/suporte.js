function main() {

    const tasks = new Tasks();   

    attach("yes", "click", function () {
        if(ob('yes').checked) {
            On('t_h');
            Off('only_other');
            ob('yes').checked = true;
            ob('no').checked = false;            
            ob('t_h').style.paddingLeft = "12em";                                    
        }
     });

     attach("no", "click", function () {
            Off('t_h');
            On('only_other');
            ob('no').checked = true;
            ob('yes').checked = false;
     });

    
    attach("other_start", "click", function () {
       alert('Registro encaminhado com sucesso!'); 
       location.reload();
    });

    attach("t_h_start", "click", function () {
        alert('Registro encaminhado com sucesso!'); 
        location.reload();
     });                                            
          
    
}