var inputNumber = document.getElementById("number");

function init(){

    var button = document.getElementById("next");
    button.addEventListener('click',onButtonClick);

}

function onButtonClick() {
    
    localStorage.setItem('Number', inputNumber.value);
    
    var mensajeNumber = document.getElementById("mensajeNumber");
    
    if(inputNumber.value == '') {
        mensajeNumber.innerHTML = "<br><h5 class='text-center' style='color:#FF1493';>Debes escribir tu número telefónico</h5>"
    } else {
        mensajeNumber.innerHTML = '';
        location.href = 'signup.html';
    }
    
    
}


function validateNumber(_evt){
    
    number = window.event.keyCode;


    if((number>=48 && number<=57)|| number==8 || number==32){
            
    } else {
        
        _evt.preventDefault();
    }     
} 
	