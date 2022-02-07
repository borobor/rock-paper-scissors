//prompt user to enter it's choice; change to lowerCase so it won't be case sensitive
let userChoice = prompt('Choose rock, paper or scissors:', 'rock').toLowerCase();

//function that randomly chooses rock/paper/scissors
function compPlay() {
	//randomly generates number 0, 1 or 2 and returns result as rock, paper or scissors
	let randChoice = Math.floor(Math.random() * 3);
	if (randChoice == 0) {
		return 'rock';
	}
	else if (randChoice == 1) {
		return 'paper';
	}
	else return 'scissors';
}

//execute function compPlay and store the result in compChoice
let compChoice = compPlay();

//write game rules
function PlayRound(userChoice, compChoice) {
	//check for a tie first because other 3 conditions will always have one that is true and the function then stops 
	//(functions ALWAYS return the FIRST 'true' result, if none is 'true' it returns the last choice)
	if (userChoice == compChoice) {
		return "It's a tie!";
	}
	//with a tie out of the way, if a user chooses 'rock' there are two scenarios: compChoice is paper or scissors (else -> scissors)
	else if (userChoice == 'rock') {
		if (compChoice == 'paper') {
			return 'You lose! Paper beats rock!';
		} else return 'You win! Rock beats scissors!';
	}
	else if (userChoice == 'paper') {
		if (compChoice == 'rock') {
			return 'You win! Paper beats rock!';
		} else return 'You lose! Scissors beat paper!'
	}
	else (userChoice == 'scissors')
		if (compChoice == 'rock') {
			return 'You lose! Rock beats scissors!'
		} else return 'You win! Scissors beat paper!'
}

console.log(`User choice: ${userChoice}`);
console.log(`Computer choice: ${compChoice}`);
console.log(PlayRound(userChoice, compChoice));

