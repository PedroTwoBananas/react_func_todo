import React from 'react'
import { Button } from '../styles/ButtonStyle'
import { Input } from '../styles/InputStyle'
import { Item } from '../styles/TaskItemStyle'

const EditTaskItem = () => {
   return (
      <Item>
         <Input type="text" />
         <Button>Переписать</Button>
      </Item>
   )
}

export default EditTaskItem
