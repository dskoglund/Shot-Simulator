const React = require('react')
const { connect } = require('react-redux')
const FontAwesome = require('react-fontawesome')
const className = require('react-bootstrap')
const _ = require('lodash')

function mapStateToProps({ game, currentPlayer, players }) {
  return { game: game, currentPlayer: currentPlayer, players: players}
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

const Game = ({ game, currentPlayer, dispatch }) => {

  let leaders = game.leaderboard.slice().sort(function(a, b) {
                return b.score - a.score
              })

  const backgroundStyle = {
    background: "no-repeat",
    backgroundImage: "url('court.jpg')",
    backgroundSize: "100% auto",
  }
  const firstRowStyle = {
    marginTop: "14%",
    textAlign: "center"
  }
  const secondRowStyle = {
    marginTop: "3%",
    textAlign: "center"
  }
  const thirdRowStyle = {
    marginTop: "2%",
    textAlign: "center"
  }
  const fourthRowStyle = {
    marginTop: "3%",
    textAlign: "center"
  }
  const fifthRowStyle = {
    marginTop: "5%",
    textAlign: "center"
  }
  const sixthRowStyle = {
    marginTop: "10%",
    textAlign: "center"
  }
  const fontFace = `
    @font-face {
      font-family: 'Digital';
      src: url('public/digital-7.regular.ttf')
    }
  `
  const scoreBoardStyle = {
    fontFamily: 'Digital',
    marginTop: "3%",
    backgroundColor: "black",
    color: "orange",
    borderColor: "white",//?
    borderWidth: "10px",//?
    textAlign: "center"
  }
  const leaderBoardStyle = {
    color:  "yellow",
    backgroundColor: "blue",
    borderStyle: "solid",
    borderWidth: "medium",
    borderColor: "white",
    width: "100%",
    textAlign: "center",
    border: "none",
    marginRight: 'auto',
    marginLeft: 'auto'
  }
  const leaderBoard = {
    width: '100%',
    textAlign: 'center'
  }

  return (
  <div>
    <h4 style = { leaderBoard }>Leaderboard</h4>
    <div style = { leaderBoardStyle } className= "col-xs-12" >
      <div className="col-xs-4 col-xs-offset-4">
        <ul>{ leaders.map(function(person, index){
          return <h5 key={ index }>{person.user.toUpperCase()+" "+"Score:  "+person.score+" "+"pts"}</h5>
        }) }</ul>
      </div>
      <div className = "col-xs-4">
      </div>
    </div>
    <div className = "game">
      <div className = "col-xs-12" style = { backgroundStyle }>
        <div className = "row">
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Left-Corner Three:"+" "+ "%"+(currentPlayer.shooting.leftCornerThree*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>
          dispatch(shootThree(currentPlayer.shooting.leftCornerThree))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size =  '3x'
                    spin
                  /></div>
          <div className = "col-xs-4">
          </div>
          <div className = "col-xs-2" data-toggle="tooltip" title = {"In-Paint Two:"+" "+ "%"+(currentPlayer.shooting.inPaintTwo*100).toFixed(1)} style = { firstRowStyle }   onClick = {() =>
          dispatch(shootTwo(currentPlayer.shooting.inPaintTwo))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-4">
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Right-Corner Three:"+" "+ "%"+(currentPlayer.shooting.rightCornerThree*100).toFixed(1)} style = { firstRowStyle } onClick = {() => dispatch((shootThree(currentPlayer.shooting.rightCornerThree)))}><FontAwesome
                    className ='fa fa-dribbble'
                    name ='ball'
                    size ='3x'
                    spin
                  /></div>
        </div>
        <div className = "row">
          <div className = "col-xs-1">
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Mid-Left Two:"+" "+ "%"+(currentPlayer.shooting.midLeftTwo*100).toFixed(1)} style = { secondRowStyle }  onClick = {() =>
          dispatch(shootTwo(currentPlayer.shooting.midLeftTwo))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-1">
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Short-Left Two:"+" "+ "%"+(currentPlayer.shooting.shortLeftTwo*100).toFixed(1)} style = { secondRowStyle } onClick = {() =>
          dispatch(shootTwo(currentPlayer.shooting.shortLeftTwo))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-1">
          </div>
          <div className = "col-xs-2" style = { scoreBoardStyle }>
            <div>
              <div>
                <h5>Total Shots:{ game.total }</h5>
              </div>
              <h5>Total Made: { game.made }</h5>
              <h5>Total Missed: { game.missed }</h5>
              <h5>Total Points: { game.points }</h5>
              <h5>Feild Goal: %{(((( game.made/game.total ))*100)||0).toFixed(0)}</h5>
            </div>
          </div>
          <div className="col-xs-1">
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Short-Right Two:"+" "+ "%"+(currentPlayer.shooting.shortRightTwo*100).toFixed(1)} style = { secondRowStyle } onClick = {() =>
          dispatch(shootTwo(currentPlayer.shooting.shortRightTwo))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-1">
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Mid Right Two:"+" "+ "%"+(currentPlayer.shooting.midRightTwo*100).toFixed(1)} style = { secondRowStyle } onClick = {() =>
          dispatch(shootTwo(currentPlayer.shooting.midRightTwo))}><FontAwesome
                    className ='fa fa-dribbble'
                    name ='ball'
                    size ='3x'
                    spin
                  /></div>
        </div>
        <div className = "row">
          <div className = "col-xs-5">
          </div>
          <div className = "col-xs-2" data-toggle = "tooltip" title = {"Free-Throw Two:"+" "+ "%"+(currentPlayer.shooting.freeThrowTwo*100).toFixed(1)} style = { thirdRowStyle } onClick = {() =>
          dispatch((shootTwo(currentPlayer.shooting.freeThrowTwo)))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-5">
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-2">
          </div>
          <div className = "col-xs-2" data-toggle = "tooltip" title = {"Left-Elbow Two:"+" "+ "%"+(currentPlayer.shooting.midLeftElbowTwo*100).toFixed(1)} style = { fourthRowStyle } onClick = {() =>
          dispatch((shootTwo(currentPlayer.shooting.midLeftElbowTwo)))}><FontAwesome
                    className ='fa fa-dribbble'
                    name ='ball'
                    size ='3x'
                    spin
                  /></div>
          <div className = "col-xs-4">
          </div>
          <div className = "col-xs-2" data-toggle = "tooltip" title = {"Right-Elbow Two:"+" "+ "%"+(currentPlayer.shooting.midRightElbowTwo*100).toFixed(1)} style = { fourthRowStyle } onClick = {() => dispatch((shootTwo(currentPlayer.shooting.midRightElbowTwo)))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name ='ball'
                    size ='3x'
                    spin
                  /></div>
          <div className = "col-xs-2">
          </div>
        </div>
        <div className = "row">
          <div className = 'col-xs-1'>
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Top-Left Three:"+" "+ "%"+(currentPlayer.shooting.topLeftThree*100).toFixed(1)} style = { fifthRowStyle }   onClick = {() =>
          dispatch((shootThree(currentPlayer.shooting.topLeftThree)))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-2">
          </div>
          <div className = "col-xs-4" data-toggle = "tooltip" title = {"Top-Key Two:"+" "+ "%"+(currentPlayer.shooting.topKeyTwo*100).toFixed(1)} style = { fifthRowStyle }
          onClick = {() =>
          dispatch((shootTwo(currentPlayer.shooting.topKeyTwo)))}>
          <FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-2">
          </div>
          <div className = "col-xs-1" data-toggle = "tooltip" title = {"Top-Right Three:"+" "+ "%"+(currentPlayer.shooting.topRightThree*100).toFixed(1)} style = { fifthRowStyle }  onClick = {() =>
          dispatch((shootThree(currentPlayer.shooting.topRightThree)))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size ='3x'
                    spin
                  /></div>
          <div className = 'col-xs-1'>
          </div>
        </div>
        <div className = "row">
          <div className = "col-xs-5">
          </div>
          <div className = "col-xs-2" data-toggle = "tooltip" title = { "Top-Center Three:"+" "+ "%"+(currentPlayer.shooting.topCenterThree*100).toFixed(1)} style = { sixthRowStyle } onClick = {() => dispatch((shootThree(currentPlayer.shooting.topCenterThree)))}><FontAwesome
                    className = 'fa fa-dribbble'
                    name = 'ball'
                    size = '3x'
                    spin
                  /></div>
          <div className = "col-xs-5">
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

module.exports = connect(mapStateToProps)(Game)
