var video = document.querySelector('.video-player');
video.addEventListener('ended', function() {
  if (video.volume === 0) {
    video.volume = 0.5; // Define o volume para 50%
  }
  video.currentTime = 0;
  video.play();
});