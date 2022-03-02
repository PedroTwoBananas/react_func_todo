import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItemBlock from './TaskItemBlock'

interface TaskListProps {
   tasks: TaskInterface[]
   deleteTask: (id: string) => void
}

const TaskList = ({ tasks, deleteTask }: TaskListProps) => {
   return (
      <ul>
         {tasks.map((task) => {
            return (
               <TaskItemBlock
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
               />
            )
         })}
      </ul>
   )
}

export default TaskList
