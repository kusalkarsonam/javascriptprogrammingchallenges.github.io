


//challenge 2: Image Generator

function generateImg() {

  var image = document.createElement('img');
  var div = document.getElementById('flex-gen');
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif&size=small";
  div.appendChild(image);

}


//chanllenge 3: Rock, Paper, Scissor
/*
function rpsGame(yourChoice)
{
  console.log(yourChoice);
  var humanChoice, boxChoice;
  // humanChoice = yourChoice.id;
   boxChoice = numberToChoice(randToRpsInt());
  alert(boxChoice);
  //results = decideWinner(humanChoice, boxChoice);  
  //message = finalMessage(results); //('message': 'You won', 'color': green)
  //rpsfrontend(yourChoice.id, boxChoice, message);

} 

function randToRpsInt()
{
  return Math.floor(Math.random() * 3);

}

function numberToChoice(number)
{
  return ['rock', 'paper', 'scissor'][number]
}
*/



const ageTwenty = 7300;
const ageJeanne = 44695;
function yourAgeInDays() {
  let currentDate = new Date();
  let day = document.querySelector("#day").value;
  let month = document.querySelector("#month").value;
  let year = document.querySelector("#year").value;
  let dateOfBirth = new Date(year + "-" + month + "-" + day);
  let difference = Math.abs(currentDate - dateOfBirth);
  let result = Math.round(difference / (1000 * 3600 * 24));
  if (day === "" || month === "" || year === "") {
    document.getElementById("result").innerHTML =
      "Please type your full date of birth.";
  } else if (dateOfBirth > currentDate) {
    document.getElementById("result").innerHTML = "You're not yet born!?";
  } else if (isNaN(result) || isNaN(day) || isNaN(month) || isNaN(year)) {
    document.getElementById("result").innerHTML =
      "Type a proper date";
  } else {
    if (result < ageTwenty) {
      let textAnswer =
        "You are " + result.toString() + " days old";
      document.getElementById("result").innerHTML = textAnswer;
    } else if (result >= ageTwenty && result < ageJeanne) {
      let textAnswer = "You are " + result.toString() + " days old";
      document.getElementById("result").innerHTML = textAnswer;
    } else {
      document.getElementById("result").innerHTML = "Answer is.......";
      setTimeout(function () {
        document.getElementById("result").innerHTML =
          " Answer is.......";
      }, 1500);
      setTimeout(function () {
        document.getElementById("result").innerHTML =
          "You are " +
          result.toString() +
          " days old";
      }, 2000);
    }
  }
}





  //chanllenge 3: Rock, Paper, Scissor
// Setting the scores and selecting our HTML elements.
let computerScore = 1;
let playerScore = 1;
const pScore = document.getElementById('playerScore');
const cScore = document.getElementById('computerScore');
const buttons = document.querySelectorAll('.selection button');
const showIcon = document.querySelector('.show i');
const computerShowIcon = document.querySelector('.computer i');
// The randomClass array below this contains the rock,paper, and scissor Icon from font-awesome.
const randomClasses = ["fas fa-hand-rock", "fas fa-hand-paper","fas fa-hand-scissors"];
const text = document.getElementById('demo');
const text2 = document.getElementById('demo2');

// Game Functionality: Setting forEach function for the buttons.
const game = () =>{
    buttons.forEach(btn =>{
        btn.addEventListener('click',(e)=>{
        // Random rock paper scissor for the computer and the player
           let clickedBtn = e.target.className;
           showIcon.className = clickedBtn;
           let randomNum = Math.floor(Math.random() * randomClasses.length);
           computerShowIcon.className = randomClasses[randomNum];
           // Game Score.
           // If it's a Tie .
           if(showIcon.className === computerShowIcon.className){
               pScore.innerHTML = pScore.innerHTML;
               cScore.innerHTML = cScore.innerHTML;
               text.innerHTML = "It's a Tie ! ";
               text.style.color = 'orange';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'orange';
           } 
          // if it's not a Tie.
           else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[2]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[0] && computerShowIcon.className === randomClasses[1]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[2]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[1] && computerShowIcon.className === randomClasses[0]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[0]){
               cScore.innerHTML = computerScore;
               computerScore++;
               text.innerHTML = "You Loosed ! ";
               text.style.color = 'red';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'red';
           }else if(showIcon.className === randomClasses[2] && computerShowIcon.className === randomClasses[1]){
               pScore.innerHTML = playerScore;
               playerScore++;
               text.innerHTML = "It's a Win ! ";
               text.style.color = 'rgb(1, 146, 1)';
               text2.innerHTML = text.innerHTML;
               text2.style.color = 'rgb(1, 146, 1)';
           }
        });
    });
}
// Calling the function.
game();
// This function contains all the game logic.