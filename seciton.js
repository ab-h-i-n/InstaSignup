const backbtn = document.querySelector("#backbtn");
var nextbtns = document.querySelectorAll('button.next');
var currentsection;

function changeSec(curr){
    currentsection = curr;
    console.log(currentsection);
        nextbtns.forEach((nextbtn)=>{
            nextbtn.addEventListener("click",()=>{
                switch(curr){
                    case 'section1': document.querySelector(".section1").style.display = "none";
                                    document.querySelector(".section2").style.display = "flex"; break;
    
                    case 'section2': document.querySelector(".section2").style.display = "none";
                                    document.querySelector(".section3").style.display = "flex"; break;
    
                    case 'section3': document.querySelector(".section3").style.display = "none";
                                    document.querySelector(".section4").style.display = "flex"; break;
    
                    case 'section4': document.querySelector(".section4").style.display = "none";
                                    document.querySelector(".section5").style.display = "flex"; break;
                }
            });
        })
    
}

export { changeSec };

backbtn.addEventListener("click",()=>{

    switch(currentsection){

        case 'section2': document.querySelector(".section2").style.display = "none";
                        document.querySelector(".section1").style.display = "flex"; break;

        case 'section3': document.querySelector(".section3").style.display = "none";
                        document.querySelector(".section2").style.display = "flex"; break;

        case 'section4': document.querySelector(".section4").style.display = "none";
                        document.querySelector(".section3").style.display = "flex"; break;

        case 'section5': document.querySelector(".section5").style.display = "none";
                        document.querySelector(".section4").style.display = "flex"; break;
    }

});


