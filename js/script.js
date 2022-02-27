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

function PlayRound() {
  let compChoice = compPlay();
	let userChoice = this.id;
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${compChoice}`);
  if (userChoice == compChoice) {
    console.log("It's a tie!");
  }
  else if (userChoice == "rock") {
    if (compChoice == "paper") {
      compScore++;
      console.log("You lose! Paper beats rock!");
    } else { userScore++;
    console.log("You win! Rock beats scissors!");
		}
  } 
	else if (userChoice == "paper") {
    if (compChoice == "rock") {
      userScore++;
      console.log("You win! Paper beats rock!");
    } else { compScore++;
    console.log("You lose! Scissors beat paper!");
		}
  } 
	else {
  	if (compChoice == "rock") {
    	compScore++;
    	console.log("You lose! Rock beats scissors!");
  	} else { userScore++;
  	console.log("You win! Scissors beat paper!");
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
