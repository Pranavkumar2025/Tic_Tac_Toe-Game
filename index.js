let reSet = document.getElementById("reset");
var mybtn = document.getElementsByClassName("mybtn");
let winnerTxt = document.getElementById("winnerTxt");
let start = document.getElementById("start");

const winPattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
var myclick = "O";


const resetgame = ()=>{
    myclick = "O";
    enableBox();
}

for (var i = 0; i < mybtn.length; i++) {
  mybtn[i].addEventListener("click", (event) => {
    var clickedButton = event.target; //useful when you have multiple elements with the same event listener

    if (myclick == "O") {
      clickedButton.innerText = "X";
      console.log(myclick);
      myclick = "X";
    } else {
      clickedButton.innerText = "O";
      console.log(myclick);
      myclick = "O";
    }
    clickedButton.disabled = true;

    checkWinner();
  });
}
const disableBox = ()=>{
    for(let box of mybtn){
        box.disabled = true;
    }
}
const enableBox = ()=>{
    for(let box of mybtn){
        box.disabled = false;
        box.innerText = "";
        winnerTxt.innerText = `Winner is: `;
    }
}

const showWinner  = (winner)=>{
    winnerTxt.innerText = `Winner is: 🥇${winner}🥇`;


}
const checkWinner = () => {
    for(let pattern of winPattern){
        let pos1val = mybtn[pattern[0]].innerText;
        let pos2val = mybtn[pattern[1]].innerText;
        let pos3val = mybtn[pattern[2]].innerText;
        // console.log(pos1val);
        if(pos1val != "" && pos2val != "" && pos3val != ""){
            if(pos1val === pos2val && pos2val === pos3val){
                showWinner(pos1val);
                disableBox();
            }
        }
    }
};

start.addEventListener('click',resetgame);
reSet.addEventListener('click',resetgame);
