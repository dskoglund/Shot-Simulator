console.log('test')
const React = require('react');
const ReactDOM = require('react-dom');
const { render } = require('react-dom')
const { Provider } = require('react-redux')
const store = require('./store')
const App = require('./app')

window.store = store
// function reducer(state = {}, { type }) {
//   switch(type){
//     case 'shootTwo':
//       console.log('shot a 2');
//       var total = state.total || 0;
//       return Object.assign(
//         {},
//         state,
//         {total: total += 1}
//       )
//     case 'shootThree':
//       console.log('shot a three');
//       var total = state.total || 0;
//       return Object.assign(
//         {},
//         state,
//         {total: total += 1}
//       )
//     default: return state
//   }
// }

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)
