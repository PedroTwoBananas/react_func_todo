import React from 'react'
import TaskInterface from '../interfaces/TaskInterface'
import TaskItemBlock from './TaskItemBlock'

interface TaskListProps {
   tasks: TaskInterface[]
   deleteTask: (id: string) => void
   markTask: (id: string) => void
}

const TaskList = ({ tasks, deleteTask, markTask }: TaskListProps) => {
   return (
      <ul>
         {tasks.map((task) => {
            return (
               <TaskItemBlock
                  key={task.id}
                  task={task}
                  deleteTask={deleteTask}
                  markTask={markTask}
               />
            )
         })}
      </ul>
   )
}

export default TaskList
