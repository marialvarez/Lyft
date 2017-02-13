function init(){
    var button = document.getElementById("number");
    button.addEventListener('keyup',onButtonClick);
}

function onButtonClick() {
    var input = document.getElementById("number");
    localStorage.setItem('input', input.value);
}