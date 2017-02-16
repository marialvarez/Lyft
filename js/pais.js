function init(){
    var button = document.getElementById("next");
    button.addEventListener('click',onButtonClick);
}

function onButtonClick() {
    var input = document.getElementById("number");
    localStorage.setItem('Number', input.value);
}