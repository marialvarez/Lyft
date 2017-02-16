function init(){
    var button = document.getElementById("next");
    button.addEventListener('click',onButtonClick);
}

function onButtonClick() {
    var inputName = document.getElementById("name");
    localStorage.setItem('Name', inputName.value);
    var inputEmail = document.getElementById("email");
    localStorage.setItem('Email', inputEmail.value);
}

function validateM(_evt){
    
        var nombre = document.getElementById("name").value;
        
        var nombreArray = nombre.split("");
        var primeraLetra = nombreArray[0];
        var primeraMayus = primeraLetra.toUpperCase();
        var cortePalabra = false;
      
        for(var i=1;i<nombreArray.length;i++){
            if(cortePalabra)
            {    
                primeraMayus += nombreArray[i].toUpperCase();
                cortePalabra = false;
            }
            else
                primeraMayus+=nombreArray[i];
                    if(nombreArray[i] == " ")
                    cortePalabra = true;
            
        }
       
       document.getElementById("name").value = primeraMayus; 
}

  function validateT(_evt){
    /*Los campos nombre y apellido sólo deben permitir caracteres de la A-Z*/
        palabra = window.event.keyCode;

        if((palabra>=65 && palabra<=90)||palabra==8||palabra==32){
            
        } else {
            //alert("Este campo solo permite caracteres de la A-Z");
            _evt.preventDefault();
        }
      
} 

//VALIDAR EMAIL
  function validateEmail(_evt){
    
      var email = document.getElementById("email").value;
      var mensaje = document.getElementById("mensaje");
      
      if(!/([a-zA-Z0-9(-_.)]+[@][a-zA-Z0-9]+[.][a-zA-Z]+)/g.test(email)){
        mensaje.innerHTML = "<h5 style='color:#FF1493';>Correo Electrónico Inválido, debe contener ejemplo: hola@dominio.com</h5>"
      } else {
        mensaje.innerHTML = "";
      }
      
} 