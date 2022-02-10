//set user and computer score to 0 to keep track of scores while playing 5 rounds
let userScore = 0;
let compScore = 0;

//function that randomly chooses rock/paper/scissors for computer
function compPlay() {
  //randomly generates number 0, 1 or 2 and returns result as rock, paper or scissors
  let randChoice = Math.floor(Math.random() * 3);
  if (randChoice == 0) {
    return "rock";
  } else if (randChoice == 1) {
    return "paper";
  } else return "scissors";
}

//write game rules
function PlayRound() {
  //execute function compPlay and store the result in compChoice
  let compChoice = compPlay();
  //prompt user to enter it's choice; change to lowerCase so it won't be case sensitive
  let userChoice = prompt(
    "Choose rock, paper or scissors:",
    "rock"
  ).toLowerCase();
  console.log(`User choice: ${userChoice}`);
  console.log(`Computer choice: ${compChoice}`);
  //check for a tie first because other 3 conditions will always have one that is true and the function then stops
  //(functions ALWAYS return the FIRST 'true' result, if none is 'true' it returns the last choice)
  if (userChoice == compChoice) {
    console.log("It's a tie!");
  }
  //with a tie out of the way, if a user chooses 'rock' there are two scenarios: compChoice is paper or scissors (else -> scissors)
  else if (userChoice == "rock") {
    if (compChoice == "paper") {
      compScore++;
      console.log("You lose! Paper beats rock!");
    } else { userScore++;
    console.log("You win! Rock beats scissors!");
		}
  } 
	//likewise for use choice of 'paper'
	else if (userChoice == "paper") {
    if (compChoice == "rock") {
      userScore++;
      console.log("You win! Paper beats rock!");
    } else { compScore++;
    console.log("You lose! Scissors beat paper!");
		}
  } 
	//and lastly if user chooses 'scissors'
	else {
  	if (compChoice == "rock") {
    	compScore++;
    	console.log("You lose! Rock beats scissors!");
  	} else { userScore++;
  	console.log("You win! Scissors beat paper!");
		}
	}
}

//enable playing 5 rounds, while keeping score of man vs. machine (above)
//also added incrementation to userScore and compScore in PlayRound()
function theGame() {
  //use for loop to play 5 rounds
  for (let i = 1; i <= 5; i++) {
    console.log(`----ROUND ${i}----`);
    //invoke/call PlayRound function from above
    PlayRound();
    //display current score in console
    console.log(`Man vs. Machine: ${userScore} - ${compScore}`);
  }
  //when the game finishes after 5 rounds, display winner
  if (userScore == compScore) {
		console.log("This one was tight! It's a tie");
	}
	else {
		(userScore > compScore) ?
			console.log("You won!!") :
			console.log("You lost :(");
	}
}

theGame();
