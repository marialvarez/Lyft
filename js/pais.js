function init(){
    var button = document.getElementById("number");
    button.addEventListener('click',onButtonClick);
}

function onButtonClick() {
    var input = document.getElementById("number");
    localStorage.setItem('input', input.value);
}