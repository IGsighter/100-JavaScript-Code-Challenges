const showPassword = document.querySelector(".password-container")
const button = document.querySelector("button")

button.addEventListener("click", () => {
    console.log(generatePassword(12));
})

function generatePassword(length) {
    let password = ""
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+[]{}|;:,.<>?"
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length)
        password += chars[randomIndex]
        showPassword.innerHTML = password
    }
    return password
}