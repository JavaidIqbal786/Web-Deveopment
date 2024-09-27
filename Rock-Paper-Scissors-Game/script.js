let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('#msg');

const showUserScore = document.querySelector('#user-score');
const showCompScore = document.querySelector('#comp-score');

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);      // Generates Computer Choice
    return options[randIdx];
}

const playGame = (userChoice) => {
    const compChoice = genCompChoice();

    if (userChoice === compChoice){ //Game Draw
        msg.innerText = `You chose ${userChoice}, Computer Chose ${compChoice}. Game Draw!`;
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            // rock, scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            // rock, paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        showUserScore.innerText = userScore;    // Shows user score
        msg.innerText = `You chose ${userChoice}, Computer Chose ${compChoice}. You win! 🤩`;
    }else {
        compScore++;
        showCompScore.innerText = compScore;    // Shows Computer score
        msg.innerText = `You chose ${userChoice}, Computer Chose ${compChoice}. You lose! ☹️`;
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {   // Perform Event on images
        const userChoice = choice.getAttribute("id");  // Get id of image which the user choses (User Choice)
        playGame(userChoice);
    });
});