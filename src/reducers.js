const { combineReducers } = require('redux')



function currentPlayer( state = { shooting: {} }, action ) {
  switch(action.type) {
    case 'PICK_PLAYER':
      return action.player
    default:
      return state
  }
}

function game(state = {},  action ) {
  let newState
  let result
  let newLeaderboard


  const gameOver = () => {
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
    newState.made += 1
    newState.points += 2
    newState.fire += 1
  }
  const madeThree = () => {
    newState.made += 1
    newState.points += 3
    newState.fire += 1
  }
  const miss = () => {
    newState.missed += 1
    newState.fire = 0
  }
  console.log(action)
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
