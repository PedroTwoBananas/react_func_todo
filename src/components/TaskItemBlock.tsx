import React, { useState, useCallback } from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItem from './TaskItem'
import EditTaskItem from './EditTaskItem'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markTask: (id: string) => void
   editTask: (id: string, value: string) => void
}

const TaskItemBlock = ({
   task,
   deleteTask,
   markTask,
   editTask,
}: TaskItemProps) => {
   const [isEdit, setEdit] = useState<boolean>(false)

   const changeTask = useCallback(() => {
      setEdit((isEdit) => !isEdit)
   }, [])
   return !isEdit ? (
      <TaskItem
         task={task}
         markTask={markTask}
         deleteTask={deleteTask}
         changeTask={changeTask}
      />
   ) : (
      <EditTaskItem editTask={editTask} task={task} changeTask={changeTask} />
   )
}

export default TaskItemBlock
