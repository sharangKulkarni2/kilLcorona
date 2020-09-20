let square = document.querySelectorAll('.square');
let mole = document.querySelector('.mole');
let timeLeft = document.querySelector('#time-left');
let score = document.querySelector('#score');

let result = 0;
let hitPos;
let currentTime = timeLeft.textContent;
let timerId;
let timerId1;
let randPos;

function randomSquare() {

    square.forEach(sq => sq.classList.remove('mole'));
    randPos = square[Math.floor(Math.random() * 9)];
    randPos.classList.add('mole');
    hitPos = randPos.id;
}

function randomSquare2() {
    randPos.classList.remove('mole');
    randPos = square[Math.floor(Math.random() * 9)];
    randPos.classList.add('mole');
    hitPos = randPos.id;
}


square.forEach(id => id.addEventListener('touchstart', () => {
    if (id.id === hitPos) {
        result += 1;
        score.textContent = result;
        id.classList.add('cross');
        setTimeout(clearCross, 50);
    }
}));

function moveMol() {
   randomSquare();
   timerId1 = setInterval(randomSquare2, 500);
}

function clearCross() {
    square.forEach(sq => sq.classList.remove('cross'));
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;
    if (currentTime === 0) {
        clearInterval(timerId);
        clearInterval(timerId1);
        square.forEach(sq => sq.classList.remove('mole'));
        alert("game over!!! Good Job your final score is  " + result);
      }
}

timerId = setInterval(countDown, 1000);

moveMol();
