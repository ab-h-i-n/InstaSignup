
const otp = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
var codeinpt = document.querySelector(".code");
const section2 = document.querySelector('.section2');
const nextbtn = document.querySelector('.section2 .next');
var currentsec;

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target === section2 && entry.isIntersecting) {
      alert('Your otp is : '+otp);
      currentsec = 'section2'
    }
  });
});
observer.observe(section2);

import { changeSec } from "./seciton.js";


codeinpt.addEventListener("change",()=>{
  
  if(codeinpt.value == otp){
    nextbtn.classList.add("btnactive");
    nextbtn.addEventListener("click",()=>{
      changeSec(currentsec);
    })
  }
  else{
    nextbtn.classList.remove("btnactive");
  }

})
