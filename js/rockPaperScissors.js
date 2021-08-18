


//-- Get Computer's Choice
function start() {

 
    let choice = prompt("Please pick one! (Rock, Paper or Scissors)");

    let comp = Math.random();
    if (comp <.40 ) {
        comp = "rock";
    }else if (comp >.39 && comp <.7) {
        comp = "paper";
    } else {
        comp = "scissors";
    }

    if ( choice === "rock" && comp === "rock") {
        alert("It's a tie!");
    } else if ( choice === "rock" && comp === "paper") {
        alert("You lose! Computer wins!");
    } else if ( choice === "rock" && comp === "scissors") {
        alert("You win! Computer loses!");
    } else if ( choice === "paper" && comp === "paper") {
        alert("It's a tie!");
    } else if ( choice === "paper" && comp === "rock") {
        alert("You win! Computer loses!");
    } else if ( choice === "paper" && comp === "scissors") {
        alert("You lose! Computer wins!");
    } else if ( choice === "scissors" && comp === "scissors") {
        alert("It's a tie!");
    } else if ( choice === "scissors" && comp === "paper") {
        alert("You win! Computer loses!");
    } else if ( choice === "scissors" && comp === "rock") {
        alert("You lose! Computer wins!");
    } else {
        alert("Please choose one. (rock, paper or scissors)");
        start();
    }


}
start();

    