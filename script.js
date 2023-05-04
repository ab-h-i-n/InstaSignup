var phonebtn = document.querySelector(".phone");
var emailbtn = document.querySelector(".email");
var phoneform = document.querySelector("#phone");
var emailform = document.querySelector("#email");


emailbtn.addEventListener("click",()=>{

    phonebtn.classList.remove("active");
    phoneform.style.display ="none"
    emailbtn.classList.add("active");
    emailform.style.display ="block";

});

phonebtn.addEventListener("click",()=>{

    phonebtn.classList.add("active");
    phoneform.style.display ="block";
    emailbtn.classList.remove("active");
    emailform.style.display ="none";

});
