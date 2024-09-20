const oneBox = document.querySelectorAll("#die1>*");
const twoBox = document.querySelectorAll("#die2>*");
const res = document.querySelector("#result");

// const one = [4];
// const two = [1,7];
// const three = [1,4,7];
// const four = [0,2,6,8];
// const five = [0,2,4,6,8];
// const six = [0,2,3,5,6,8];
const coloring = [[], [4], [1,7], [1,4,7], [0,2,6,8], [0,2,4,6,8], [0,2,3,5,6,8]];
function applyColors(box, arr){
    for(let i = 0; i < 9; i++){
        box[i].style["visibility"] = "visible"; // reset to visible
        if (arr.includes(i)){
            box[i].style["background-color"] = "white";
        }else{
            box[i].style["visibility"] = "hidden";
        }
    }
}


const relbtn = document.querySelector("#relbtn");
relbtn.addEventListener("click", () => {
    relbtn.textContent = "Replay";
    let playerOneScore = Math.floor((Math.random()*6) + 1); // 1-6
    let playerTwoScore = Math.floor((Math.random()*6) + 1); // 1-6
    if(playerOneScore === playerTwoScore){
        res.textContent = "🚩Game Draw: No Winner🚩";
    }else if(playerOneScore > playerTwoScore){
        res.textContent = "🚩 Player 1 Wins";
    }else{
        res.textContent = "Player 2 Wins 🚩";
    }
    applyColors(oneBox, coloring[playerOneScore]);
    applyColors(twoBox, coloring[playerTwoScore]);
})