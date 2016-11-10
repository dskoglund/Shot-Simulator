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

const jumboStyle = {
  paddingTop: "10vh",
  height: "100vh",
  marginBottom: "0px",
  background: "no-repeat",
  backgroundSize: "100%",
  backgroundImage: "url(8bit.png)",
  backgroundColor: "blue"
}

const playerChoiceStyle = {
  color: "black",
  marginTop: "70%",
}

const Drop = ({ players, currentPlayer, dispatch }) => {

  return (
    <div>
      <div className = 'jumbotron' style = { jumboStyle }>
        <div>
          <div className = "col-xs-4 col-xs-offset-4">
            <div className = "selectPlayer" >
              <select multiple className = "form-control" style = { playerChoiceStyle } onChange = {(event) => {
                let player = players[event.target.value]
                dispatch(pickPlayer(player))
              }}>
              <option> Pick a Shooter!
              </option>
                { players.map(function(player, index) {
                  return <option key={ index } value={ index }>{ player.name }<img src={ player.image } alt="boohoo" className="img-responsive"/></option>
                })}
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

module.exports = connect(mapStateToProps)(Drop)
