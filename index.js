let btn_toggle = document.querySelector("#btn_toggle");
let elem = document.querySelector("aside");

let toggle = () => elem.classList.toggle('open');

btn_toggle.addEventListener('click', toggle);
