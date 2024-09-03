const stopWatch = document.getElementsByClassName('stopWatch')[0];
const startButton = document.getElementsByClassName("startButton")[0];
const pauseButton = document.getElementsByClassName("pauseButton")[0];
const continueButton = document.getElementsByClassName("continueButton")[0];
const restartButton = document.getElementsByClassName("restartButton")[0];

let seconds=0 ,minute = 0, hour =0;

let startTime=()=>{
    seconds += 1;
    if(seconds === 60){
        seconds=0;
        minute += 1;
    }
    if(minute===60){
        minute = 0;
        hour += 1;
    }

    let secondText = seconds<10? "0"+ seconds.toString():seconds;
    let minuteText = minute<10? "0"+ minute.toString():minute;
    let hourText = hour<10? "0"+ hour.toString():hour;

    stopWatch.textContent = hourText +":"+minuteText+":"+secondText
  

    
    
}
let inervalId;
startButton.addEventListener("click",()=>{
 inervalId = setInterval(startTime,1000);
});
 
 

 pauseButton.addEventListener("click",()=>{
    clearInterval(inervalId);


 })

 continueButton.addEventListener("click",()=>{
    clearInterval(inervalId);
    inervalId = setInterval(startTime,1000);

 })

 restartButton.addEventListener("click",()=>{
    clearInterval(inervalId);

    seconds=0, minute=0, hour=0;
    inervalId = setInterval(startTime,1000);

 })