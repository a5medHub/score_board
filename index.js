let homescore = document.getElementById("home-score");
let guestscore = document.getElementById("guest-score");
let home = document.getElementById("home");
let guest = document.getElementById("guest");

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
  //console.log(homescore);
}
function homeScoreButtons2() {
  homeCount2 = Number(homescore.innerText);
  homeCount2 += 2;
  homescore.innerText = homeCount2;
  setWinnerColor();
  //console.log(homescore);
}
function homeScoreButtons3() {
  homeCount3 = Number(homescore.innerText);
  homeCount3 += 3;
  homescore.innerText = homeCount3;
  setWinnerColor();
  //console.log(homescore);
}

function guestScoreButtons1() {
  guestCount1 = Number(guestscore.innerText);
  guestCount1 += 1;
  guestscore.innerText = guestCount1;
  setWinnerColor();
  //console.log(guestscore);
}
function guestScoreButtons2() {
  guestCount2 = Number(guestscore.innerText);
  guestCount2 += 2;
  guestscore.innerText = guestCount2;
  setWinnerColor();
  //console.log(guestscore);
}
function guestScoreButtons3() {
  guestCount3 = Number(guestscore.innerText);
  guestCount3 += 3;
  guestscore.innerText = guestCount3;
  setWinnerColor();
  //console.log(guestscore);
}

function setWinnerColor() {
  console.log(homescore.innerHTML + 5);
  console.log(homescore.innerText + 5);
  console.log(homescore.innerHTML.valueOf(homescore) + 5);
  console.log(Number(homescore.innerHTML) + 5);
  if (homescore.innerHTML > guestscore.innerHTML) {
    document.getElementById("home").style.backgroundColor = "red";
    document.getElementById("guest").style.backgroundColor = "#1b244a";
    //home.style.backgroundColor = "red";
  } else if (homescore.innerHTML < guestscore.innerHTML) {
    document.getElementById("guest").style.backgroundColor = "red";
    document.getElementById("home").style.backgroundColor = "#1b244a";
    //guest.style.backgroundColor = "red";
  } else {
    document.getElementById("guest").style.backgroundColor = "#1b244a";
    document.getElementById("home").style.backgroundColor = "#1b244a";
  }
}
