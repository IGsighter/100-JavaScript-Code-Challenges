const rockBtn = document.querySelector(".rock")
const paperBtn = document.querySelector(".paper")
const scissorsBtn = document.querySelector(".scissors")
const whoWin = document.querySelector(".who-win")
const displayUserScore = document.querySelector(".user-score")
const displayComputerScore = document.querySelector(".computer-score")

const gameArr = ["👊", "🖐", "✌"]
let computerGenerated = gameArr[Math.floor(Math.random() * 3)]
let userScoreValue = 0
let computerScoreValue = 0



rockBtn.addEventListener("click", () => forRock())
paperBtn.addEventListener("click", () => forPaper())
scissorsBtn.addEventListener("click", () => forScissor())


function forRock() {
    if (computerGenerated === "🖐") {
        whoWin.innerHTML = "You Loss: Paper beats Rock"
        computerScoreValue++
        displayComputerScore.innerText = computerScoreValue
        displayUserScore.innerText = userScoreValue
    }
    else if (computerGenerated === "✌") {
        whoWin.innerText = "You Won: Rock beats Scissor"
        userScoreValue++
        displayUserScore.innerText = userScoreValue
        displayComputerScore.innerText = computerScoreValue
    }
    else {
        whoWin.innerText = "It's a tie!"
    }
    computerGenerated = gameArr[Math.floor(Math.random() * 3)]
}

function forScissor() {
    if (computerGenerated === "👊") {
        whoWin.innerText = "You Loss: Rock beats Scissor"
        computerScoreValue++
        displayComputerScore.innerText = computerScoreValue
    }
    else if (computerGenerated === "🖐") {
        whoWin.innerText = "You Won: Scissor beats Paper"
        userScoreValue++
        displayUserScore.innerText = userScoreValue
    }
    else {
        whoWin.innerText = "It's a tie!"
    }
    computerGenerated = gameArr[Math.floor(Math.random() * 3)]
}

function forPaper() {
    if (computerGenerated === "👊") {
        whoWin.innerText = "You Won: Paper beats Rock"
        userScoreValue++
        displayUserScore.innerText = userScoreValue
    }
    else if (computerGenerated === "✌") {
        whoWin.innerText = "You Loss: Scissor beats Paper"
        computerScoreValue++
        displayComputerScore.innerText = computerScoreValue
    }
    else {
        whoWin.innerText = "It's a tie!"
    }
    computerGenerated = gameArr[Math.floor(Math.random() * 3)]
}