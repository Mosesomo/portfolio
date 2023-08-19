const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    header.classList.toggle("sticky", window.scrollY > 0);
});

//handling navigation bar()
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

/*const list = document.querySelector('ul');

list.addEventListener('click', ()=>{
    closemenu();
});*/

//handling typing effects
let typed = new Typed(".multiple-text", {
    strings: ["Frontend Developer", "Web Designer", "web Developer"],
    // Strings to be shown in the typewriter effect.
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});