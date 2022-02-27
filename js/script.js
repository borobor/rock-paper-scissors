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
choices.style.cssText = "font-size: 30px";
let results = document.createElement("p");
results.style.cssText = "font-size: 40px";
let div = document.querySelector("#results");
div.appendChild(choices);
div.appendChild(results);

function PlayRound(event) {
  let compChoice = compPlay();
  let userChoice = event.target.id;
  choices.innerText = `Your choice: ${userChoice}\n Computer choice: ${compChoice}\n`;
  if (userChoice == compChoice) {
    results.innerText = "🏳️ It's a tie! 🏳️";
    roundCount--;
  } else if (userChoice == "rock") {
    if (compChoice == "paper") {
      compScore++;
      results.innerText = "❌ You lose! Paper beats rock! ❌";
    } else {
      userScore++;
      results.innerText = "👌 You win! Rock beats scissors! 👌";
    }
  } else if (userChoice == "paper") {
    if (compChoice == "rock") {
      userScore++;
      results.innerText = "👌 You win! Paper beats rock! 👌";
    } else {
      compScore++;
      results.innerText = "❌ You lose! Scissors beat paper! ❌";
    }
  } else {
    if (compChoice == "rock") {
      compScore++;
      results.innerText = "❌ You lose! Rock beats scissors! ❌";
    } else {
      userScore++;
      results.innerText = "👌 You win! Scissors beat paper! 👌";
    }
  }
}

let endResult = document.createElement("p");
endResult.style.cssText = "font-size: 40px";
div.appendChild(endResult);

let score = document.createElement("p");
div.appendChild(score);
let roundCount = 0;

function theGame() {
  PlayRound(event);
  roundCount++;
  if (roundCount <= 5) {
    score.innerText = `---- ROUND ${roundCount} ----\n`;
    score.innerText += `Man vs. Machine: ${userScore} - ${compScore}`;
  }
  if (roundCount == 5) {
		if (userScore == compScore) {
			endResult.innerText += "\nThis one was tight! It's a tie";
    } else {
			userScore > compScore
			? (endResult.innerText += "\nYou won 😀")
			: (endResult.innerText += "\nYou lost 😭");
    }
		score.innerText = "---- FINAL SCORE ----\n";
		score.innerText += `Man vs. Machine: ${userScore} - ${compScore}`;
		choices.innerText = '';
		results.innerText = '';
    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Start over!";
    resetBtn.style.cssText =
      "height: 50px; width: 200px; background-color: green";
    div.appendChild(resetBtn);
    resetBtn.addEventListener("click", resetGame);
    buttons.forEach((button) => (button.disabled = true));
  }
}

function resetGame() {
  roundCount = 0;
  userScore = 0;
  compScore = 0;
  score.innerText = "";
  endResult.innerText = "";
  buttons.forEach((button) => (button.disabled = false));
  div.removeChild(this);
}

const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", theGame);
});
