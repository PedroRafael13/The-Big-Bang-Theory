const result = document.querySelector('.result')
const yourPoint = document.querySelector('#youScore')
const sheldonPoint = document.querySelector('#sheldonScore')

let humanPointNumber = 0
let sheldonScoreNumber = 0

//ENUMS
const GAME_OPTINOS = {
  ROCK : 'rock',
  PAPER : 'paper',
  SCISSORS : 'scissors',
  SPOCK: 'spock',
  LIZARD : 'lizard'
}

const playHuman = (humanChoise) => {

  playTheGame(humanChoise, playShledon())
}

const playShledon = () =>{
  const choises = [GAME_OPTINOS.ROCK, GAME_OPTINOS.PAPER , GAME_OPTINOS.SCISSORS, GAME_OPTINOS.SPOCK, GAME_OPTINOS.LIZARD]
  const numberRandom = Math.floor(Math.random() * 5)

  return choises [numberRandom]
}

const playTheGame = (human, machine) => {

  console.log("Humano : " + human + "Sheldon : " + machine)

  if(human === machine){
    result.innerHTML = "Deu empater"
  } else if((human === GAME_OPTINOS.SCISSORS && machine === GAME_OPTINOS.PAPER) || 
  (human === GAME_OPTINOS.PAPER && machine === GAME_OPTINOS.ROCK) || (human === GAME_OPTINOS.ROCK && machine === GAME_OPTINOS.LIZARD) ||
  (human === GAME_OPTINOS.LIZARD && machine === GAME_OPTINOS.SPOCK) || (human === GAME_OPTINOS.SPOCK && machine === GAME_OPTINOS.SCISSORS) ||
  (human === GAME_OPTINOS.SCISSORS && machine === GAME_OPTINOS.LIZARD) || (human === GAME_OPTINOS.LIZARD && machine === GAME_OPTINOS.PAPER) ||
  (human === GAME_OPTINOS.PAPER && machine === GAME_OPTINOS.SPOCK) || (human === GAME_OPTINOS.SPOCK && machine === GAME_OPTINOS.ROCK) ||
  (human === 'rock' && machine === 'scissors')){
    humanPointNumber ++
    youScore.innerHTML = humanPointNumber
    result.innerHTML = "You win"
  } else{
    sheldonScoreNumber ++
    sheldonScore.innerHTML = sheldonScoreNumber
    result.innerHTML = "Sheldon destruiu você"
  }
}