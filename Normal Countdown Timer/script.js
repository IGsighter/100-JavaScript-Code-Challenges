const showTimer = document.querySelector(".show-timer")
const buttons = document.querySelectorAll("button")
const showHours = document.querySelector(".hours")
const showMinutes = document.querySelector(".minutes")
const showSeconds = document.querySelector(".seconds")
const miliseconds = document.querySelector(".miliseconds")


let hoursValue = 0
let minutesValue = 0
let secondsValue = 0
let milisecondsValue = 0
let setIntervalId = null


buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (button.classList.contains("start")) {
            startTimer()
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
    if (!setIntervalId) {
        setIntervalId = setInterval(updateTimer, 10)
    }
    updateDisplay()
}

function updateTimer() {
    milisecondsValue++
    if (milisecondsValue === 100) {
        secondsValue++
        milisecondsValue = 0
        if (secondsValue === 60) {
            minutesValue++
            secondsValue = 0
            milisecondsValue = 0
            if (minutesValue === 60) {
                hoursValue++
                minutesValue = 0
            }
        }
    }
    updateDisplay()

}

function updateDisplay() {
    showTimer.innerText =
        `${String(hoursValue).padStart(2, "0")}:` +
        `${String(minutesValue).padStart(2, "0")}:` +
        `${String(secondsValue).padStart(2, "0")}:` +
        `${String(milisecondsValue).padStart(2, "0")} `
}

function stopTimer() {
    clearInterval(setIntervalId)
    setIntervalId = null
}

function resetTimer() {
    hoursValue = 0
    minutesValue = 0
    secondsValue = 0
    milisecondsValue = 0
    showTimer.innerText = "00:00:00"
    stopTimer()
}