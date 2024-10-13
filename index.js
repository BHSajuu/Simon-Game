let body = document.querySelector("body");
let gameSeq = [];
let userSeq = [];
let btns = ["box1", "box2", "box3", "box4"];
let h3 = document.querySelector("h3");
let level = 0;
let start = false;
let HighestScore = 0;

let stBtn = document.querySelector(".start-btn");
stBtn.addEventListener("click", function () {
  if (start == false) {
    start = true;
    levelup();
  }
});

function levelup() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randomBox = btns[randIdx]; // randomly generated box
  let randomBtn = document.querySelector(`.${randomBox}`);
  console.dir(randomBtn);
  BtnFlash(randomBtn);
  gameSeq.push(randomBox);
}

function BtnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

let boxs = document.querySelectorAll(".box");

function btnPrtessed() {
  console.log("button is pressed");
  let btn = this;
  BtnFlash(btn);
  userSeq.push(btn.getAttribute("id"));
  Matching(userSeq.length - 1);
}
for (box of boxs) {
  box.addEventListener("click", btnPrtessed);
}

function Matching(Idx) {
  if (userSeq[Idx] === gameSeq[Idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelup, 1050);
    }
  } else {
    HighestScore = Math.max(HighestScore, level - 1);
    h3.innerHTML = `Game Over !! your score is = <b>${
      level - 1
    }</b> <br> Highest Score = <b>${HighestScore}</b>`;
    body.classList.add("body_class");
    setTimeout(function () {
      body.classList.remove("body_class");
    }, 1050);
    Reset();
  }
}
function Reset() {
  start = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
  let h2 = document.createElement("h2");
  h2.innerText = "Press any key to start again. ";
  h3.append(h2);
}
