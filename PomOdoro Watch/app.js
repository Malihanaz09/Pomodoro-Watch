let min = 25;
let sec = 0;
let interval;
let minHeading = document.getElementById("min");
let secHeading = document.getElementById("sec");
console.log(minHeading)
 
function Timer(){
    if(sec === 0){
        sec =59
        if(min !==0){
            min--
        }
        // minHeading.innerHTML = min
    }else{
        sec--
    }
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min
   
}

function startTimer(){
interval = setInterval(Timer,1000)
}

function stopTimer(){
    clearInterval(interval)
}

function reset(){
    sec = 0;
    min = 25;
    secHeading = sec;
    minHeading = min;
}