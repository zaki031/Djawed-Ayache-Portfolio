var rotated = false;

document.addEventListener('mousemove', function(event) {

    const sidebar = document.querySelector('.sidebar_container');
    const slider_arrow = document.querySelector('#slider_arrow');
    const  nav = document.querySelector('.nav_title');
    const  andi = document.querySelector('.home');
    console.log(rotated);

    if (event.clientX <= 250) {
        nav.style.translate = '80px 0px'; 
        sidebar.style.translate = '340px 0px'; 
        andi.style.translate = '200px 0px'; 
        slider_arrow.style.transform = "rotate(0deg)";
        rotated = true;

    } else{
        sidebar.style.translate = '0px 0px'; 
        andi.style.translate = '0px 0px';
        nav.style.translate =  '0px 0px'; 
 
        if(rotated == true){
            slider_arrow.style.transform = "rotate(180deg)";
            rotated = false;
        }



    }


});
   


