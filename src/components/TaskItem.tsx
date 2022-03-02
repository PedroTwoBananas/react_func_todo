import React from 'react'
import { Button } from '../styles/ButtonStyle'
import { ButtonBlock, Item, TextBlock } from '../styles/TaskItemStyle'

const TaskItem = () => {
   return (
      <Item>
         <TextBlock>
            <span>1</span>
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
