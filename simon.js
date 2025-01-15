let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");
let allBtns = document.querySelectorAll(".btn");
let gameSeq = [];
let userSeq = [];
let max=0;
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
  }
  levelUp();
});

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;
  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randBtn);
}

function gameFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 200);
}


for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function btnPress() {
  let btn = this;
  userFlash(btn);
  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 200);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) 
  {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } 
  else {
    let score=level-1;
    if(score>max && max>=0){
      max=score;
    }
    h2.innerHTML = `GAME OVER!Your Score Is <b>${level - 1}</b> <br>Press Any Key To Start...`;
    h3.innerHTML = `<b>Max Score:${max}</b>`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 150);
    reset();
  }
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}


