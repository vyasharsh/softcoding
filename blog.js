const btn1 = document.querySelector("#btn1");
const text1 = document.querySelector(".show-1");
btn1.addEventListener("click" ,Button);
function Button(){
    text1.classList.toggle("hide-1");

 btn1.textContent=="Read More"
     ? (btn1.textContent = "Read Less")
     : (btn1.textContent = "Read More");
}
const btn2 = document.querySelector("#btn2");
const text2 = document.querySelector(".show-2");

btn2.addEventListener("click" , button);

function button(){
    text2.classList.toggle("hide-2");

 btn2.textContent=="Read More"
     ? (btn2.textContent = "Read Less")
     : (btn2.textContent = "Read More");
}