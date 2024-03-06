const button = document.querySelector("button");

const togglePlay = () => {
  const video = document.querySelector("video");
  // paused = 멈춰있는 상태.
  if (video.paused) {
    button.innerText = "pause";
    video.play();
  } else {
    button.innerText = "Play";
    video.pause(); //pause = 멈추는 역할.
  }
};

button.addEventListener("click", togglePlay);
