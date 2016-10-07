const React = require('react')
const { connect } = require('react-redux')
const FontAwesome = require('react-fontawesome')
const className = require('react-bootstrap')
const _ = require('lodash')
const $ = require('jquery')

function mapStateToProps({ game, currentPlayer, players }) {
  return { game: game, currentPlayer: currentPlayer, players: players }
}

function pickPlayer(player) {
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
        <div className  = "row">
          <div className = "col-xs-12">
            <div className = "selectPlayer">
              <select style = { dropStyle } onChange = {(event) => {
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
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

module.exports = connect(mapStateToProps)(Drop)
