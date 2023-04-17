let numCookie = 0;
let cookieAmount = document.getElementById("cookie-amount");
let cookieClick = 1;
let buy1Cost = 10;
let buy1Amt = 0;
let buy1CPS = buy1Amt * 0.1;
let buy1CostAmount = document.getElementById("buy1-cost");
let buy2Cost = 100;
let buy2Amt = 0;
let buy2CPS = buy2Amt * 1;
let buy2CostAmount = document.getElementById("buy2-cost");
let upg1Cost = 100;
let upg1Amt = 0;
let upg1Mult = 1;
let upg1CostAmount = document.getElementById("upg1-cost");
let cps = buy1CPS;

document.getElementById("btn").addEventListener("click", btnClicked);
document.getElementById("buy1").addEventListener("click", buy1Clicked);
document.getElementById("buy2").addEventListener("click", buy2Clicked);
document.getElementById("upg1").addEventListener("click", upg1Clicked);

function update() {
  cookieAmount.innerHTML = numCookie.toFixed(1);
  document.title = numCookie.toFixed(1) + " Cookies";
  cps = buy1CPS * upg1Mult + buy2CPS;
  document.getElementById("cookies-per-sec").innerHTML = cps.toFixed(1);
}

function timer() {
  numCookie = numCookie + buy1CPS * upg1Mult;
  numCookie = numCookie + buy2CPS;
  update();
}

setInterval(timer, 1000);

function btnClicked() {
  numCookie += cookieClick;
  console.log(numCookie);
  update();
}

function buy1Clicked() {
  if (numCookie >= buy1Cost) {
    buy1Amt += 1;
    numCookie -= buy1Cost;
    buy1Cost *= 1.3;
    buy1Cost = Math.round(buy1Cost);
    buy1CostAmount.innerHTML = buy1Cost;
    buy1CPS = buy1Amt * 0.1;
    update();
  }
}

function buy2Clicked() {
  if (numCookie >= buy2Cost) {
    buy2Amt += 1;
    numCookie -= buy2Cost;
    buy2Cost *= 1.3;
    buy2Cost = Math.round(buy2Cost);
    buy2CostAmount.innerHTML = buy2Cost;
    buy2CPS = buy2Amt * 1;
    update();
  }
}

function upg1Clicked() {
  if (numCookie >= upg1Cost) {
    upg1Amt += 1;
    numCookie -= upg1Cost;
    upg1Cost *= 5;
    upg1Cost = Math.round(upg1Cost);
    upg1CostAmount.innerHTML = upg1Cost;
    upg1Mult *= 2;
    update();
  }
}
