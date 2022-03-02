import React, { useCallback } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import { Button } from '../styles/ButtonStyle'
import { ButtonBlock, Item, TextBlock } from '../styles/TaskItemStyle'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
}

const TaskItem = ({ task, deleteTask }: TaskItemProps) => {
   const clickToDelete = useCallback(() => {
      deleteTask(task.id)
   }, [deleteTask, task.id])

   return (
      <Item>
         <TextBlock>
            <span>{task.description}</span>
         </TextBlock>
         <ButtonBlock>
            <Button onClick={clickToDelete}>Удалить</Button>
            <Button>Отметить как выполнено</Button>
            <Button>Изменить</Button>
         </ButtonBlock>
      </Item>
   )
}

export default TaskItem
