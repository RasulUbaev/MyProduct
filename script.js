let body = document.querySelector("body");
let modeBtn = document.querySelector(".mode-btn");

modeBtn.addEventListener('click', function(){
    body.classList.toggle('body-dark')
})