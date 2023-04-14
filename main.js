let numCookie = 1000;
let cookieAmount = document.getElementById("cookie-amount");
let cookieClick = 1;
let cps = 0;
let upg1Cost = 100;
let upg1CPS = 0.1;
let upg1CostAmount = document.getElementById("upg1-cost");

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("upg1").addEventListener("click", upg1Clicked);

function update() {
  cookieAmount.innerHTML = numCookie.toFixed(1);
  document.title = numCookie.toFixed(1) + " Cookies";
  document.getElementById("cookies-per-sec").innerHTML = cps.toFixed(1);
}

function timer() {
  numCookie += cps;
  update();
}

setInterval(timer, 1000);

function btnClicked() {
  numCookie += cookieClick;
  console.log(numCookie);
  update();
}

function upg1Clicked() {
  if (numCookie >= upg1Cost) {
    numCookie -= upg1Cost;
    upg1Cost *= 1.3;
    upg1Cost = Math.round(upg1Cost);
    upg1CostAmount.innerHTML = upg1Cost;
    cps += upg1CPS;
    update();
  }
}