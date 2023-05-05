
    function savedata(){

        var phnnum = document.querySelector('#phone input').value;
        var emailaddr = document.querySelector('#email input').value;
        var Name = document.querySelector('.name').value;
        var pass = document.querySelector('.pass').value;
        var day = document.querySelector('.day').value;
        var month = document.querySelector('.month').value;
        var year = document.querySelector('.year').value;
        var usrname = document.querySelector('.usrname').value;

        try{
            var usrRef = database.ref('users').push();
            usrRef.set({
            username:usrname,
            phone:phnnum,
            email:emailaddr,
            password:pass,
            fullname:Name,
            day:day,
            month:month,
            year:year
        })

        setTimeout(()=>{
            document.querySelector('.section5 .next').innerHTML = 'Next';
          },1500);
        }
        catch(error){
            console.log("error");
        }
    }

    export { savedata };