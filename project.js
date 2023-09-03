// stopwatch js

window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var butttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");
    var Interval;

    buttonStart.onclick = function (){ 
        Interval = setInterval(startTimer,10);
    }

    butttonStop.onclick = function (){
        clearInterval(Interval);
    }

    buttonReset.onclick = function (){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }


    function startTimer(){
        tens++;

        if(tens <= 9){
          appendTens.innerHTML = "0" + tens;
          console.log(tens + "One");
        }

        if(tens > 9){
            appendTens.innerHTML = "0" + tens;
            console.log(tens + "Two");
        }
 
        if(tens > 99){
            console.log(tens + "Three");

            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0

        }

        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
            console.log(tens + "Four");
        }


    }
}