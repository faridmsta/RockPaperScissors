const home = document.querySelector(".home");
const playsc = document.querySelector(".play");
const stButton = document.querySelector(".button");

stButton.addEventListener("click", () => {

    setTimeout(() => {
        home.classList.add("hide");
        playsc.classList.add("show");
    }, 100);
});

const btHands = document.querySelectorAll('.bthand')
const plHands = document.querySelectorAll('.plhand')
const scoreTable = document.querySelector('.score')
const tieAlert = document.querySelector('.tieAlert')
const winAlert = document.querySelector('.winAlert')
const winAlertInfo = document.querySelector('.winAlert span')

let plSc = 0
let btSc = 0

function tie() {

    tieAlert.classList.add('alrt');

    tieAlert.style.opacity = '1';

    setTimeout(() => {
        tieAlert.style.opacity = '0';
    }, 500);

    setTimeout(() => {
        tieAlert.classList.remove('alrt');
    }, 800);
}

function gameOver(info) {
    winAlertInfo.innerHTML = `${info}`;
    winAlert.classList.remove('vanish')
    winAlert.classList.add('alrt');
    tieAlert.style.opacity = '1';

}

function plsecection(num) {
    botCh = rand(0, 2)
    for (let i = 0; i <= 2; i++) {
        btHands[i].classList.remove("chosen")
        plHands[i].classList.remove("chosen")
    }
    btHands[botCh].classList.add("chosen")
    plHands[num].classList.add("chosen")

    if (num == 0) {
        (botCh == 1) ? btSc += 1 : (botCh == 2) ? plSc += 1 : tie()
    } else if (num == 1) {
        (botCh == 0) ? plSc += 1 : (botCh == 2) ? btSc += 1 : tie()
    } else {
        (botCh == 1) ? plSc += 1 : (botCh == 0) ? btSc += 1 : tie()
    }

    scoreTable.innerHTML = `Player: ${plSc} <br/> Bot: ${btSc}`
    console.log(btSc, plSc);

    if (plSc == 3) {
        gameOver('You Win!!!')
    } else if (btSc == 3) {
        gameOver('HAHAHA You LOST')
    }

}

function reStart() {
    plSc = 0
    btSc = 0
    scoreTable.innerHTML = `Player: ${plSc} <br/> Bot: ${btSc}`
    for (let i = 0; i <= 2; i++) {
        btHands[i].classList.remove("chosen")
        plHands[i].classList.remove("chosen")
    }
    btHands[0].classList.add("chosen")
    plHands[0].classList.add("chosen")
    setTimeout(() => {
        playsc.classList.add("show");
        winAlert.classList.add('vanish');
    }, 100);
}

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


const backgroundMusic = document.getElementById('backgroundMusic');
const toggleMusicButton = document.getElementById('toggleMusic');

function toggleMusic() {
    if (backgroundMusic.paused) {
        backgroundMusic.play();
        toggleMusicButton.innerHTML = '<i class="fa-solid fa-volume-xmark"></i>';
    } else {
        backgroundMusic.pause();
        backgroundMusic.currentTime = 0; // Reset the audio to the beginning
        toggleMusicButton.innerHTML = '<i class="fa-solid fa-volume-high"></i>';
    }
}

toggleMusicButton.addEventListener('click', toggleMusic);

window.onload = () => {
    backgroundMusic.play();
};

