/*
    Copyright 2022. EMBF Softwares e Investigação
    www.embfinformatica.github.io        
    All Rights Reserved

    This file contains functions
    for DOM HTML manipulations.

    1) Include it on your HTML File
    Eg.: <stript src="js/duscript.js"></script>

    Invoke the functions...
*/

/* 
    Returns a new HTML object
*/
function ob(id) {
    return document.getElementById(id);
}

/*
    Returns a new style for an HTML object
*/
function S(id) {
    return document.getElementById(id).style;
}

function val(id) {
    return document.getElementById(id).value;
}

function valp(id,val) {
    document.getElementById(id).value = val;
}

/* 
    turns the object visible
*/
function on(id) {
    document.getElementById(id).style.visibility = "visible";
}

/* 
    changes some HTML code to an element
*/
function txt(obj,text) {
    document.getElementById(obj).innerHTML = text;
    
}

/*
    changes only the text of an html element
*/ 
function txt_(obj,text) {
    document.getElementById(obj).innerText = text;
}

/*
    return the text from an HTML element
*/
function _txt(obj) {
    return document.getElementById(obj).innerText;
}

/* 
    turns the object visible
*/
function On(obj) {
    document.getElementById(obj).style.display = "block";
}

/*
    turns the object invisible
*/
function off(obj) {
    document.getElementById(obj).style.visibility = "hidden";
}

/*
    turns the object invisible removing the white spaces
*/
function Off(obj) {
    document.getElementById(obj).style.display = "none";
}

/*
    enables an HTML element
*/
function ON(obj) {
    document.getElementById(obj).disabled = false;    
}


/* 
    disables an HTML element
*/
function OFF(obj) {
    document.getElementById(obj).disabled = true;
}


/*
    adds some event to an HTML element id
    Eg.: attach("myButtonId","click",function{
        some code...
    });
*/
function attach(obj,type,callback) {

    switch(type) {

        case "click":
            document.getElementById(obj).onclick = callback;            
            break;

        case "scroll":
            document.getElementById(obj).onscroll = callback;
            break;

        case "focus":
            document.getElementById(obj).onfocus = callback;
            break;

        case "change":
            document.getElementById(obj).onchange = callback;
            break;

        case "over":
            document.getElementById(obj).onmouseover = callback;
            break;

        case "leave":
            document.getElementById(obj).onmouseleave = callback;
            break;
        
        case "push":
            document.getElementById(obj).onmousemove = callback;
            break;

    }
}

/*
    adds some event to the document root
    Eg.: attach_("keydown",function(){'some code'})
*/
function attach_(type,callback) {
    
    switch(type) {

        case "keydown":
            document.addEventListener("keydown",callback);
            break;

        default:
            break;

    }
}

/* 
    Changes the location hash of the document
*/
function to(hash) {
    location.hash = hash;
}

/* 
    Makes an element focused
*/
function _in(id) {
    document.getElementById(id).focus();
}

/* 
    Check if an element is focused    
*/

function isOn(id) {
    return document.activeElement === document.getElementById(id);
}



