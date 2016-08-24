/* https://gist.github.com/adhithyan15/4350689 */

window.onload = function () {
  var start = document.getElementById('start')

  start.addEventListener('click', function (event) {
    function countdown (minutes) {
      var seconds = 60
      var mins = minutes

      function tick () {
        var timer = document.getElementById('timer')
        var currentMins = mins - 1
        seconds--
        timer.innerHTML = currentMins.toString() + ':' + (seconds < 10 ? '0' : '') + String(seconds)
        if (seconds >= 0) {
          setTimeout(tick, 1000)
        } else {
          if (mins > 1) {
            countdown(mins - 1)
          } else {
            if (mins == 0 && seconds == 0) {
              timer.innerHTML = 'Play road runner song!'
            }
          }
        }
      }
      tick()
    }
    countdown(1)
  })
  var stop = document.getElementById('stop')
  stop.addEventListener('click', function (event) {
  })
}
