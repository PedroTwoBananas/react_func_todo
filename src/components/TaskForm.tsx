import uniqid from 'uniqid'
import React, { useState, useCallback } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import { TaskFormBlock } from '../styles/TaskFormStyle'
import { Button } from '../styles/ButtonStyle'
import { Input } from '../styles/InputStyle'

interface TaskFormProps {
   addTask: (value: TaskInterface) => void
}

const TaskForm = ({ addTask }: TaskFormProps) => {
   const [textTask, setTextTask] = useState<string>('')

   const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setTextTask(e.currentTarget.value)
   }, [])

   const createTask = useCallback(() => {
      const initialTask = {
         id: uniqid(),
         description: textTask,
         isDone: false,
      }
      addTask(initialTask)
      setTextTask('')
   }, [addTask, textTask])
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
