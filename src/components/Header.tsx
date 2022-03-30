import React from 'react'
import TaskForm from './TaskForm'
import { HeaderWrapper } from '../styles/HeaderStyle'
import MarkAllButton from './MarkAllButton'
import DeleteAllMarkButton from './DeleteAllMarkButton'

const Header = () => {
   return (
      <HeaderWrapper>
         <TaskForm />
         <MarkAllButton />
         <DeleteAllMarkButton />
      </HeaderWrapper>
   )
}

export default React.memo(Header)
