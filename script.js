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
let phoneInput = document.getElementById("phoneInput");
let faqsDetails = document.getElementById("faqsDetails");
let faqsReadmoreP = document.getElementById("faqsReadmoreP");
const navbar = document.getElementById("navbar");
let heroDetails = document.getElementById("heroDetails");
let heroReviews = document.getElementById("heroReviews");
let detailsCard = document.getElementById("detailsCard");
let faqsWrap = document.getElementById("faqsWrap");
// let phoneCodes = document.getElementById("phone-codes");
let pcValueDisp = document.getElementById("phoneCodeValueDisp");





function mobMenu() {
  tc.classList.toggle("dispNav");
  lines.classList.toggle("hm-click");
  line1.classList.toggle("line1-click");
  line2.classList.toggle("line2-click");
  line3.classList.toggle("line3-click");
  // container.classList.toggle("fixedBgMob");
}

// Accor home page

for (let i = 0; i < accor.length; i++) {
  closeIcon[i].style.display = "none";
  if (accor[i].classList.contains("activeAccor")) {
    openIcon[i].style.display = "none";
    closeIcon[i].style.display = "block";
  }

  accor[i].addEventListener("click", () => {
    for (let j = 0; j < accor.length; j++) {
      if (i == j) {
        var res = accor[i].classList.toggle("activeAccor");
      } else {
        accor[j].classList.remove("activeAccor");
      }
      if (accor[j].classList.contains("activeAccor")) {
        openIcon[j].style.display = "none";
        closeIcon[j].style.display = "block";
      } else {
        openIcon[j].style.display = "block";
        closeIcon[j].style.display = "none";
      }
    }
  });
}


// add space in phone number

function phoneCodes(pcValue){
  let phoneCodesSelect = pcValue.value;
  //  phoneInput.value = phoneCodesSelect ;

   pcValueDisp.innerHTML = phoneCodesSelect;
}

function addSpaceInPhone(input){

  let value = input.value;
  value = value.replace(/[^0-9]/g,'');
  let newValue = "";
  for (var i=0; i<value.length; i++){
    if (i === 3 || i === 6 ){
      newValue += " - ";
    }
    newValue += value[i];
  }
  input.value = newValue;
}




// faqs read more onclick

function faqsReadMore() {
  faqsDetails.classList.toggle("faqs-onclick");

  // faqsWrap.style.height = "80%"

  if (faqsWrap.style.height === "75%") {
    faqsWrap.style.height = "70%";
  } else {
    faqsWrap.style.height = "75%";
  }

  heroDetails.classList.toggle("details-FaqsClick")
  heroReviews.classList.toggle("reviews-FaqsClick")
  detailsCard.classList.toggle("details-section-Faqs-click")

  document.body.scrollTop =680;
  // document.documentElement.scrollTop = 0;
  if (faqsReadmoreP.innerHTML === "Read more") {
    faqsReadmoreP.innerHTML = "Less more";
  } else {
    faqsReadmoreP.innerHTML = "Read more";
  }
}

// navbar scroll background change

window.onscroll = function () {
  if (document.body.scrollTop >= 70) {
    navbar.classList.add("navbar-scrolled");
  } else {
    navbar.classList.remove("navbar-scrolled");
  }
};
