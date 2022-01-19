const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

console.log(timeLeft.textContent);

let result = 0
let currentTime = 60
let timerId = null
let hitPosition

function randomSquare() {
    squares.forEach(className => {
        className.classList.remove('mole')
    })
    let randomPosition = squares[Math.floor(Math.random() * 9)]
    randomPosition.classList.add('mole')

    hitPosition = randomPosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () =>{
        if(square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
            console.log("event listener run");
        }        
    })
})


function moveMole() {
    timerId = setInterval(randomSquare, 500)
  }
  
moveMole()

/* wip, to stop Mole after game complete
function moleMovement () {
    function moveMole () {
        let timerId = setInterval(randomSquare, 700)
        return timerId
    }
    while (currentTime > 0) {
        moveMole()
    }
    console.log(timeLeft);
}

moleMovement()
*/
function countDown () {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER! You wacked ' + result + ' out of 60')    
    }
}

let countDownTimerId = setInterval(countDown, 1000)

