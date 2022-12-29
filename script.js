let docTitile = document.title;
window.addEventListener("blur", () => {
  document.title = "Come Back 🙀 | Flitty";
});
window.addEventListener("focus", () => {
  document.title = docTitile;
});

let tc = document.querySelector("#toggleClass");
let line1 = document.querySelector("#toggleBar1");
let line2 = document.querySelector("#toggleBar2");
let line3 = document.querySelector("#toggleBar3");
let lines = document.querySelector("#toggleBar");
let closeIcon = document.getElementsByClassName("closeIcon");
let openIcon = document.getElementsByClassName("openIcon");
let accor = document.getElementsByClassName("faqs-accor");

function mobMenu() {
  tc.classList.toggle("dispNav");
  lines.classList.toggle("hm-click");
  line1.classList.toggle("line1-click");
  line2.classList.toggle("line2-click");
  line3.classList.toggle("line3-click");
  container.classList.toggle("fixedBgMob");
}



for (let i = 0; i < accor.length; i++) {
  closeIcon[i].style.display = "none";

  accor[i].addEventListener("click", () => {

    const res = accor[i].classList.toggle("activeAccor");


    if(res){
        openIcon[i].style.display = "none";
        closeIcon[i].style.display = "block";
    }
    else{
        openIcon[i].style.display = "block";
        closeIcon[i].style.display = "none";
    }
  });
}


// var selector = '.faqs-accor';

// $(selector).on('click', function(){
//     $(selector).removeClass('activeAccor');
//     $(this).addClass('activeAccor');
//     if( $(".openIcon").css("display") == "none" ){
//         $(".openIcon").css("display","block")
//     }
//     else( $(".openIcon").css("display","none"))
//     if( $(".closeIcon").css("display") == "block" ){
//         $(".closeIcon").css("display","none")
//     }
//     else( $(".closeIcon").css("display","block"))
// });