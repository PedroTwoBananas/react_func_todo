import React from 'react'
import { useDispatch } from 'react-redux'
import { markAllTasks } from '../redux/actions'
import { Button } from '../styles/ButtonStyle'

const MarkAllButton = () => {
   const dispatch = useDispatch()

   return (
      <Button onClick={() => dispatch(markAllTasks())}>
         Отметить всё как выполнено
      </Button>
   )
}

export default React.memo(MarkAllButton)
