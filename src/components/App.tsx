import React from 'react'
import Header from './Header'
import TaskList from './TaskList'
import useTask from '../hooks/useTask'
import { AppWrapper } from '../styles/AppStyle'

const App = () => {
   const {
      tasks,
      addTask,
      deleteTask,
      editTask,
      markTask,
      markAllTasks,
      deleteAllChecked,
   } = useTask()

   return (
      <AppWrapper>
         <Header addTask={addTask} />
         <TaskList tasks={tasks} deleteTask={deleteTask} />
      </AppWrapper>
   )
}

export default App
