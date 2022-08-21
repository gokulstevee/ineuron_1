const prompt = require("prompt-sync")();

function Factorial() {
  const num = prompt("Enter a Number...");
  let Factnum = 1;
  if (num <= 0) {
    console.log("Give a proper number");
  }
  for (i = 1; i <= num; i++) {
    Factnum = Factnum * i;
  }
  return Factnum;
}

console.log(Factorial());
