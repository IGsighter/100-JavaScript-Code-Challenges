const celsiusInput = document.querySelector(".celsius")
const fahrenheitInput = document.querySelector(".fahrenheit")
const kelvinInput = document.querySelector(".kelvin")
const allInputs = document.querySelectorAll("input")


allInputs.forEach((input) => {
    input.addEventListener("input", () => {
        if (input.classList.contains("celsius")) {
            if (input.value) {
                const celsiusInputValue = parseInt(celsiusInput.value)
                fahrenheitInput.value = ((celsiusInputValue * 9 / 5) + 32).toFixed(3)
                kelvinInput.value = (celsiusInputValue + 273.15).toFixed(3)
            }
            else {
                fahrenheitInput.value = ""
                kelvinInput.value = ""
            }
        }
        else if (input.classList.contains("fahrenheit")) {
            if (input.value) {
                const fahrenheitInputValue = parseInt(fahrenheitInput.value)
                celsiusInput.value = ((fahrenheitInputValue - 32) * 5 / 9).toFixed(3)
                kelvinInput.value = ((fahrenheitInputValue - 32) * 5 / 9 + 273.15).toFixed(3)
            }
            else {
                kelvinInput.value = ""
                celsiusInput.value = ""
            }
        }
        else if (input.classList.contains("kelvin")) {
            if (input.value) {
                const kelvinInputValue = parseInt(kelvinInput.value)
                celsiusInput.value = (kelvinInputValue - 273.15).toFixed(2)
                fahrenheitInput.value = ((kelvinInputValue - 273.15) * 9 / 5 + 32).toFixed(2)
            }
            else {
                fahrenheitInput.value = ""
                celsiusInput.value = ""
            }
        }

    })

})
