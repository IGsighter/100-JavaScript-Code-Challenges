const button = document.querySelector("button")
const input = document.querySelector("input")
const result = document.querySelector("span")


button.addEventListener("click", () => {
    function calculateAge(date) {
        const birth = new Date(date)
        const todayDate = new Date()
        let age = todayDate.getFullYear() - birth.getFullYear()
        const monthDiff = todayDate.getMonth() - birth.getMonth()
        const dayDIff = todayDate.getDay() - birth.getDate()
        if (monthDiff < 0 || (monthDiff === 0 && dayDIff < 0)) {
            age--
        }
        return age
    }
    let check = calculateAge(input.value)
    result.innerHTML = check
})


