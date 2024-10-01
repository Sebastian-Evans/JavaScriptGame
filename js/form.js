window.addEventListener('load', (event) =>{


    let userName = window.prompt("What is your name?");

    let message = "Hello " + userName + " welcome to this soccer game!";


    let pTag = document.getElementById("welcome");
    pTag.innerHTML = message;

   
    });