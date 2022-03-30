import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TaskInterface from '../interfaces/TaskInterface'
import { editTask } from '../redux/actions'
import { Button } from '../styles/ButtonStyle'
import { Input } from '../styles/InputStyle'
import { Item } from '../styles/TaskItemStyle'

interface EditTaskItemProps {
   task: TaskInterface
   changeTask: () => void
}

const EditTaskItem = ({ task, changeTask }: EditTaskItemProps) => {
   const [value, setValue] = useState<string>('')
   const dispatch = useDispatch()

   const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }, [])

   const confirmChanges = useCallback(() => {
      dispatch(editTask(task.id, value))
      changeTask()
   }, [changeTask, dispatch, value, task.id])

   return (
      <Item>
         <Input onChange={handleInput} value={value} type="text" />
         <Button onClick={confirmChanges}>Переписать</Button>
      </Item>
   )
}

export default EditTaskItem
