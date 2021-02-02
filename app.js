var min = 0;
var sec = 0;
var mili = 0;
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("miliSec");
var interval;
function timer() {
      mili++;
      msecHeading.innerHTML = mili;
      if (mili == 100) {
            sec++;
            secHeading.innerHTML = sec;
            mili = 0;
      } else if (sec == 60) {
            min++;
            minHeading.innerHTML = min;
            sec = 0;
      }
}
function start() {
      interval = setInterval(timer, 10);
      document.getElementById("startHide").style.display="none";
}
function stop() {
      clearInterval(interval);
      document.getElementById("startHide").style.display="inline";
}
function restore() {
      min = 0;
      sec = 0;
      mili = 0;
      minHeading.innerHTML = min;
      secHeading.innerHTML = sec;
      msecHeading.innerHTML = mili;
      stop();
}