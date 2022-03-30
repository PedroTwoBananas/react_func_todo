import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { Global } from './styles/GlobalStyle'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { rootReducer } from './redux/rootReducer'
import { compose } from 'redux'

const composeEnhancers =
   (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

const store = createStore(rootReducer, composeEnhancers())

export type RootState = ReturnType<typeof rootReducer>

ReactDOM.render(
   <React.StrictMode>
      <Provider store={store}>
         <Global />
         <App />
      </Provider>
   </React.StrictMode>,
   document.getElementById('root')
)
