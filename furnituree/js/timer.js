function startTimer(durationM, displayM, durationS, displayS) {
   var timer = durationM, minutes, durationS, seconds;
   setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      displayM.textContent = minutes;
      displayS.textContent = seconds;

      if (--timer < 0) {
         timer = durationS;
      }
   }, 1000);
}

window.onload = function () {
   var thirtyMinutes = 60 * 30,
      displayMinutes = document.querySelector('#minutes');
   var oneMinutes = 60,
      displaySeconds = document.querySelector('#seconds');
   startTimer(thirtyMinutes, displayMinutes, oneMinutes, displaySeconds);
};

