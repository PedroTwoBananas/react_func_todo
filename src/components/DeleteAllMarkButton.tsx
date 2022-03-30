import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteAllChecked } from '../redux/actions'
import { Button } from '../styles/ButtonStyle'

const DeleteAllMarkButton = () => {
   const dispatch = useDispatch()

   return (
      <Button onClick={() => dispatch(deleteAllChecked())}>
         Удалить все выполненные
      </Button>
   )
}

export default React.memo(DeleteAllMarkButton)
