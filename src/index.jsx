import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.scss'
import App from './App.jsx'
import {createStore} from 'redux'
import { Provider } from 'react-redux'
import reducer from './store/reducer.js'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ !== undefined 
  && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
)
