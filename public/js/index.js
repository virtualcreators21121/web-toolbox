var hamburger = document.getElementsByClassName("hamburger")[0];
var navbar = document.getElementById("top-bar");
var topBarElements = document.getElementsByClassName("top-bar-element");


hamburger.addEventListener('click',()=>{
    var i;
    if(hamburger.classList.contains("open")){
        hamburger.classList.remove("open");
        navbar.classList.remove("open-nav");
        for(i = 0;i<topBarElements.length; i++){
            topBarElements[i].classList.remove("on-open-show-items");
        }
    }
    else{
        hamburger.classList.add("open");
        navbar.classList.add("open-nav");
        for(i = 0;i<topBarElements.length; i++){
            topBarElements[i].classList.add("on-open-show-items");
        }
    }
});