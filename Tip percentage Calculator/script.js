const billInput = document.querySelector("#bill-amount")
const tipInput = document.querySelector("#percentage")
const calculateBtn = document.querySelector("button")
const totalEdit = document.querySelector("#total")
const span = document.querySelector("span")

calculateBtn.addEventListener("click", () => {
    if (billInput.value.trim() === "" && tipInput.value.trim() === "") {
        span.innerText = `0.00`
    }
    else {
        let billInputValue = parseInt(billInput.value)
        let tipInputValue = parseInt(tipInput.value)
        calculateTotal = billInputValue + ((tipInputValue / 100) * billInputValue)
        span.innerText = calculateTotal
    }
    billInput.value = ""
    tipInput.value = ""
})