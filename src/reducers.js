const { combineReducers } = require('redux')



function currentPlayer( state = { shooting: {} }, action ) {

  const newPlayerSound = new Audio('cheering1.wav');

  switch(action.type) {
    case 'PICK_PLAYER':
      return action.player
      newPlayerSound.play()
    default:
      return state
  }
}

function game(state = {},  action ) {
  let newState
  let result
  let newLeaderboard

  const swishSound = new Audio('Swish+2.wav');

  const missSound = new Audio('Back+Board.wav');

  const gameEndSound = new Audio('cheer2.wav');



  const gameOver = () => {
    if (state.total === 25){
      gameEndSound.play()
    }
    if (state.made + state.missed === 25) {
      var user = prompt("Gameover... Enter your name for the LEADERBOARD!!...")
      alert('New Game! Are you ready to shoot? Pick a new player, or keep shooting with this one! Take 25 shots by clicking the basketballs on the court below. Each location represents the shooting percentage of your player from their best shooting season!')
      var score = newState.points
      newState.leaderboard = state.leaderboard.concat({user, score})
      newState.total = 0
      newState.missed = 0
      newState.made = 0
      newState.fire = 0
      newState.points = 0
    }
  }

  const madeTwo = () => {
    swishSound.play()
    newState.made += 1
    newState.points += 2
    newState.fire += 1
  }
  const madeThree = () => {
    swishSound.play()
    newState.made += 1
    newState.points += 3
    newState.fire += 1
  }
  const miss = () => {
    missSound.play()
    newState.missed += 1
    newState.fire = 0
  }

  switch (action.type) {
    case 'shootTwo':
      newState = Object.assign({}, state, { total: state.total += 1 })

      result = action.result
      if (result === 'make') {
        madeTwo()
        gameOver()

      }
      else {
        miss()
        gameOver()
      }
      return newState
    case 'shootThree':
      newState = Object.assign({}, state, { total: state.total += 1 })

      result = action.result
      if (result === 'make') {
        madeThree()
        gameOver()
      }
      else {
        miss()
        gameOver()
      }
      return newState
    default: return state
  }
}

function players( state = [], { type } ) {
  return state
}
const rootReducer = combineReducers({ game, players, currentPlayer })

module.exports = rootReducer
