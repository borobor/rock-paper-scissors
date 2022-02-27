let userScore = 0;
let compScore = 0;

//function that randomly chooses rock/paper/scissors for computer
function compPlay() {
  let randChoice = Math.floor(Math.random() * 3);
  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else return "scissors";
}

let choices = document.createElement("p");
let results = document.createElement("p");
let div = document.querySelector("#results");
div.appendChild(choices);
div.appendChild(results);

function PlayRound(event) {
  let compChoice = compPlay();
  let userChoice = event.target.id;
  choices.innerText = `User choice: ${userChoice}\n Computer choice: ${compChoice}\n`;
  if (userChoice == compChoice) {
    results.innerText = "It's a tie!";
		roundCount--;
  } else if (userChoice == "rock") {
    if (compChoice == "paper") {
      compScore++;
      results.innerText = "You lose! Paper beats rock!";
    } else {
      userScore++;
      results.innerText = "You win! Rock beats scissors!";
    }
  } else if (userChoice == "paper") {
    if (compChoice == "rock") {
      userScore++;
      results.innerText = "You win! Paper beats rock!";
    } else {
      compScore++;
      results.innerText = "You lose! Scissors beat paper!";
    }
  } else {
    if (compChoice == "rock") {
      compScore++;
      results.innerText = "You lose! Rock beats scissors!";
    } else {
      userScore++;
      results.innerText = "You win! Scissors beat paper!";
    }
  }
}

let score = document.createElement("p");
div.appendChild(score);
let endResult = document.createElement("p");
div.appendChild(endResult);
let roundCount = 0;

function theGame() {
  PlayRound(event);
	roundCount++;
	if (roundCount <= 5) {
		score.innerText = `----ROUND ${roundCount}----\n`;
		score.innerText += `Man vs. Machine: ${userScore} - ${compScore}`;
	}
	if (roundCount == 5) {
		if (userScore == compScore) {
			endResult.innerText += "\nThis one was tight! It's a tie";
		} else {
			userScore > compScore
				? (endResult.innerText += "\nYou won!!")
				: (endResult.innerText += "\nYou lost :(");
			}		
	}  
}

buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", theGame);
});
