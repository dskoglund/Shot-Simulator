const React = require('react')
const { connect } = require ('react-redux')


function mapStateToProps({ game, currentPlayer }) {
  return { game: game, currentPlayer: currentPlayer }
}

function shootTwo(twoPointPercent) {
  let result = 'miss'
  if (Math.random() < twoPointPercent) {
    result = 'make';
  }
  return {
    type: 'shootTwo',
    result: result
  }
}

function shootThree(threePointPercent) {
  let result = 'miss';
  if (Math.random() < threePointPercent) {
    result = 'make';
  }

  return {
    type: 'shootThree',
    result: result
  }
}
//save hold

const App = ({ game, currentPlayer, dispatch }) => {
  return (
    <div>

      <h3>Total Shots:{ game.total }</h3>
      <h3>Total Made: { game.made }</h3>
      <h3>Total Missed: { game.missed }</h3>
      <h3>Total Points: { game.points }</h3>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.inPaintTwo))}>InThePaint</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.freeThrowTwo))}>FreeThrow</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.shortLeftTwo))}>ShootTwo</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.shortRightTwo))}>ShootTwo</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.midLeftTwo))}>ShootTwo</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.midLeftElbowTwo))}>ShootTwo</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.topKeyTwo))}>ShootTwo</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.midRightElbowTwo))}>ShootTwo</button>
      <button onClick = {() => dispatch(shootTwo(currentPlayer.shooting.midRightTwo))}>FreeThrowTwo</button>
      <button onClick = {() => dispatch((shootThree(currentPlayer.shooting.rightCornerThree)))}>ShootThree</button>
      <button onClick = {() => dispatch((shootThree(currentPlayer.shooting.leftCornerThree)))}>ShootThree</button>
      <button onClick = {() => dispatch((shootThree(currentPlayer.shooting.topLeftThree)))}>ShootThree</button>
      <button onClick = {() => dispatch((shootThree(currentPlayer.shooting.topCenterThree)))}>ShootThree</button>
      <button onClick = {() => dispatch((shootThree(currentPlayer.shooting.topRightThree)))}>ShootThree</button>

    </div>
  )
}

module.exports = connect(mapStateToProps)(App)
