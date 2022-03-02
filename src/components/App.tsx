import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import { AppWrapper } from '../styles/AppStyle'

const App = () => {
   return (
      <AppWrapper>
         <Header />
         <TaskList />
      </AppWrapper>
   )
}

export default App
