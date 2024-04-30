function DiceGame(){
    let RandomNumber1 = (Math.random()*6)+1;
    let RandomNumber2 = (Math.random()*6)+1;

    let player1 = parseInt(RandomNumber1);
    let player2 = parseInt(RandomNumber2);


    // document.querySelector("#player1").innerHTML = player1;
    // document.querySelector("#player2").innerHTML = player2;

    document.querySelector(".img1").src = image/dice${player1} + ".jpg ";

    document.querySelector(".img2").src = image/dice${player2} + ".jpg";
    // document.querySelector(".img1").src = image/dice-${player2} + "png";

    if(player1 > player2){
        document.getElementById("result").innerHTML = "PLAYER 1 WIN";
    }else if(player2 > player1){
        document.getElementById("result").innerHTML = "PLAYER 2 WIN";

    }
    else{
        document.getElementById("result").innerHTML = "PLAYER DRAW";
    }

