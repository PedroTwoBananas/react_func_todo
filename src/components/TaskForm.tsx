import React from 'react'
import { TaskFormBlock } from '../styles/TaskFormStyle'
import { Button } from '../styles/ButtonStyle'
import { Input } from '../styles/InputStyle'

const TaskForm = () => {
   return (
      <TaskFormBlock>
         <Input type="text" placeholder="Введите задачу" />
         <Button>Добавить</Button>
      </TaskFormBlock>
   )
}

export default TaskForm
