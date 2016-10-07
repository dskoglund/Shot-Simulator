const React = require('react')
const { connect } = require('react-redux')
const FontAwesome = require('react-fontawesome')
const className = require('react-bootstrap')
const _ = require('lodash')
const $ = require('jquery')

function mapStateToProps({ game, currentPlayer, players }) {
  return { game: game, currentPlayer: currentPlayer, players: players }
}

const newPlayerSound = new Audio('cheering1.wav');


function pickPlayer(player) {

  newPlayerSound.play()
  console.log(player)
  return {
    type: 'PICK_PLAYER',
    player: player
  }
}

const withReact = {
  marginTop: "350px",
  backgroundImage: "url({image})",
  zIndex: "2"
}

const dropStyle = {
  backgroundColor: "yellow",
  fontSize: "16px"
}

const jumboStyle = {
  height: '400px',
  marginBottom: '0px',
  background: "no-repeat",
  backgroundSize: "100%",
  backgroundImage: "url(8bit.png)",
  backgroundColor: "blue"
}

const Drop = ({ players, currentPlayer, dispatch }) => {

  return (
    <div>
      <div className = 'jumbotron' style= { jumboStyle }>
      </div>
      <div  style = { dropStyle } className  = "row">
        <div className = "col-xs-3">
        </div>
        <div className = "col-xs-2">
          <h4>Pick Here ---></h4>
        </div>
        <div  className = "col-xs-2">
          <div className = "selectPlayer">
            <select onChange = {(event) => {
              let player = players[event.target.value]
              dispatch(pickPlayer(player))

            }}>
            <option> Pick a Shooter!
            </option>
              { players.map(function(player, index) {
                return <option key={ index } value={ index }>{ player.name }</option>
              })}
            </select>
          </div>
        </div>
        <div className = "col-xs-5">
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

module.exports = connect(mapStateToProps)(Drop)
