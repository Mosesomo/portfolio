const header = document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", this.window.scrollY > 0);
});

const openmenu = () =>{
    document.getElementById("navigation").style.display="block";
    document.getElementById("open-btn").style.display="none";
    document.getElementById("close-btn").style.display="block";
};

const closemenu = () =>{
    document.getElementById("navigation").style.display="none";
    document.getElementById("open-btn").style.display="block";
    document.getElementById("close-btn").style.display="none";
};