        const gamespaceWidth = $("#gamespace").width();          
        const gamespaceHeight = $("#gamespace").height();
        let userScore = 0;
        let timerCountdown = 30;

        function randomX(){

        
        return Math.floor(Math.random() * gamespaceWidth);
    }

        function randonY(){
    
            return Math.floor(Math.random() * gamespaceHeight);
        }

        

        function increaseScore(){
            userScore++;
            $("#score").text(`${userScore} points`);
        }
        function decreaseTime(){
        timerCountdown --;   
        $("#timer").text(`${timerCountdown} remaining`);
        }

        function addImage(){

            $("#gamespace").prepend($("<img>",{src:"img/soccerBall.png", alt:"picture of a soccer ball", class:"soccerBall"}));
        }

            function startGame(){

                alert(randomX());

                alert(randonY());

                increaseScore();

                addImage();
            
                decreaseTime();

        }
        window.addEventListener('load', (event) =>{

        let pTag = document.getElementById("welcome");

        let userName = window.prompt("What is your name?");

        let message = "Hello " + userName + " welcome to this soccer game!";


        pTag.innerHTML = message;
        
    

    $("#start_button").on("click",function(){
        
        startGame();
    });
    
    
    $("#start_button").css({
        "width" : "90px",
        "height": "50px",
        "font-size" : "22px",
        "background-color": "#7cfc00"
    });


});

    $(document).ready(function(){
        
        });
        
