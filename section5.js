import { changeSec } from "./seciton.js";
import { savedata } from "./database.js";

const usrnameinpt = document.querySelector(".usrname");
const nextbtn = document.querySelector(".section5 .next");
var notavail = document.querySelector('.notavail');

var currentsec;
const section5 = document.querySelector('.section5');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target === section5 && entry.isIntersecting) {
      currentsec = 'section5';
      changeSec(currentsec);
    }
  });
});
observer.observe(section5);


usrnameinpt.addEventListener("change",()=>{
  var  valid = true;  //usrIsValid(usrnameinpt.value);
  nextbtn.classList.add("btnactive");

  if(valid){
    notavail.style.display = 'none';
    nextbtn.addEventListener("click",()=>{
      nextbtn.innerHTML = '<img src="./images/spinner.gif">'
      savedata();
    })
  }
  else{
    notavail.style.display = 'flex';
  }

})