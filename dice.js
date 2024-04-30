


function DiceGame(){
let RandomNumber1 =(math.random()*6)+1;
let RandomNumber2 =(math.random()*6)+1;

let player1= parseInt(RandomNumber1);
let player2= parseInt(RandomNumber2);

// console.log(player1);
// console.log(player2);

document.querySelector("#player1").innerHTML= Player1;
document.querySelector("#player2").innerHTML= Player2;

if(player1>player2){
    document.getElementById("result").innerHTML="PLAYER 1 WIN"
}
else if(player2>player1){
    document.getElementById("result").innerHTML=PLAYER 2 WIN
}else{
    document.getElementById("result").innerHTML="PLAYER DRAW"
}
}