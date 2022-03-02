import React, { useCallback } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import { Button } from '../styles/ButtonStyle'
import { ButtonBlock, Item, TextBlock } from '../styles/TaskItemStyle'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markTask: (id: string) => void
   changeTask: () => void
}

const TaskItem = ({
   task,
   deleteTask,
   markTask,
   changeTask,
}: TaskItemProps) => {
   const clickToDelete = useCallback(() => {
      deleteTask(task.id)
   }, [deleteTask, task.id])

   const clickToMark = useCallback(() => {
      markTask(task.id)
   }, [markTask, task.id])

   const clickToChange = useCallback(() => {
      changeTask()
   }, [changeTask])

   return (
      <Item>
         <TextBlock>
            <span>{task.description}</span>
         </TextBlock>
         <ButtonBlock>
            <Button onClick={clickToDelete}>Удалить</Button>
            {!task.isDone && (
               <>
                  <Button onClick={clickToMark}>Отметить как выполнено</Button>
                  <Button onClick={clickToChange}>Изменить</Button>
               </>
            )}
         </ButtonBlock>
      </Item>
   )
}

export default TaskItem
