        const gamespaceWidth = $("#gamespace").width();          
        const gamespaceHeight = $("#gamespace").height();
        let userScore = 0;
        let timerCountdown = 30;
        let x;

        function randomX(){

        
        return Math.floor(Math.random() * (gamespaceWidth - 35));
    }

        function randomY(){
    
            return Math.floor(Math.random() * (gamespaceHeight - 35));
        }

        function randomTime(){
            return Math.floor(Math.random() * 2000);
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
            

            let xPos = randomX();
            let yPos = randomY();

            $("#gamespace").append($("<img>", {
                src: "img/soccerBall.png",
                alt: "picture of a soccer ball",
                class: "soccerBall",
                style: `left: ${xPos}px; top: ${yPos}px; position: absolute;` 
            }));

            if(timerCountdown > 0){
                x = setTimeout(addImage, randomTime());
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
        $(this).off("click");
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
            increaseScore(); 
           
            $(this).remove();
        });

        $("footer").load("load.html");
        });
        

