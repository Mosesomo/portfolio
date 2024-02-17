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

const closemenu = () => {
  document.getElementById("navigation").style.display="none";
  document.getElementById("open-btn").style.display="block";
  document.getElementById("close-btn").style.display="none"
};

const openChat = () => {
  document.getElementById("chat-box").style.display="block";
};

const closeChat = () => {
  document.getElementById('chat-box').style.display="none";
};

/*const list = document.querySelector('ul');

list.addEventListener('click', ()=>{
    closemenu();
});*/

//handling typing effects
let typed = new Typed(".multiple-text", {
    strings: ["Software engineer", "Frontend Developer", "Web Designer", "web Developer"],
    // Strings to be shown in the typewriter effect.
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

//Chatbot intergration
const chatBox = document.querySelector(".chat-box");
const inputField = chatBox.querySelector("input[type='text']");
const button = chatBox.querySelector("button");
const chatBoxBody = chatBox.querySelector(".chat-box-body");

button.addEventListener("click", sendMessage);
inputField.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});

function sendMessage() {
  const message = inputField.value;
  inputField.value = "";
  chatBoxBody.innerHTML += `<div class="message"><p>${message}</p></div>`;
  chatBoxBody.innerHTML += `<div id="loading" class="response loading">.</div>`;
  scrollToBottom();
  window.dotsGoingUp = true;
    var dots = window.setInterval( function() {
        var wait = document.getElementById("loading");
        if ( window.dotsGoingUp ) 
            wait.innerHTML += ".";
        else {
            wait.innerHTML = wait.innerHTML.substring(1, wait.innerHTML.length);
        if ( wait.innerHTML.length < 2)
            window.dotsGoingUp = true;
        }
        if ( wait.innerHTML.length > 3 )
            window.dotsGoingUp = false;
        }, 250);

  fetch('http://localhost:3000/message', {
    method: 'POST',
    headers: {
      accept: 'application.json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({message})
  }).then(response => {
    return response.json();
  }).then(data => {
    document.getElementById("loading").remove();
    chatBoxBody.innerHTML += `<div class="response"><p>${data.message}</p></div>`;
    scrollToBottom();
  })
}

function scrollToBottom() {
  chatBoxBody.scrollTop = chatBoxBody.scrollHeight;
}