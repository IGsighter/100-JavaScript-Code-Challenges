const buttons = document.querySelectorAll("button")
const showTimer = document.querySelector(".show-timer")
let countDown
let duretionInSeconds = 1500
let countDownInterval;


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("start")) {
            startTimer()
            updateTimerDisplay()
        }
        else if (button.classList.contains("stop")) {
            stopTimer()
        }
        else if (button.classList.contains("reset")) {
            resetTimer()
        }
    })
})


function startTimer() {
    updateTimerDisplay()
    countDownInterval = setInterval(() => {
        if (duretionInSeconds > 0) {
            duretionInSeconds--
            updateTimerDisplay()
        }
        else {
            clearInterval(countDownInterval)
            alert("Your time is up!!")
        }
    }, 1000)
}

function updateTimerDisplay() {
    let minutes = Math.floor((duretionInSeconds % 3600) / 60);
    let seconds = duretionInSeconds % 60;

    showTimer.textContent =
        String(minutes).padStart(2, '0') + ":" +
        String(seconds).padStart(2, '0');
}

function stopTimer() {
    clearInterval(countDownInterval)
}

function resetTimer() {
    stopTimer()
    showTimer.innerHTML = "25:00"
    duretionInSeconds = 1500
}