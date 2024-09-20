const playerOneScore = Math.floor((Math.random()*5) + 1); // 1-6
const playerTwoScore = Math.floor((Math.random()*5) + 1); // 1-6
const oneBox = document.querySelectorAll("#die1>*");
const twoBox = document.querySelectorAll("#die2>*");

const one = [4];
const two = [1,7];
const three = [1,4,7];
const four = [0,2,6,8];
const five = [0,2,4,6,8];
const six = [0,2,3,5,6,8];

