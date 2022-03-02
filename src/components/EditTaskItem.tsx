import React, { useState, useCallback } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import { Button } from '../styles/ButtonStyle'
import { Input } from '../styles/InputStyle'
import { Item } from '../styles/TaskItemStyle'

interface EditTaskItemProps {
   task: TaskInterface
   editTask: (id: string, value: string) => void
   changeTask: () => void
}

const EditTaskItem = ({ task, editTask, changeTask }: EditTaskItemProps) => {
   const [value, setValue] = useState<string>('')

   const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
      setValue(e.currentTarget.value)
   }, [])

   const confirmChanges = useCallback(() => {
      editTask(task.id, value)
      changeTask()
   }, [changeTask, editTask, value, task.id])

   return (
      <Item>
         <Input onChange={handleInput} value={value} type="text" />
         <Button onClick={confirmChanges}>Переписать</Button>
      </Item>
   )
}

export default EditTaskItem
