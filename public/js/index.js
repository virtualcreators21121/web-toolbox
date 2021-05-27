var hamburger = document.getElementsByClassName("hamburger")[0];
var navbar =document.getElementsByTagName
hamburger.addEventListener('click',()=>{
    if(hamburger.classList.contains("open")){
        hamburger.classList.remove("open");
    }
    else{
        hamburger.classList.add("open");
    }
});