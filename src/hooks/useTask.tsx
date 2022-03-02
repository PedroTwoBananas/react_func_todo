import { useCallback, useState } from 'react'
import TaskInterface from '../interfaces/TaskInterface'

export default function useTask() {
   const [tasks, setTasks] = useState<TaskInterface[]>([])

   const addTask = (value: TaskInterface) => {
      setTasks([...tasks, value])
   }

   const deleteTask = useCallback((id: string) => {
      setTasks((prevState) => {
         return prevState.filter((task) => {
            return task.id !== id
         })
      })
   }, [])

   const deleteAllChecked = useCallback(() => {
      setTasks((prevState) => prevState.filter((task) => !task.isDone))
   }, [])

   const markTask = useCallback((id: string) => {
      setTasks((prevState) => {
         return prevState.map((task) => {
            if (task.id !== id) return task
            return { ...task, isDone: true }
         })
      })
   }, [])

   const markAllTasks = useCallback(() => {
      setTasks((prevState) => {
         return prevState.map((task) => {
            if (task.isDone) return task
            return { ...task, isDone: true }
         })
      })
   }, [])

   const editTask = useCallback((id: string, value: string) => {
      setTasks((prevState) => {
         return prevState.map((task) => {
            if (task.id !== id) return task
            return { ...task, description: value }
         })
      })
   }, [])

   return {
      tasks,
      addTask,
      deleteTask,
      deleteAllChecked,
      markTask,
      markAllTasks,
      editTask,
   }
}
