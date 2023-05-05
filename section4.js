const year = document.querySelector('.year');
const month = document.querySelector('.month');
const day = document.querySelector('.day');
const nextbtn = document.querySelector('.section4 .next');


var currentsec;
const section4 = document.querySelector('.section4');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target === section4 && entry.isIntersecting) {
      currentsec = 'section4';
    }
  });
});
observer.observe(section4);



import { changeSec } from "./seciton.js";
month.addEventListener("change",()=>{
    day.addEventListener("change",()=>{
        year.addEventListener("change",()=>{
            nextbtn.classList.add("btnactive");
            changeSec(currentsec);
        })
    })
});

