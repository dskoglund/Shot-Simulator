const React = require('react')
const { connect } = require('react-redux')
const FontAwesome = require('react-fontawesome')
const className = require('react-bootstrap')
const _ = require('lodash')
const $ = require('jquery')

function mapStateToProps({ game, currentPlayer, players }) {
  return { game: game, currentPlayer: currentPlayer, players: players}
