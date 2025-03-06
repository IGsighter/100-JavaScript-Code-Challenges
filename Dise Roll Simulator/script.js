const button = document.querySelector("button")
const diceContainer = document.querySelector(".dice-container")
const previourDicelist = document.querySelector(".previous-dice")

const diceArr = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"]
let count = 0

button.addEventListener("click", () => {
    diceContainer.classList.add("rolling")
    setTimeout(() => {
        count++
        diceContainer.classList.remove("rolling")
        diceContainer.innerHTML = diceArr[Math.floor(Math.random() * 6)]
        const mainContainer = document.createElement("div")
        mainContainer.classList.add("main-container")
        previourDicelist.appendChild(mainContainer)
        const showDiceText = document.createElement("span")
        const showDice = document.createElement("li")
        showDice.classList.add("dice")
        showDiceText.classList.add("dice-text")
        showDice.innerHTML = `${diceContainer.innerHTML}`
        showDiceText.innerHTML = `Roll ${count}`
        mainContainer.appendChild(showDiceText)
        mainContainer.appendChild(showDice)
    }, 1000)
})