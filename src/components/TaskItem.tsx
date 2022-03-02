import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import { Button } from '../styles/ButtonStyle'
import { ButtonBlock, Item, TextBlock } from '../styles/TaskItemStyle'

interface TaskItemProps {
   task: TaskInterface
}

const TaskItem = ({ task }: TaskItemProps) => {
   return (
      <Item>
         <TextBlock>
            <span>{task.description}</span>
         </TextBlock>
         <ButtonBlock>
            <Button>Удалить</Button>
            <Button>Отметить как выполнено</Button>
            <Button>Изменить</Button>
         </ButtonBlock>
      </Item>
   )
}

export default TaskItem
