const { createStore } = require('redux')
const rootReducer = require('./reducers')


const initialState = {
  players: [
    {
      id: 1,
      name: 'Kobe Bryant(MVP 2007-2008)',
      image: 'Kobe.png',
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
        topRightThree: 0.349,
      },
    },
    {
      id: 2,
      name: 'Steph Curry(MVP 2015-2016)',
      feildGoalPercent: '50.4%',
      pointsPerGame: '30.1 ppg',
      shooting: {
        rightCornerThree: 0.500,
        leftCornerThree: 0.484,
        inPaintTwo: 0.625,
        freeThrowTwo: 0.640,
        shortLeftTwo: 0.333,
        shortRightTwo: 0.375,
        midLeftTwo: 0.500,
        midLeftElbowTwo: 0.364,
        topKeyTwo: 0.563,
        midRightElbowTwo: 0.429,
        midRightTwo: 0.364,
        topLeftThree: 0.489,
        topCenterThree: 0.451,
        topRightThree: 0.415,
      },
    },
      {
        id: 3,
        name: 'Kevin Durant(MVP 2013-2014)',
        feildGoalPercent: '50.3%',
        pointsPerGame: '32.0 ppg',
        shooting: {
          rightCornerThree: 0.500,
          leftCornerThree: 0.368,
          inPaintTwo: 0.666,
          freeThrowTwo: 0.430,
          shortLeftTwo: 0.439,
          shortRightTwo: 0.463,
          midLeftTwo: 0.533,
          midLeftElbowTwo: 0.452,
          topKeyTwo: 0.435,
          midRightElbowTwo: 0.375,
          midRightTwo: 0.488,
          topLeftThree: 0.336,
          topCenterThree: 0.446,
          topRightThree: 0.378,
        },
    },
    {
      id: 4,
      name: 'Lebron James(MVP 2012-2013)',
      feildGoalPercent: '56.5%',
      pointsPerGame: '26.8 ppg',
      shooting: {
        rightCornerThree: 0.333,
        leftCornerThree: 0.548,
        inPaintTwo: 0.721,
        freeThrowTwo: 0.468,
        shortLeftTwo: 0.422,
        shortRightTwo: 0.333,
        midLeftTwo: 0.377,
        midLeftElbowTwo: 0.447,
        topKeyTwo: 0.585,
        midRightElbowTwo: 0.444,
        midRightTwo: 0.406,
        topLeftThree: 0.365,
        topCenterThree: 0.356,
        topRightThree: 0.455,
      },
    },
    {
      id: 5,
      name: 'Steve Nash(MVP 2005-2006)',
      feildGoalPercent: '51.2%',
      pointsPerGame: '18.85 ppg',
      shooting: {
        rightCornerThree: 0.250,
        leftCornerThree: 0.353,
        inPaintTwo: 0.596,
        freeThrowTwo: 0.446,
        shortLeftTwo: 0.364,
        shortRightTwo: 0.492,
        midLeftTwo: 0.548,
        midLeftElbowTwo: 0.530,
        topKeyTwo: 0.417,
        midRightElbowTwo: 0.539,
        midRightTwo: 0.563,
        topLeftThree: 0.519,
        topCenterThree: 0.368,
        topRightThree: 0.410,
      },
    },
    {
      id: 6,
      name: 'Dirk Nowitzki(MVP 2006-2007)',
      feildGoalPercent: '50.2%',
      pointsPerGame: '24.56 ppg',
      shooting: {
        rightCornerThree: 0.333,
        leftCornerThree: 0.750,
        inPaintTwo: 0.554,
        freeThrowTwo: 0.547,
        shortLeftTwo: 0.417,
        shortRightTwo: 0.489,
        midLeftTwo: 0.535,
        midLeftElbowTwo: 0.458,
        topKeyTwo: 0.500,
        midRightElbowTwo: 0.511,
        midRightTwo: 0.547,
        topLeftThree: 0.476,
        topCenterThree: 0.395,
        topRightThree: 0.397,
      },
    },

  ],
  game: {                             //game(state = {}
    total: 0,
    made: 0,
    missed: 0,
    points: 0,
    fire: 0,
    leaderboard:[
      {user: 'ron',
      score: '10'
      },
      {
        user: 'dave',
        score: '25'
      },
      {
        user: 'tim',
        score: '15'
      }

    ]
  },
  currentPlayer: {
    shooting: {}
  }
}


module.exports = createStore( rootReducer, initialState )
