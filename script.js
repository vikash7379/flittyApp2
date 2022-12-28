let docTitile = document.title;
window.addEventListener('blur',()=>{
    document.title = "Come Back 🙀 | Flitty"
})
window.addEventListener('focus', ()=>{
    document.title = docTitile
})


let tc = document.querySelector("#toggleClass");
let line1 = document.querySelector("#toggleBar1");
let line2 = document.querySelector("#toggleBar2");
let line3 = document.querySelector("#toggleBar3");
let lines = document.querySelector("#toggleBar");


function mobMenu () {
    tc.classList.toggle("dispNav");
    lines.classList.toggle("hm-click");
    line1.classList.toggle("line1-click");
    line2.classList.toggle("line2-click");
    line3.classList.toggle("line3-click");
    container.classList.toggle("fixedBgMob")
}