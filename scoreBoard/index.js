let countHome = document.getElementById("count-home");
let countGuest = document.getElementById("count-guest");

let homeScore = 0;
let guestScore = 0;

function add1ToHome() {
  homeScore += 1;
  countHome.textContent = homeScore;
}

function add2ToHome() {
  homeScore += 2;
  countHome.textContent = homeScore;
}

function add3ToHome() {
  homeScore += 3;
  countHome.textContent = homeScore;
}

function add1ToGuest() {
  guestScore += 1;
  countGuest.textContent = guestScore;
}

function add2ToGuest() {
  guestScore += 2;
  countGuest.textContent = guestScore;
}

function add3ToGuest() {
  guestScore += 3;
  countGuest.textContent = guestScore;
}

function resetScores() {
  homeScore = 0;
  guestScore = 0;
  countHome.textContent = homeScore;
  countGuest.textContent = guestScore;
}
