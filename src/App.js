import React from 'react'
import { Provider } from 'react-redux'

import './config/ReactotronConfig'
import store from './store'

import Routes from './routes'

console.tron.log('Testando')

const App = () => (
  // O provider passa para todos os componentes dentro dele a informação sobre o estado do redux
  <Provider store={store}>
    <Routes />
  </Provider>
)

export default App
