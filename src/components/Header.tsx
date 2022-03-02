import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskForm from './TaskForm'
import { HeaderWrapper } from '../styles/HeaderStyle'
import MarkAllButton from './MarkAllButton'
import DeleteAllMarkButton from './DeleteAllMarkButton'

interface HeaderProps {
   addTask: (value: TaskInterface) => void
   markAllTasks: () => void
   deleteAllChecked: () => void
}

const Header = ({ addTask, markAllTasks, deleteAllChecked }: HeaderProps) => {
   return (
      <HeaderWrapper>
         <TaskForm addTask={addTask} />
         <MarkAllButton markAllTasks={markAllTasks} />
         <DeleteAllMarkButton deleteAllChecked={deleteAllChecked} />
      </HeaderWrapper>
   )
}

export default React.memo(Header)
