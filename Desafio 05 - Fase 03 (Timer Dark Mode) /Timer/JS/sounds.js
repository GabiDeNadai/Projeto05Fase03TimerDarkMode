
export default function () {

  const buttonForestSound = document.querySelector('.forest-sound')
  const buttonRainSound = document.querySelector('.rain-sound')
  const buttonCoffeeShopSound = document.querySelector('.coffee-shop-sound')
  const buttonFireplaceSound = document.querySelector('.fireplace-sound')
  const pressForest = new Audio("./Sounds/Floresta.wav")
  const pressRain = new Audio("./Sounds/Chuva.wav")
  const pressCoffeShop = new Audio("./Sounds/Cafeteria.wav")
  const pressFireplace = new Audio("./Sounds/Lareira.wav")
  const forestVolume = document.getElementById('forest-volume-slider')
  const rainVolume = document.getElementById('rain-volume-slider')
  const coffeeVolume = document.getElementById('coffee-shop-volume-slider')
  const fireplaceVolume = document.getElementById('fireplace-volume-slider')
  let volume

  pressForest.loop = true
  pressRain.loop = true
  pressCoffeShop.loop = true
  pressFireplace.loop = true

  function volumeSlider(audio) {
    volume.addEventListener("change", function (e) {
      audio.volume = e.currentTarget.value / 100;
    })
  }

  function resetInput() {
    forestVolume.value = "0";
    rainVolume.value = "0";
    coffeeVolume.value = "0";
    fireplaceVolume.value = "0";
  }

  function resetButton() {
    buttonForestSound.classList.remove('active')
    buttonRainSound.classList.remove('active')
    buttonCoffeeShopSound.classList.remove('active')
    buttonFireplaceSound.classList.remove('active')
  }

  function resetVolume() {
    forestVolume.classList.remove('active')
    rainVolume.classList.remove('active')
    coffeeVolume.classList.remove('active')
    fireplaceVolume.classList.remove('active')
  }

  function pauseSounds() {
    pressForest.pause()
    pressRain.pause()
    pressCoffeShop.pause()
    pressFireplace.pause()
  }

  function forestSoundOn() {
    resetInput()
    forestVolume.value = "0,5";

    volume = forestVolume
    volumeSlider(pressForest)

    resetVolume()
    forestVolume.classList.add('active')

    resetButton()
    buttonForestSound.classList.add('active')

    pauseSounds()
    pressForest.play()
  }

  function rainSoundOn() {
    resetInput()
    rainVolume.value = "0,5";
    volume = rainVolume
    volumeSlider(pressRain)

    resetVolume()
    rainVolume.classList.add('active')

    resetButton()
    buttonRainSound.classList.add('active')

    pauseSounds()
    pressRain.play()
  }

  function coffeeShopSoundOn() {
    resetInput()
    coffeeVolume.value = "0,5";
    volume = coffeeVolume
    volumeSlider(pressCoffeShop)

    resetVolume()
    coffeeVolume.classList.add('active')

    resetButton()
    buttonCoffeeShopSound.classList.add('active')

    pauseSounds()
    pressCoffeShop.play()
  }

  function fireplaceSoundOn() {
    resetInput()
    fireplaceVolume.value = "0,5";
    volume = fireplaceVolume
    volumeSlider(pressFireplace)

    resetVolume()
    fireplaceVolume.classList.add('active')

    resetButton()
    buttonFireplaceSound.classList.add('active')

    pauseSounds()
    pressFireplace.play()
  }

  return {
    forestSoundOn,
    rainSoundOn,
    coffeeShopSoundOn,
    fireplaceSoundOn,
    volumeSlider,
    resetButton,
    pauseSounds,
  }

}