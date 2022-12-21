const seriesCount = document.querySelector('.series-count')
const clockCount = document.querySelector('.clock-count')
const text = document.querySelector('.text')
const settingsBox = document.querySelector('.settings')

const settingsBtn = document.querySelector('.fa-gear')
const saveBtn = document.querySelector('.save-btn')
const closeBtn = document.querySelector('.fa-x')
const startBtn = document.querySelector('.start-work')
const resetBtn = document.querySelector('.reset-work')

const inputWork = document.querySelector('.time-work')
const inputBreak = document.querySelector('.time-break')

let workTime = 30
let breakTime = 60
let numberSeries = 0
let x = 0

let myAudio = new Audio()
let interval
let newInterval

const startWork = () => {
    playAudio()
    text.textContent = 'work!'
	interval = setInterval(() => {
		if (x <= workTime) {
			clockCount.textContent = x
			x++
		} else {
			numberSeries++
			updateSeries()
			clearInterval(interval)
			x = 0
            playAudio()
			startBreak()
		}
	}, 1000)
}

const startBreak = () => {
    text.textContent = 'break!'
	newInterval = setInterval(() => {
		if (x <= breakTime) {
			clockCount.textContent = x
			x++
		} else {
			clearInterval(newInterval)
			x = 0
			startWork()
		}
	}, 1000)
}

const updateSeries = () => {
	seriesCount.textContent = numberSeries
}

const playAudio = () => {
    const myAudio = new Audio("beep.mp3")
    myAudio.play()
}

const resetAll = () => {
    x = 0
    numberSeries = 0
    clearInterval(interval)
    clearInterval(newInterval)
    seriesCount.textContent = numberSeries
    clockCount.textContent = x
}

const showSettings = () => {
    settingsBox.classList.toggle('active')
}


const updateSettings = () => {
    workTime = inputWork.value;
    breakTime = inputBreak.value;
    showSettings()
}

startBtn.addEventListener('click', startWork)
resetBtn.addEventListener('click',resetAll)
settingsBtn.addEventListener('click',showSettings)
closeBtn.addEventListener('click',showSettings)
saveBtn.addEventListener('click',updateSettings)
