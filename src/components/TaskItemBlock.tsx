import React, { useState, useCallback } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItem from './TaskItem'
import EditTaskItem from './EditTaskItem'

interface TaskItemProps {
   task: TaskInterface
}

const TaskItemBlock = ({ task }: TaskItemProps) => {
   const [isEdit, setEdit] = useState<boolean>(false)

   const changeTask = useCallback(() => {
      setEdit((isEdit) => !isEdit)
   }, [])
   return !isEdit ? (
      <TaskItem task={task} changeTask={changeTask} />
   ) : (
      <EditTaskItem task={task} changeTask={changeTask} />
   )
}

export default React.memo(TaskItemBlock)
