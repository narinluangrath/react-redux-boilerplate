import React from 'react'
import ReactDOM from 'react-dom'
import { Provider as StyleProvider } from 'rendition'
import { config } from 'dotenv'
import { createStore, applyMiddleware } from 'redux' 
import { Provider } from 'react-redux'
import promise from 'redux-promise'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
config()

import ContainerTemplate from './container/ContainerTemplate'
import reducers from './reducers'
import './main.scss'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

function App() {
  return (
    <Provider store={createStoreWithMiddleware(reducers)}>
      <StyleProvider style={{width: '100%', height: '100%'}}>
        <BrowserRouter>
          <Switch>
            <Route path='/' component={ContainerTemplate}/>           
          </Switch>
        </BrowserRouter>
      </StyleProvider>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))