const buttons = Array.from(document.querySelectorAll('.button'))
const audios = Array.from(document.querySelectorAll('.audio'))

document.addEventListener('keydown', function(e) {
  buttons.forEach(function(button) {
    if(parseInt(button.getAttribute('data-key')) === e.keyCode) button.classList.add('active')
    setTimeout(() => button.classList.remove('active'), 100)
  })

  audios.forEach(function dream(audio) {
    if(parseInt(audio.getAttribute('data-key')) === e.keyCode) {
      audio.currentTime = 0
      audio.play()
    }
  })
})