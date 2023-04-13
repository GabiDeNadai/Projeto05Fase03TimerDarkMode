import Sounds from "./sounds.js"

const sound = Sounds()

const buttonPlay = document.querySelector('.play')
const buttonStop = document.querySelector('.stop')
const buttonAddMinutes = document.querySelector('.add-five')
const buttonSubtractMinutes = document.querySelector('.subtract-five')
const buttonForestSound = document.querySelector('.forest-sound')
const buttonRainSound = document.querySelector('.rain-sound')
const buttonCoffeeShopSound = document.querySelector('.coffee-shop-sound')
const buttonFireplaceSound = document.querySelector('.fireplace-sound')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const buttonLightMode = document.querySelector('.light-mode')
const buttonDarkMode = document.querySelector('.dark-mode')

let newMinutes
let timerTimeOut
let seconds = Number(secondsDisplay.textContent)
let minutes = Number(minutesDisplay.textContent)

function switchSymbol() {
  buttonDarkMode.classList.toggle('hide')
  buttonLightMode.classList.toggle('hide')
}

function toggleDarkMode() {
  if (buttonDarkMode.classList.contains("hide")) {
    document.documentElement.classList.remove("dark")
  }
  if (buttonLightMode.classList.contains("hide")) {
    document.documentElement.classList.add("dark")
  }
}

function updateDisplay(newMinutes, seconds) {
  newMinutes = newMinutes === undefined ? minutes : newMinutes
  seconds = seconds === undefined ? 0 : seconds
  minutesDisplay.textContent = String(newMinutes).padStart(2, "0") //adicionar o 0 na frente dos números entre 0 e 9
  secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function reset() {
  updateDisplay(minutes, String(seconds - 1))
  clearTimeout(timerTimeOut)
}

function addFiveMinutes() {
  minutes = Number(minutesDisplay.textContent)
  newMinutes = String(minutes + 5)

  if (seconds == 0) {
    updateDisplay(newMinutes, seconds)
    return
  }

  if (seconds > 0) {
    updateDisplay(newMinutes, String(seconds - 1))
  }
}

function subtractFiveMinutes() {
  minutes = Number(minutesDisplay.textContent)
  newMinutes = minutes
  if (newMinutes <= 5) {
    return
  }

  if (newMinutes > 0 && seconds == 0) {
    newMinutes = String(newMinutes - 5)
    updateDisplay(newMinutes, seconds)
    return
  }

  if (newMinutes > 0 && seconds > 0) {
    newMinutes = String(newMinutes - 5)
    updateDisplay(newMinutes, String(seconds - 1))
  }

}

function countdown() {
  timerTimeOut = setTimeout(function () {
    seconds = Number(secondsDisplay.textContent)
    minutes = Number(minutesDisplay.textContent)
    let isFinished = minutes <= 0 && seconds <= 0

    updateDisplay(minutes, 0)

    if (isFinished) {
      updateDisplay()
      sound.stopAllSounds()
      return
    }

    if (seconds <= 0) {
      seconds = 60
      --minutes
    }

    updateDisplay(minutes, String(seconds - 1))

    countdown()
  }, 1000)
}

buttonPlay.addEventListener('click', function () {
  countdown()
})

buttonStop.addEventListener('click', function () {
  reset()
})

buttonAddMinutes.addEventListener('click', function () {
  addFiveMinutes()
})

buttonSubtractMinutes.addEventListener('click', function () {
  subtractFiveMinutes()
})

buttonForestSound.addEventListener('click', function () {
  if (buttonForestSound.classList.contains('active') === false) {
    sound.forestSoundOn()
    return
  }
})

buttonRainSound.addEventListener('click', function () {
  if (buttonRainSound.classList.contains('active') === false) {
    sound.rainSoundOn()
    return
  }
})

buttonCoffeeShopSound.addEventListener('click', function () {
  if (buttonCoffeeShopSound.classList.contains('active') === false) {
    sound.coffeeShopSoundOn()
    return
  }
})

buttonFireplaceSound.addEventListener('click', function () {
  if (buttonFireplaceSound.classList.contains('active') === false) {
    sound.fireplaceSoundOn()
    return
  }
})

buttonLightMode.addEventListener('click', function () {
  switchSymbol()
  toggleDarkMode()
})

buttonDarkMode.addEventListener('click', function () {
  switchSymbol()
  toggleDarkMode()
})