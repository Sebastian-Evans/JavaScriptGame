        const gamespaceWidth = $("#gamespace").width();          
        const gamespaceHeight = $("#gamespace").height();
        let userScore = 0;
        let timerCountdown = 30;
        let x;

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
           
        

        if(timerCountdown >= 0){

            $("#timer").text(`${timerCountdown} remaining`);
            timerCountdown --;
            
            const timeoutMethod = setTimeout(decreaseTime, 1000);
            
        }else{

            alert("Timer is complete");
            clearTimeout(x);
            clearTimeout(timeoutMethod);
        }
        }

        function addImage(){
            
            $("#gamespace").append($("<img>",{src:"img/soccerBall.png", alt:"picture of a soccer ball", class:"soccerBall"}));

            if(timerCountdown > 0){
                x = setTimeout(addImage, 2000);
            }
        }

            function startGame(){

                $("#score").text(`${userScore} points`);

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
        $("#gamespace").on("click", "img.soccerBall", function() {
            increaseScore(); // Increment score when an image is clicked
           
        });
        });
        

