import React from 'react'
import TaskForm from './TaskForm'
import { HeaderWrapper } from '../styles/HeaderStyle'
import MarkAllButton from './MarkAllButton'
import DeleteMarkTasksButton from './DeleteMarkTasksButton'

const Header = () => {
   return (
      <HeaderWrapper>
         <TaskForm />
         <MarkAllButton />
         <DeleteMarkTasksButton />
      </HeaderWrapper>
   )
}

export default Header
