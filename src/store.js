const { createStore, combineReducers } = require('redux')


const initialState = {
  players: [{

  }],
  game: {                             //game(state = {}
    total: 0,
    made: 0,
    missed: 0,
    points: 0,
    fire: 0
  },
  currentPlayer: {
    id: 1,
    name: 'Kobe Brant(MVP 2007-2008)',
    feildGoalPercent: '45.9%',
    pointsPerGame: '28.3 ppg',
    shooting: {
      rightCornerThree: 0.500,
      leftCornerThree: 0.333,
      inPaintTwo: 0.624,
      freeThrowTwo: 0.461,
      shortLeftTwo: 0.354,
      shortRightTwo: 0.481,
      midLeftTwo: 0.391,
      midLeftElbowTwo: 0.416,
      topKeyTwo: 0.400,
      midRightElbowTwo: 0.355,
      midRightTwo: 0.344,
      topLeftThree: 0.373,
      topCenterThree: 0.394,
      topRightThree: 0.359,
    },
  }
}



function game(state = {},  action ) {
  let newState
  let result
  console.log(action)
  switch (action.type) {
    case 'shootTwo':
      newState = Object.assign({}, state, { total: state.total += 1 })
      result = action.result
      if (result === 'make') {
        if(newState.fire === 3){
            console.log('You are on fire! 10% FG% increase!')
            console.log(newState.fire)
            for(var prop in initialState.currentPlayer.shooting){
              initialState.currentPlayer.shooting[prop] += .1
            console.log("initialState.currentPlayer.shooting."+ prop + "=" + initialState.currentPlayer.shooting[prop]);
        }}
        newState.made += 1
        newState.points += 2
        newState.fire += 1
      }
       else {
        newState.missed += 1
        newState.fire = 0
      }
      return newState
    case 'shootThree':
      newState = Object.assign({}, state, { total: state.total += 1 })
      result = action.result
      if (result === 'make') {
        if(newState.fire === 3){
            console.log('You are on fire! 10% FG% increase!')
            console.log(newState.fire)
            for(var prop in initialState.currentPlayer.shooting){
              initialState.currentPlayer.shooting[prop] += .1
            console.log("initialState.currentPlayer.shooting."+ prop + "=" + initialState.currentPlayer.shooting[prop]);
        }}
        newState.made += 1
        newState.points += 3
        newState.fire += 1
      } else {
        newState.missed += 1
        newState.fire = 0
      }
      return newState
    default: return state
  }
}

function players(state = [], { type }) {
  return state

}

function currentPlayer(state = {}, { type }) {

  return state

}

const rootReducer = combineReducers({ game, players, currentPlayer })



module.exports = createStore(rootReducer, initialState)
