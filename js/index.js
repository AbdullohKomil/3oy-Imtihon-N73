let toNone = document.querySelector(".right");
let ClassAdd = document.querySelector(".navtotoggle");
let tooglebtn = document.querySelector(".tooglebtnn");
tooglebtn.addEventListener("click", function () {
  // toNone.style.display = "none";
  ClassAdd.classList.toggle("navtotoogle");
});
const indicators = document.querySelectorAll(".indicators a");
const images = document.querySelectorAll(".indicators a img");
for (i of indicators) {
  function add(event) {
    const show = document.querySelector(".box_img_tall img");
    show.setAttribute("src", this.firstElementChild.getAttribute("src"));
    event.preventDefault();
  }
  i.addEventListener("click", add);
}
let lorem = document.querySelector(".loremtoblock");
let txt = document.querySelector(".texttonone");
let btn_left = document.querySelector(".btn_testimonials");
let btn_right = document.querySelector(".btn_testimonials_right");
let creatLorem = document.querySelector(".creator_lorem");
let work_lorem = document.querySelector(".work_lorem");
let nametestimonials = document.querySelector(".name_testimonials2");
let worktestemionals = document.querySelector(".work_testimonials2");
let imgtestemionals = document.querySelector(".img-test");
let imglorem = document.querySelector(".img-lorem");
btn_right.addEventListener("click", function () {
  txt.classList.toggle("dsp_none");
  lorem.classList.toggle("dsp_none");
  creatLorem.classList.toggle("dsp_none");
  work_lorem.classList.toggle("dsp_none");
  nametestimonials.classList.toggle("dsp_none");
  worktestemionals.classList.toggle("dsp_none");
  imgtestemionals.classList.toggle("dsp_none");
  imglorem.classList.toggle("dsp_none");
});
btn_left.addEventListener("click", function () {
  lorem.classList.toggle("dsp_none");
  txt.classList.toggle("dsp_none");
  creatLorem.classList.toggle("dsp_none");
  work_lorem.classList.toggle("dsp_none");
  nametestimonials.classList.toggle("dsp_none");
  worktestemionals.classList.toggle("dsp_none");
  imgtestemionals.classList.toggle("dsp_none");
  imglorem.classList.toggle("dsp_none");
});

var clicked = document.querySelectorAll(".buttun");
let editclass = document.querySelectorAll(".accordion-left");
clicked.forEach((clicced) => {
  clicced.addEventListener("click", (e) => {
    console.log();
    editclass.forEach((toggler) => {
      if (e.target.id == toggler.id) {
        toggler.classList.toggle("heightmax");
      }
    });
  });
});

let loader = document.querySelector(".div_loading");
let body = document.body;
let html = document.querySelector(".html");
html.style.overflow = "hidden";
function load() {
  loader.style.display = "none";
  html.style.overflow = "auto";
}

function loadersa() {
  let loaders = setTimeout(load, 1500);
}
// console.log(html);
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 1) {
    document.querySelector("header").style.boxShadow =
      "rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px";
    document.querySelector(".nav_inner").style.height = "65px";
    document.querySelector(".backtop").style.display = "flex";
  }else {
    document.querySelector("header").style.boxShadow = "none";
    document.querySelector(".nav_inner").style.height = "";
    document.querySelector(".backtop").style.display = "none";
  }
  if (window.scrollY > 5) {
    // document.querySelector(".backtop").style.height = "50px";
    // document.querySelector(".backtop").style.width = "50px";
    document.querySelector(".backtop").style.padding = "20px 15px";
  } else {
    // document.querySelector(".backtop").style.height = "0px";
    // document.querySelector(".backtop").style.width = "0px";    
    document.querySelector(".backtop").style.padding = "0px";
  }
});
