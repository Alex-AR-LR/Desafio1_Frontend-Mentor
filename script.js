const $social = document.querySelector(".social");
const $btnShare = document.querySelector(".btn-share");


/* $btnShare.addEventListener("click",e=>{
    $social.classList.toggle("is-active");
}) */


const responsive = ()=>{
    let breakpoint = matchMedia("(min-width:1440px)");
    
    $btnShare.addEventListener("click",e=>{
       breakpoint.matches
        ? $social.classList.toggle("is-active2")
        : $social.classList.toggle("is-active")
    })
    
}


responsive();

