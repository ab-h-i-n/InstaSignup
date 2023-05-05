import { changeSec } from "./seciton.js";

const nextbtn = document.querySelector('.section3 .next');
const nameinp = document.querySelector('#name');
const passinp = document.querySelector('#pass');


var currentsec;
const section3 = document.querySelector('.section3');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target === section3 && entry.isIntersecting) {
      currentsec = 'section3';
    }
  });
});
observer.observe(section3);


nameinp.addEventListener("change",()=>{

    if(nameinp.value.length != 0){

        passinp.addEventListener("change",()=>{

            if(passinp.value.length >= 4 ){

                nextbtn.classList.add("btnactive");

                nextbtn.addEventListener("click",()=>{

                    changeSec(currentsec);

                })

            }
            else{

                nextbtn.classList.remove("btnactive");
            }

        })
    }

})