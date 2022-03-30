import Header from './Header'
import TaskList from './TaskList'
import { AppWrapper } from '../styles/AppStyle'
import { useSelector } from 'react-redux'
import TaskInterface from '../interfaces/TaskInterface'
import { RootState } from '..'

const App = () => {
   const tasks: TaskInterface[] = useSelector(
      (state: RootState) => state.tasksReducer.tasks
   )

   return (
      <AppWrapper>
         <Header />
         <TaskList tasks={tasks} />
      </AppWrapper>
   )
}

export default App
