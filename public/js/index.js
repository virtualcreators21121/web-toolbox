var hamburger = document.getElementsByClassName("hamburger")[0];

hamburger.addEventListener('click',()=>{
    if(hamburger.classList.contains("open")){
        hamburger.classList.remove("open");
    }
    else{
        hamburger.classList.add("open");
    }
});