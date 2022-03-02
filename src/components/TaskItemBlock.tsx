import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItem from './TaskItem'
import EditTaskItem from './EditTaskItem'

interface TaskItemProps {
   task: TaskInterface
}

const TaskItemBlock = ({ task }: TaskItemProps) => {
   return (
      <>
         <TaskItem task={task} />
         <EditTaskItem />
      </>
   )
}

export default TaskItemBlock
