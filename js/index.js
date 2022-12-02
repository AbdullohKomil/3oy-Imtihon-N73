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
  clicked.forEach(clicced => {
    clicced.addEventListener("click", (e)=> {
      console.log( );
      editclass.forEach(toggler=> {
        if(e.target.id == toggler.id){
        toggler.classList.toggle("heightmax")}
      })
    })
  })
 

