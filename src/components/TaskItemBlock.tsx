import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItem from './TaskItem'
import EditTaskItem from './EditTaskItem'

interface TaskItemProps {
   task: TaskInterface
   deleteTask: (id: string) => void
   markTask: (id: string) => void
}

const TaskItemBlock = ({ task, deleteTask, markTask }: TaskItemProps) => {
   return (
      <>
         <TaskItem task={task} deleteTask={deleteTask} markTask={markTask} />
         <EditTaskItem />
      </>
   )
}

export default TaskItemBlock
