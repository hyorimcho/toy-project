const gameTime = 9;
let score = 0;
let time = gameTime;
let isPlaying = false;
let timeInterval;
let words = [];
let checkInterval;
const wordInput = document.querySelector(".word-input");
const wordDisplay = document.querySelector(".word-display");
const scoreDisplay = document.querySelector(".score");
const timeDisplay = document.querySelector(".time");
const button = document.querySelector(".button");

init();

function init() {
  getWords();
  wordInput.addEventListener("input", checkMatch);
}

//게임 실행
function run() {
  if (isPlaying) {
    return;
  }
  isPlaying = true;
  time = gameTime;
  wordInput.focus();
  scoreDisplay.innerText = 0;
  timeInterval = setInterval(countDown, 1000);
  checkInterval = setInterval(checkStatus, 50);
  buttonChange("게임이 진행중이에요🙄");
}

function checkStatus() {
  if (!isPlaying && time === 0) {
    buttonChange("누르면 시작되어요😏");
    clearInterval(checkInterval);
  }
}

//단어불러오기
function getWords() {
  words = [
    "yujiseok",
    "seokji",
    "koesijuy",
    "hyocho",
    "yogihyo",
    "hyorimm",
    "daebake",
    "annyeong",
  ];
  buttonChange("게임을 시작해볼게요?☺");
}

//단어 일치 체크
function checkMatch() {
  if (wordInput.value.toLowerCase() === wordDisplay.innerText.toLowerCase()) {
    wordInput.value = "";
    if (!isPlaying) {
      return;
    }
    score++;
    scoreDisplay.innerText = score;
    time = gameTime;
    const randomIndex = Math.floor(Math.random() * words.length);
    wordDisplay.innerText = words[randomIndex];
  }
}

function countDown() {
  time > 0 ? time-- : (isPlaying = false);
  if (!isPlaying) {
    clearInterval(timeInterval);
  }
  timeDisplay.innerText = time;
}

buttonChange("누르면 시작되어요😏");

function buttonChange(text) {
  button.innerText = text;
  text === "누르면 시작되어요😏"
    ? button.classList.remove("loading")
    : button.classList.add("loading");
}
