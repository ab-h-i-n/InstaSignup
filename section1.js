
var phonebtn = document.querySelector(".phone");
var emailbtn = document.querySelector(".email");
var phoneform = document.querySelector("#phone");
var emailform = document.querySelector("#email");
var phninpt = document.querySelector("#phone input");
var emailinpt = document.querySelector("#email input");
var domains = document.querySelectorAll(".domain");
var nextbtn=document.querySelector(".section1 .next");
var currentopt = "phone";

var currentsec;
const section1 = document.querySelector('.section1');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.target === section1 && entry.isIntersecting) {
      currentsec = 'section1';
    }
  });
});
observer.observe(section1);

//linkss

emailbtn.addEventListener("click", () => {
  phonebtn.classList.remove("active");
  phoneform.style.display ="none";
  emailbtn.classList.add("active");
  emailform.style.display ="block";
  currentopt = "email";
});

phonebtn.addEventListener("click", () => {
  phonebtn.classList.add("active");
  phoneform.style.display ="block";
  emailbtn.classList.remove("active");
  emailform.style.display ="none";
  currentopt = "phone";
});

//inputs

phninpt.addEventListener("change", () => {
  var IN = document.querySelector(".in");
  if (phninpt.value !== "" || emailinpt.value !== "") {
    nextbtn.classList.remove("disable");
    IN.style.filter = "opacity(.7)";
  } else {
    nextbtn.classList.add("disable");
    IN.style.filter = "opacity(1)";
  }
});

//domains

domains.forEach((domain) => {
  domain.addEventListener("click", () => {
    emailinpt.value += domain.innerText;
    hideUnselectedDomains(domain.innerText);
  });
});

function hideUnselectedDomains(selectedDomain) {
  domains.forEach((domain) => {
    if (domain.innerText !== selectedDomain) {
      domain.classList.add("hidden");
    }
  });
}

emailinpt.addEventListener("change", () => {
    var domainValue = emailinpt.value.split("@")[1];
    
    if (domainValue) {
      domains.forEach((domain) => {
        if (domain.innerText !== "@" + domainValue) {
          domain.classList.add("hidden");
        } else {
          unhideall();
        }
      });
    } else {
      unhideall();
    }
  });
  

function unhideall() {
  domains.forEach((domain) => {
    domain.classList.remove("hidden");
  });
}




//next button

import { changeSec } from "./seciton.js";

nextbtn.addEventListener("click",()=>{
  console.log(currentopt);
   if(currentopt == "phone"){
      if(phninpt.value.length == 10)
      {
        changeSec(currentsec);
      }
      else
      {
        var pin = document.querySelector(".pin");
        pin.classList.add("error");
        setTimeout(()=>{
          pin.classList.remove("error");
        },1000);
      }
   }
   else if(currentopt == "email"){
    if(emailinpt.value.includes("@gmail.com"))
      {
        changeSec(currentsec);
      }
      else
      {
        emailinpt.classList.add("error");
        setTimeout(()=>{
          emailinpt.classList.remove("error");
        },1000);
      }
   }

   
})



