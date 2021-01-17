const startCountDownTimer = function(minutes, message) {
  setTimeout(`window.alert(${message});`, minutes * 60 * 1000);
};

const startCountDownTimer = function(minutes, message) {
  setTimeout(function() {
    alert(message);
  }, minutes * 60 * 1000);
};
  