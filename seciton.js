var sections =['.section1','.section2','.section3','.section4','.section5'];
const nextbtns = document.querySelectorAll(".next");
const backbtn = document.querySelector("#backbtn");
var i=0;
var valid = true;



nextbtns.forEach((nextbtn)=>{
    nextbtn.addEventListener("click",()=>{

        if(i<sections.length-1){
            console.log('before '+i);
            var curr = document.querySelector(sections[i]);
            var next = document.querySelector(sections[i+1]);

            if(valid){

                curr.style.display = "none";
                next.style.display = "flex";
        
            }
            i++;
            console.log('after ' +i);
        }

    });
});

backbtn.addEventListener("click",()=>{

    if(i>0){
        console.log('beforeback '+i);
        var curr = document.querySelector(sections[i]);
        var prev = document.querySelector(sections[i-1]);

        if(valid){

            curr.style.display = "none";
            prev.style.display = "flex";
    
        }
        i--;
        console.log('after ' +i);
    }

});