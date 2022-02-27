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

let choices = document.createElement('p');
let results = document.createElement('p');
let div = document.querySelector('#results');
div.appendChild(choices);
div.appendChild(results);

function PlayRound() {
  let compChoice = compPlay();
	let userChoice = this.id;
  choices.innerText = `User choice: ${userChoice}\n Computer choice: ${compChoice}\n`;
  if (userChoice == compChoice) {
    results.innerText = "It's a tie!";
  }
  else if (userChoice == "rock") {
    if (compChoice == "paper") {
      compScore++;
      results.innerText ="You lose! Paper beats rock!";
    } else { userScore++;
    results.innerText = "You win! Rock beats scissors!";
		}
  } 
	else if (userChoice == "paper") {
    if (compChoice == "rock") {
      userScore++;
      results.innerText = "You win! Paper beats rock!";
    } else { compScore++;
    results.innerText = "You lose! Scissors beat paper!";
		}
  } 
	else {
  	if (compChoice == "rock") {
    	compScore++;
    	results.innerText = "You lose! Rock beats scissors!";
  	} else { userScore++;
  	results.innerText = "You win! Scissors beat paper!";
		}
	}
}

function theGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`----ROUND ${i}----`);
    PlayRound();
    console.log(`Man vs. Machine: ${userScore} - ${compScore}`);
  }
  if (userScore == compScore) {
		console.log("This one was tight! It's a tie");
	}
	else {
		(userScore > compScore) ?
			console.log("You won!!") :
			console.log("You lost :(");
	}
}

buttons = document.querySelectorAll('button');

buttons.forEach(button => {
	button.addEventListener('click', PlayRound);
})
