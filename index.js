let homescore = document.getElementById("home-score");
let guestbox = document.getElementById("guest-box");

let homeCount1 = 0;
let homeCount2 = 0;
let homeCount3 = 0;

let guestCount1 = 0;
let guestCount2 = 0;
let guestCount3 = 0;

function homeScoreButtons1() {
  let homeCount1 = Number(homescore.innerText);
  homeCount1 += 1;
  homescore.innerText = homeCount1;
  console.log(homescore);
}
function homeScoreButtons2() {
  let homeCount2 = Number(homescore.innerText);
  homeCount2 += 2;
  homescore.innerText = homeCount2;
  console.log(homescore);
}
function homeScoreButtons3() {
  let homeCount3 = Number(homescore.innerText);
  homeCount3 += 2;
  homescore.innerText = homeCount3;
  console.log(homescore);
}
