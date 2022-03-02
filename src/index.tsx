import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Global } from './styles/GlobalStyle'

ReactDOM.render(
   <React.StrictMode>
      <Global />
      <App />
   </React.StrictMode>,
   document.getElementById('root')
)
