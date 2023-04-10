const startButton = document.getElementsByTagName('button')[0];
const stopButton = document.getElementsByTagName('button')[1];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

let intervalID;

startButton.addEventListener('click', startButtonFunc);
function startButtonFunc() {
  intervalID = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
  startButton.disabled = true;
}

stopButton.addEventListener('click', stopButtonFunc);
function stopButtonFunc() {
  clearInterval(intervalID);
  startButton.disabled = false;
}
