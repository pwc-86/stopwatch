let seconds = 00;
let ms = 00;
let OutputSeconds = document.getElementById("second");
let OutputMs = document.getElementById("ms");
let buttonStart = document.getElementById("btn-start");
let buttonStop = document.getElementById("btn-stop");
let buttonReset = document.getElementById("btn-reset");
let Interval;

//this is an arrow function that executes when the button is clicked, it clears the interval and then sets the built in function in js "setInterval"  which is commonly used to set a small delay, this means Interval is now a variable that executes the function we made "startTimer" every 10 milliseconds"
buttonStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
});

//this arrow function also executes after the "buttonStop" is clicked and only clears the Interval.
buttonStop.addEventListener('click', () => {
  clearInterval(Interval);
});
//this function first clears the interval and then sets the string "00" to be equal to the variable tens and seconds. And then changes the "outputSeconds" which is the class seconds in html to "seconds"/00 and same thing to the variable output tens 
buttonReset.addEventListener('click', () => {
  clearInterval(Interval);
  ms = "00";
  seconds = "00";
  OutputSeconds.innerHTML = seconds;
  OutputMs.innerHTML = ms;
});

//this is the function that takes the variable tens and adds 1 to it, then keeps increasing, if tens are less than or equal to 9 then the OutPutTens keep on increasing. When they reach more than 9 the output will be equal to the variable tes until it reaches more than 99 then seconds will increase by 1 and the seconds increase the same way the tens increased in the first if statement. Finally tens go back to 0 and if seconds reach more than 9 then the inner text in html changes to the variable seconds. Reminder: this function does this every 10 milliseconds
function startTimer() {
  ms++;
  if (ms <= 9) {
    OutputMs.innerHTML = "0" + ms;
  }

  if (ms > 9) {
    OutputMs.innerHTML = ms;
  }
  if (ms > 99) {
    seconds++;
    OutputSeconds.innerHTML = "0" + seconds;
    ms = 0;
    OutputMs.innerHTML = "0" + ms;
  }

  if (seconds > 9) {
    OutputSeconds.innerHTML = seconds;
  }
};

