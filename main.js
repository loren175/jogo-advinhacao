const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnAgain = document.querySelector("#btnAgain")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

//Eventos

function handleTryClick(event) {
  event.preventDefault()

  const inputNumber = document.querySelector("#inputNumber")

  if (Number(inputNumber.value) == randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Você acertou em ${xAttempts} tentativa(s)!`
  }
  inputNumber.value = ""
  xAttempts++
}

function handleAgainClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function screenHide(e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleAgainClick()
  }
}

btnTry.addEventListener("click", handleTryClick)
btnAgain.addEventListener("click", handleAgainClick)
document.addEventListener("keydown", screenHide)
