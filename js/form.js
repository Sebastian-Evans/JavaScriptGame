const gamespaceWidth = $("#gamespace").width();
    
const gamespaceHeight = $("#gamespace").height();

function randomX(){
return Math.floor(Math.random() * gamespaceWidth);
}

function randonY(){
return Math.floor(Math.random() * gamespaceHeight);
}

let userScore = 0;

function increaseScore(){
    userScore++;
    $("#score").text(`${userScore} points`);
}

window.addEventListener('load', (event) =>{

    

    let userName = window.prompt("What is your name?");

    let message = "Hello " + userName + " welcome to this soccer game!";


    let pTag = document.getElementById("welcome");
    pTag.innerHTML = message;
    
    

    $("#timer").append("<span>30 seconds left</span>");
    $("#start_button").on("click",function(){
        alert("button has been clicked");
    });
    $("#start_button").css({
        "width" : "90px",
        "height": "50px",
        "font-size" : "22px",
        "background-color": "#7cfc00"
    });

    increaseScore();

});

    $(document).ready(function(){
        $("#gamespace").prepend($("<img>",{src:"img/soccerBall.png", alt:"picture of a soccer ball", class:"soccerBall"}));

        alert(randomX());
        alert(randonY());
       
        });
        
