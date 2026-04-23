// DOM elements
const hoursSpan = document.getElementById("hours");
const minutesSpan = document.getElementById("minutes");
const ampmSpan = document.getElementById("ampm");
const dateSpan = document.getElementById("date");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const fsText = document.getElementById("fsText");

const pad = (num) => (num < 10 ? "0" + num : num);

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? "PM" : "AM";
  let displayHours = hours % 12;
  displayHours = displayHours === 0 ? 12 : displayHours;

  hoursSpan.textContent = pad(displayHours);
  minutesSpan.textContent = pad(minutes);
  ampmSpan.textContent = ampm;
}

function updateDate() {
  const now = new Date();
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  dateSpan.textContent = now.toLocaleDateString(undefined, options);
}

function toggleFullscreen() {
  if (!document.fullscreenElement) {
    document.documentElement
      .requestFullscreen()
      .catch((err) => console.warn(err));
    fsText.textContent = "Exit";
  } else {
    document.exitFullscreen();
    fsText.textContent = "Fullscreen";
  }
}

function onFullscreenChange() {
  fsText.textContent = document.fullscreenElement ? "Exit" : "Fullscreen";
}

// Start
updateClock();
updateDate();
setInterval(updateClock, 1000);
setInterval(updateDate, 60000);

fullscreenBtn.addEventListener("click", toggleFullscreen);
document.addEventListener("fullscreenchange", onFullscreenChange);
