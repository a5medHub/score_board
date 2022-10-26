let homescore = document.getElementById("home-score");
let guestscore = document.getElementById("guest-score");
let home = document.getElementById("home");
let guest = document.getElementById("guest");
let diferscore = document.getElementById("difer-score");

let homeCount1 = 0;
let homeCount2 = 0;
let homeCount3 = 0;

let guestCount1 = 0;
let guestCount2 = 0;
let guestCount3 = 0;

function homeScoreButtons1() {
  homeCount1 = Number(homescore.innerText);
  homeCount1 += 1;
  homescore.innerText = homeCount1;
  setWinnerColor();
  diferentBetweenScores();
  //console.log(homescore);
}
function homeScoreButtons2() {
  homeCount2 = Number(homescore.innerText);
  homeCount2 += 2;
  homescore.innerText = homeCount2;
  setWinnerColor();
  diferentBetweenScores();
  //console.log(homescore);
}
function homeScoreButtons3() {
  homeCount3 = Number(homescore.innerText);
  homeCount3 += 3;
  homescore.innerText = homeCount3;
  setWinnerColor();
  diferentBetweenScores();
  //console.log(homescore);
}

function guestScoreButtons1() {
  guestCount1 = Number(guestscore.innerText);
  guestCount1 += 1;
  guestscore.innerText = guestCount1;
  setWinnerColor();
  diferentBetweenScores();
  //console.log(guestscore);
}
function guestScoreButtons2() {
  guestCount2 = Number(guestscore.innerText);
  guestCount2 += 2;
  guestscore.innerText = guestCount2;
  setWinnerColor();
  diferentBetweenScores();
  //console.log(guestscore);
}
function guestScoreButtons3() {
  guestCount3 = Number(guestscore.innerText);
  guestCount3 += 3;
  guestscore.innerText = guestCount3;
  setWinnerColor();
  diferentBetweenScores();
  //console.log(guestscore);
}

function setWinnerColor() {
  console.log(Number(homescore.innerHTML));
  console.log(Number(guestscore.innerHTML));
  if (Number(homescore.innerHTML) > Number(guestscore.innerHTML)) {
    document.getElementById("home").style.backgroundColor = "red";
    document.getElementById("guest").style.backgroundColor = "#1b244a";
    //home.style.backgroundColor = "red";
  } else if (Number(homescore.innerHTML) < Number(guestscore.innerHTML)) {
    document.getElementById("guest").style.backgroundColor = "red";
    document.getElementById("home").style.backgroundColor = "#1b244a";
    //guest.style.backgroundColor = "red";
  } else {
    document.getElementById("guest").style.backgroundColor = "#1b244a";
    document.getElementById("home").style.backgroundColor = "#1b244a";
  }
}

function buttonReset() {
  homescore.innerText = "0";
  guestscore.innerText = "0";
  (homeCount1 = 0), (homeCount2 = 0), (homeCount3 = 0);
  (guestCount1 = 0), (guestCount2 = 0), (guestCount3 = 0);
  setWinnerColor();
}

function diferentBetweenScores() {
  if (Number(homescore.innerHTML) > Number(guestscore.innerHTML)) {
    diferscore.innerText =
      "the deference is:\n" +
      Number(homescore.innerHTML) -
      Number(guestscore.innerHTML);
  } else if (Number(homescore.innerHTML) < Number(guestscore.innerHTML)) {
    diferscore.innerText =
      "the deference is:\n" +
      Number(guestscore.innerHTML) -
      Number(homescore.innerHTML);
  } else {
    diferscore.innerText = "the deference is:\n" + "0";
  }
}
