//prompt user to enter it's choice; change to lowerCase so it won't be case sensitive
let userChoice = prompt('Choose rock, paper or scissors:', 'rock').toLowerCase();

	//set user and computer score to 0 to keep track of score while playing 5 rounds
	let userScore = 0;
	let compScore = 0;

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
			compScore++;
			return 'You lose! Paper beats rock!';
		} else 
			userScore++;
			return 'You win! Rock beats scissors!';
	}
	else if (userChoice == 'paper') {
		if (compChoice == 'rock') {
			userScore++;
			return 'You win! Paper beats rock!';
		} else 
			compScore++;
			return 'You lose! Scissors beat paper!'
	}
	else (userChoice == 'scissors')
		if (compChoice == 'rock') {
			compScore++;
			return 'You lose! Rock beats scissors!'
		} else 
			userScore++;
			return 'You win! Scissors beat paper!'
}
console.log(`User choice: ${userChoice}`);
console.log(`Computer choice: ${compChoice}`);
console.log(PlayRound(userChoice, compChoice));

//enable playing 5 rounds, while keeping score of man vs. machine (above)
//also added incrementation to userScore and compScore in PlayRound()
function theGame() {
	//use for loop to play 5 rounds
	for (let i = 0; i<5; i++) {}

}
