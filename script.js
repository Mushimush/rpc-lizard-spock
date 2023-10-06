let playerScoreElement = document.querySelector('.playerScore')
let computerScoreElement = document.querySelector('.computerScore')
let resultElement = document.querySelector('.results')

let playerScore = document.querySelector('.playerScore')
let computerScore = document.querySelector('.computerScore')

let rockButton = document.querySelector('.rock')
let paperButton = document.querySelector('.paper')
let scissorsButton = document.querySelector('.scissors')
let lizardButton = document.querySelector('.lizard')
let spockButton = document.querySelector('.spock')

const choices = ['rock','paper', 'scissors','lizard','spock']

const outcomes = {
    rock: ["scissors","lizard"],
    paper: ['rock','spock'],
    scissors: ['paper','lizard'],
    lizard: ['paper','spock'],
    spock: ['rock','scissors']
}

let currentPlayerScore = 0
let  currentComputerScore =0


function getComputerChoices() {
    return choices[Math.floor(Math.random()*5)]
}

rockButton.addEventListener('click', function() {
    playRound('rock')
})

paperButton.addEventListener('click', function() {
    playRound('paper')
})

scissorsButton.addEventListener('click', function() {
    playRound('scissors')
})

lizardButton.addEventListener('click', function() {
    playRound('lizard')
})
spockButton.addEventListener('click', function() {
    playRound('spock')
})


function playRound(playerChoices) {
    let computerChoice = getComputerChoices()
    console.log(computerChoice)
    if (playerChoices === computerChoice){
        console.log('Its a tie')
        resultElement.textContent = 'Its a tie'
    }
    if (outcomes[playerChoices].includes(computerChoice)) {
        currentPlayerScore++
        console.log('Player won this round')
        resultElement.textContent = 'Player won this round !'
        playerScore.textContent= currentPlayerScore
    }

    else {
        currentComputerScore++
        console.log('Computer won this round')
        resultElement.textContent = 'Computer won this round !'
        computerScore.textContent= currentComputerScore

    }

}