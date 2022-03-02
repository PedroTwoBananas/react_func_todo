import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItem from './TaskItem'
import EditTaskItem from './EditTaskItem'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
}

const TaskItemBlock = ({ task, deleteTask }: TaskItemProps) => {
   return (
      <>
         <TaskItem task={task} deleteTask={deleteTask} />
         <EditTaskItem />
      </>
   )
}

export default TaskItemBlock
