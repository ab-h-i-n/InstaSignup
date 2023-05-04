const phonebtn = document.querySelector(".phone");
const emailbtn = document.querySelector(".email");
const phoneform = document.querySelector("#phone");
const emailform = document.querySelector("#email");
const phninpt = document.querySelector("#phone input");
const emailinpt = document.querySelector("#email input");
const domains = document.querySelectorAll(".domain");


emailbtn.addEventListener("click", () => {
  phonebtn.classList.remove("active");
  phoneform.style.display ="none";
  emailbtn.classList.add("active");
  emailform.style.display ="block";
});

phonebtn.addEventListener("click", () => {
  phonebtn.classList.add("active");
  phoneform.style.display ="block";
  emailbtn.classList.remove("active");
  emailform.style.display ="none";
});

phninpt.addEventListener("change", () => {
  if (phninpt.value !== "" || emailinpt.value !== "") {
    nextbtn.classList.remove("disable");
  } else {
    nextbtn.classList.add("disable");
  }
});

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

