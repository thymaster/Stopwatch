let hours = 0;
let minutes = 0;
let seconds = 0;
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;
let startId = null;
let status = "stopped";
// document.getElementById("pause").disabled = true;


function StopWatch () {
  seconds++;
  if(seconds / 60 === 1) {
    seconds = 0;
    minutes++;
    if(minutes / 60 === 1){
      minutes = 0;
      hours++;
    }
  }
  seconds < 10 ? displaySeconds = "0" + seconds.toString() : displaySeconds = seconds; 
  minutes < 10 ? displayMinutes = "0" + minutes.toString() : displayMinutes = minutes; 
  hours < 10 ? displayHours = "0" + hours.toString() : displayHours = hours; 
  document.getElementById('time').innerText = `${displayHours}: ${displayMinutes}: ${displaySeconds}`;
}

function startTimer() {
  if(status === "stopped"){
    startId = window.setInterval(StopWatch, 1000);
    // document.getElementById("start").innerText = "Stop";
    status = "started";
    document.getElementById("timeUpdate").innerText = "Stopwatch is Live!"
        document.getElementById("start").disabled = true;
    document.getElementById("stop").disabled = false;
    document.getElementById("pause").disabled = false;
  }
}

function pauseTimer() {
  if(status === "started"){
    window.clearInterval(startId);
    document.getElementById("pause").innerText = "Continue";
        document.getElementById("timeUpdate").innerText = "Stopwatch is Paused! Click on 'Continue' to Resume";
        status = "stopped";

  }
    else {
    startTimer();
    document.getElementById("pause").innerText = "Pause";
    status = "started";
  }
}

function resetTimer() {
  // if(status === "stopped" || status === "started"){
    window.clearInterval(startId);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("time").innerText = "00: 00: 00";
    document.getElementById("pause").innerText = "Pause";
    document.getElementById("timeUpdate").innerText = "Stopwatch is Reset! Click 'Start' to begin."
    document.getElementById("start").disabled = false;
    document.getElementById("stop").disabled = true;
    document.getElementById("pause").disabled = true;
  // }
}