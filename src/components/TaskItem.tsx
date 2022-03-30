import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import TaskInterface from '../interfaces/TaskInterface'
import { deleteTask, markTask } from '../redux/actions'
import { Button } from '../styles/ButtonStyle'
import { ButtonBlock, Item, TextBlock } from '../styles/TaskItemStyle'

interface TaskItemProps {
   task: TaskInterface
   changeTask: () => void
}

const TaskItem = ({ task, changeTask }: TaskItemProps) => {
   const dispatch = useDispatch()

   const clickToDelete = useCallback(() => {
      dispatch(deleteTask(task.id))
   }, [dispatch, task.id])

   const clickToMark = useCallback(() => {
      dispatch(markTask(task.id))
   }, [dispatch, task.id])

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
