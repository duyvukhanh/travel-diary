import React, { Component } from 'react';
import './App.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { 
  BrowserRouter
 } from 'react-router-dom'
import Routes from './route'
import rootReducers from './reducers'

const store = createStore(rootReducers)

// class Component
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Routes />
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}


export default App;
