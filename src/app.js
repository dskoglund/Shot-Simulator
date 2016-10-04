const React = require('react')
const { connect } = require('react-redux')
const FontAwesome = require('react-fontawesome')
const className = require('react-bootstrap')

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

const Game = ({ game, currentPlayer, dispatch }) => {
  const style = {
    background: "no-repeat",
    backgroundImage : "url('court.jpg') ",
    backgroundSize: "cover",
    height: "1000px",
    width: "100%"
  };
  const firstRowStyle = {
    marginTop: "15%",
    textAlign: "center"
  }
  const secondRowStyle = {
    marginTop: "15%",
    textAlign: "center"
  }
  const thirdRowStyle = {
    textAlign: "center"
  }
  const fourthRowStyle = {
    marginTop: "5%",
    textAlign: "center"
  }

  return (

    <div className = "game">
      <div className = "col-xs-12" style = {style}>
          <div className= "row">
            <div className = "col-xs-1" data-toggle = "tooltip" title = {"Left-Corner Three:"+" "+ "%"+(currentPlayer.shooting.leftCornerThree*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch((shootThree(currentPlayer.shooting.leftCornerThree)))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
            <div className = "col-xs-1" data-toggle = "tooltip" title = {"Mid-Left Two:"+" "+ "%"+(currentPlayer.shooting.midLeftTwo*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch(shootTwo(currentPlayer.shooting.midLeftTwo))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
            <div className = "col-xs-1">
            </div>
            <div className = "col-xs-1" data-toggle = "tooltip" title = {"Short-Left Two:"+" "+ "%"+(currentPlayer.shooting.shortLeftTwo*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch(shootTwo(currentPlayer.shooting.shortLeftTwo))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
            <div className = "col-xs-1">
            </div>
            <div className = "col-xs-2" data-toggle="tooltip" title = {"In-Paint Two:"+" "+ "%"+(currentPlayer.shooting.inPaintTwo*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch(shootTwo(currentPlayer.shooting.inPaintTwo))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
            <div className = "col-xs-1">
            </div>
            <div className = "col-xs-1" data-toggle = "tooltip" title = {"Short-Right Two:"+" "+ "%"+(currentPlayer.shooting.shortRightTwo*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch(shootTwo(currentPlayer.shooting.shortRightTwo))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
            <div className = "col-xs-1">
            </div>
            <div className = "col-xs-1" data-toggle = "tooltip" title = {"Mid Right Two:"+" "+ "%"+(currentPlayer.shooting.midRightTwo*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch(shootTwo(currentPlayer.shooting.midRightTwo))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
            <div className = "col-xs-1" data-toggle = "tooltip" title = {"Right-Corner Three:"+" "+ "%"+(currentPlayer.shooting.rightCornerThree*100).toFixed(1)} style = {firstRowStyle} onClick = {() =>dispatch((shootThree(currentPlayer.shooting.rightCornerThree)))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
          </div>
          <div className = "row">
            <div className = "col-md-12">
              <div className = "col-xs-2">
              </div>
              <div className = "col-xs-2" data-toggle = "tooltip" title = {"Left-Elbow Two:"+" "+ "%"+(currentPlayer.shooting.midLeftElbowTwo*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootTwo(currentPlayer.shooting.midLeftElbowTwo)))}><FontAwesome
                      className='fa fa-dribbble'
                      name='ball'
                      size='4x'
                      spin
                    /></div>
              <div className = "col-xs-1">
              </div>
              <div className = "col-xs-2" data-toggle = "tooltip" title = {"Free-Throw Two:"+" "+ "%"+(currentPlayer.shooting.freeThrowTwo*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootTwo(currentPlayer.shooting.freeThrowTwo)))}><FontAwesome
                      className='fa fa-dribbble'
                      name='ball'
                      size='4x'
                      spin
                    /></div>
              <div className = "col-xs-1">
              </div>
              <div className = "col-xs-2" data-toggle = "tooltip" title = {"Right-Elbow Two:"+" "+ "%"+(currentPlayer.shooting.midLeftRightTwo*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootTwo(currentPlayer.shooting.midRightElbowTwo)))}><FontAwesome
                      className='fa fa-dribbble'
                      name='ball'
                      size='4x'
                      spin
                    /></div>
              <div className = "col-xs-2">
              </div>
            </div>
          </div>
          <div className = "row">
            <div className = "col-md-12">
            <div className = "col-xs-2" data-toggle = "tooltip" title = {"Top-Left Three:"+" "+ "%"+(currentPlayer.shooting.topLeftThree*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootThree(currentPlayer.shooting.topLeftThree)))}><FontAwesome
                    className='fa fa-dribbble'
                    name='ball'
                    size='4x'
                    spin
                  /></div>
              <div className = "col-xs-2">
              </div>
              <div className = "col-xs-4" data-toggle = "tooltip" title = {"Top-Key Two:"+" "+ "%"+(currentPlayer.shooting.topKeyTwo*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootTwo(currentPlayer.shooting.topKeyTwo)))}><FontAwesome
                      className='fa fa-dribbble'
                      name='ball'
                      size='4x'
                      spin
                    /></div>
              <div className = "col-xs-2">
              </div>
              <div className = "col-xs-2" data-toggle = "tooltip" title = {"Top-Right Three:"+" "+ "%"+(currentPlayer.shooting.topRightThree*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootThree(currentPlayer.shooting.topRightThree)))}><FontAwesome
                      className='fa fa-dribbble'
                      name='ball'
                      size='4x'
                      spin
                    /></div>
            </div>
          </div>
        <div className= "container">
          <div className= "row">
            <div className= "col-md-12">
              <div className = "col-xs-5">
              </div>
              <div className = "col-xs-2" data-toggle = "tooltip" title = {"Top-Center Three:"+" "+ "%"+(currentPlayer.shooting.topCenterThree*100).toFixed(1)} style = {secondRowStyle} onClick = {() =>dispatch((shootThree(currentPlayer.shooting.topCenterThree)))}><FontAwesome
                      className='fa fa-dribbble'
                      name='ball'
                      size='4x'
                      spin
                    /></div>
              <div className = "col-xs-5">
              </div>
            </div>
          </div>
        </div>
        <div className= "container">
          <div className= "row" >
            <div className= "col-md-12">
              <h3>Total Shots: { 0||(game.total) }</h3>
              <h3>Total Made: { game.made }</h3>
              <h3>Total Missed: { game.missed }</h3>
              <h3>Total Points: { game.points }</h3>
              <h3>Feild Goal: %{((((game.made/game.total))*100)||0).toFixed(0)}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

module.exports = connect(mapStateToProps)(Game)
