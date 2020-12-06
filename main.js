var timer = document.getElementById('time-container');
var startBtn = document.getElementById('start')
var stopBtn = document.getElementById('stop-button')
var resetBtn = document.getElementById('reset')

var watch = new Stopwatch(timer);

startBtn.addEventListener('click', function() {
    if (watch.isOn) {
        watch.stop();
    } else {
        watch.start();
    }
});

resetBtn.addEventListener('click', function(){
    watch.reset();
});

//note for next session : textContent is null ???????