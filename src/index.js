const React = require('react');
const ReactDOM = require('react-dom');
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./store')
const Game = require('./app')
const Drop = require('./drop')

render(
  <Provider store={store}>
    <div>
      <Drop/>
      <Game/>
    </div>
  </Provider>,
  document.getElementById('app')
);
