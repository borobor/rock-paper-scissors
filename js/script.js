//prompt user to enter it's choice
let userChoice = prompt('Choose rock, paper or scissors:', 'rock');

//function that randomly chooses rock/paper/scissors
function compChoice() {
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
