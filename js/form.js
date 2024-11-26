const gamespaceWidth = $("#gamespace").width();          
const gamespaceHeight = $("#gamespace").height();
let userScore = 0;
let timerCountdown = 30;
let x;
let count = 0;
let timeoutMethod;

// Function to generate random x-coordinate
function randomX() {
    return Math.floor(Math.random() * (gamespaceWidth - 35));
}

// Function to generate random y-coordinate
function randomY() {
    return Math.floor(Math.random() * (gamespaceHeight - 35));
}

// Function to generate random interval for adding images
function randomTime() {
    return Math.floor(Math.random() * 2000);
}

// Function to generate random interval for removing images
function randomRemovalTime() {
    return Math.floor(Math.random() * 1000) + 1000;
}

// Function to increase score
function increaseScore() {
    userScore++;
    $("#score").text(`${userScore} points`);
}

// Function for decreasing the time
function decreaseTime() {         
    if (timerCountdown >= 0) {
        $("#timer").text(`${timerCountdown} seconds remaining`);
        timerCountdown --;

        // Schedule the next countdown tick
        timeoutMethod = setTimeout(decreaseTime, 1000);
    } else {
        alert("Timer is complete");

        // Clear any pending tasks
         clearTimeout(x); 
         clearTimeout(timeoutMethod); 
        resetGame();
    }
}

// Function to add images to the gamespace
function addImage() {
    let xPos = randomX();
    let yPos = randomY();

    let imageId = `image-${count++}`; // Generate unique Id inside imageId variable

    $("#gamespace").append($("<img>", {
        src: "img/soccerBall.png",
        alt: "picture of a soccer ball",
        class: "soccerBall",
        id: imageId,
        style: `left: ${xPos}px; top: ${yPos}px; position: absolute;` 
    }));

    // Schedule image removal
    let removalTime = randomRemovalTime();
    setTimeout(() => {
        $(`#${imageId}`).remove(); // Remove the image using imageId
    }, removalTime);

    if (timerCountdown > 0) {
        x = setTimeout(addImage, randomTime());
    }
}

// Function to start the game
function startGame() {
    $("#score").text(`${userScore} points`);
    $("#timer").text(`${timerCountdown} seconds remaining`); 
    addImage();
    decreaseTime();
}

function resetGame() {
    // Reset the game elements: score, timer, and images
    $("#gamespace").empty(); // Clear all images
    userScore = 0; // Reset score
    timerCountdown = 30; 
    $("#score").text(`${userScore} points`); 
    $("#timer").text(`${timerCountdown} seconds remaining`); 

    // Enable the start button and its click event for a new game
    $("#start_button").on("click", function(){
        startGame();
        $(this).off("click"); 
    });

    $("#start_button").css({
        "width" : "90px",
        "height": "50px",
        "font-size" : "22px",
        "background-color": "#7cfc00"
    });
}

// Event listener for game setup
window.addEventListener('load', (event) => {
    let pTag = document.getElementById("welcome");
    let userName = window.prompt("What is your name?");
    let message = `Hello ${userName}, welcome to this soccer game!`;
    pTag.innerHTML = message;

    $("#start_button").on("click", function() {
        startGame();
        $(this).off("click");
    });

    $("#start_button").css({
        "width": "90px",
        "height": "50px",
        "font-size": "22px",
        "background-color": "#7cfc00"
    });
});

// Click event for scoring
$(document).ready(function() {
    $("#gamespace").on("click", "img.soccerBall", function() {
        increaseScore();
        $(this).remove();
    });

    $("footer").load("load.html");
});
