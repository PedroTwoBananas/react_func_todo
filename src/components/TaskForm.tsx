import uniqid from 'uniqid'
import React, { useState, useCallback } from 'react'
import { TaskFormBlock } from '../styles/TaskFormStyle'
import { Button } from '../styles/ButtonStyle'
import { Input } from '../styles/InputStyle'
import { addTask } from '../redux/actions'
import { useDispatch } from 'react-redux'

const TaskForm = () => {
   const [textTask, setTextTask] = useState<string>('')

   const dispatch = useDispatch()

   const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setTextTask(e.currentTarget.value)
   }, [])

   const createTask = useCallback(() => {
      const initialTask = {
         id: uniqid(),
         description: textTask,
         isDone: false,
      }
      dispatch(addTask(initialTask))
      setTextTask('')
   }, [dispatch, textTask])
   return (
      <TaskFormBlock>
         <Input
            type="text"
            placeholder="Введите задачу"
            value={textTask}
            onChange={handleInput}
         />
         <Button onClick={createTask}>Добавить</Button>
      </TaskFormBlock>
   )
}

export default TaskForm
