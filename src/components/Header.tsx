import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskForm from './TaskForm'
import { HeaderWrapper } from '../styles/HeaderStyle'
import MarkAllButton from './MarkAllButton'
import DeleteMarkTasksButton from './DeleteMarkTasksButton'

interface HeaderProps {
   addTask: (value: TaskInterface) => void
}

const Header = ({ addTask }: HeaderProps) => {
   return (
      <HeaderWrapper>
         <TaskForm addTask={addTask}/>
         <MarkAllButton />
         <DeleteMarkTasksButton />
      </HeaderWrapper>
   )
}

export default Header
