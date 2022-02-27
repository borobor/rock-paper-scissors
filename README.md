# v1 (February 10th, 2022)
v1 of my 'Rock, Paper or Scissors' game!
Overall, not bad. I'm happy with the work I've done and the code works as intended with no hiccups.
Apart from UI, which will hopefully be sorted out soon enough, I would like to further improve this code by not counting rounds that resulted with a tie in overall round count.
This code currently increments round counter regardless of the outcome. 

# v2 (February 27th, 2022)
v2 of 'Rock, Paper or Scissors' features a brand new UI with improved functions (on February 27th, 2022).
The game now doesn't count rounds that resulted in a tie in overall round count, and it provides an option to reset the game!
This was quite fun. I can say that I had to use almost all of my knowledge that I gathered in the last couple of weeks.

Possible further improvements:
Adding some crazier styling ofcourse, emojis can only go so far.. I will look into more advanced effects available when displaying round results.
Also, I had _trouble_ with the deprecated use of event.target:
```
function PlayRound(event) {
  let compChoice = compPlay();
  let userChoice = event.target.id;
```
This piece of code simply assigns the button's id (3 buttons to choose from have ID's "rock", "paper" and "scissors") that you click to userChoice variable.
Here it's all good, but a bit further down (at line 65) the event is striked out and says it's deprecated:
```
function theGame() {
  PlayRound(event);
```
I'll have to find out more about the deprecated use of _event_ but the code works as is without any issues! That should be good, right?
