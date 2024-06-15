// Header scroll
let nav = document.querySelector(".navbar");
     window.onscroll = function(){
        if(document.documentElement.scroll > 50){
            nav.classList.add("header-scroll");
        } else{
            nav.classList.remove("header-scroll");
        }
     }

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".collapse navbar-collapse");
navbar.forEach(function(e)
{

       e.addEventListener("click",function(){
        navCollapse.classList.remove("show");
       })

})