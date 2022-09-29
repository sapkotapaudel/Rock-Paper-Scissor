const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
const mainBody = document.getElementById('gameORResult')
const currentCompScore = document.getElementById('currentCompScore')
const currentYourScore = document.getElementById('currentYourScore')
const movesLeft = document.getElementById('movesLeft')
const finalScoreDisplay = document.getElementById('finalScore')
const reloadBtn = document.getElementById('reloadBtn')
const resultDesign = document.getElementById('resultDesign')
let userDisplay;
let computerPick;
let foundResult;
let computerScore =0;
let userScore =0;
let finalScore=0;
let count = 0;

// if (possibleChoices.length < 5){
possibleChoices.forEach((possibleChoices) => {
  possibleChoices.addEventListener("click", (e) => {
    if (count >= 9) {
      mainBody.innerHTML = "GAME OVER!!"
      mainBody.style.fontSize="25px";
      mainBody.style.color = "black";
      mainBody.style.marginTop="50px"

      if(computerScore==userScore){
        finalScoreDisplay.innerHTML = "It's a tie!"
      }

      if (computerScore>userScore){
        finalScoreDisplay.innerHTML = "Computer Won!"
      }
      else{
        finalScoreDisplay.innerHTML = "You Won!"
      }

      finalScoreDisplay.style.fontWeight = "bolder"
      finalScoreDisplay.style.fontSize = "90px"
      finalScoreDisplay.style.textAlign = "center"
      finalScoreDisplay.style.textDecoration = "underline"
      finalScoreDisplay.style.color="grey"
      finalScoreDisplay.style.fontStyle = "italic"
      finalScoreDisplay.style.marginTop="20px"

      let needed = document.createElement('button')
      needed.innerHTML = "Reload"
      reloadBtn.appendChild(needed)

      needed.style.position="absolute"
      needed.style.left="45%"
      needed.style.marginTop = "15px"
      needed.style.padding="auto 20px auto 20px"

      needed.addEventListener('click',() => {
        window.location.reload();
    })
  
    }
  
    userDisplay = e.target.id;
    userChoiceDisplay.innerHTML = userDisplay;
    generateDisplay();
    result();
    currentCompScore.innerHTML = computerScore
    currentYourScore.innerHTML = userScore
    currentCompScore.style.fontWeight="bolder"
    currentYourScore.style.fontWeight="bolder"
    count = count + 1;
    movesLeft.innerHTML = 10-count
    
  });
});

function generateDisplay() {
  computerPick = Math.floor(Math.random() * 3) + 1;

  if (computerPick == 1) {
    computerPick = "Rock";
  }

  if (computerPick == 2) {
    computerPick = "Paper";
  }

  if (computerPick == 3) {
    computerPick = "Scissor";
  }

  computerChoiceDisplay.innerHTML = computerPick;
}

function result() {
  if (computerPick === userDisplay) {
    foundResult = "It's a tie!";
    resultDesign.style.backgroundColor="grey"
    
  }

  if (
    (computerPick === "Rock" && userDisplay === "Scissor") ||
    (computerPick === "Scissor" && userDisplay === "Paper") ||
    (computerPick === "Paper" && userDisplay === "Rock")
  ) {
    foundResult = "Sorry! You lost!";
    resultDesign.style.backgroundColor="rgba(255, 0, 0, 0.623)"
    computerScore++

  }

  if (
    (userDisplay === "Rock" && computerPick === "Scissor") ||
    (userDisplay === "Scissor" && computerPick === "Paper") ||
    (userDisplay === "Paper" && computerPick === "Rock")
  ) {
    foundResult = "Wow! You won!";
    resultDesign.style.backgroundColor="yellow"
    userScore++
  }

  resultDisplay.innerHTML = foundResult;
}
