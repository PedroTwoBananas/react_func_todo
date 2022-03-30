import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItemBlock from './TaskItemBlock'

interface TaskListProps {
   tasks: TaskInterface[]
}

const TaskList = ({ tasks }: TaskListProps) => {
   return (
      <ul>
         {tasks.map((task) => {
            return <TaskItemBlock key={task.id} task={task} />
         })}
      </ul>
   )
}

export default React.memo(TaskList)
