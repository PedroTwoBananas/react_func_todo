import {
   ADD_TASK,
   DELETE_TASK,
   DELETE_ALL_CHECKED,
   MARK_TASK,
   MARK_ALL_TASKS,
   EDIT_TASK,
} from './types'

import { TaskActionsTypes } from '../interfaces/actionsInterfaces'
import TaskInterface from '../interfaces/TaskInterface'

const initialState: { tasks: TaskInterface[] } = {
   tasks: [],
}

export const tasksReducer = (
   state = initialState,
   { type, payload }: TaskActionsTypes
): { tasks: TaskInterface[] } => {
   switch (type) {
      case ADD_TASK:
         return {
            ...state,
            tasks: [...state.tasks, payload],
         }

      case DELETE_TASK:
         return {
            ...state,
            tasks: state.tasks.filter((task) => task.id !== payload),
         }

      case DELETE_ALL_CHECKED:
         return {
            ...state,
            tasks: state.tasks.filter((task) => !task.isDone),
         }

      case MARK_TASK:
         return {
            ...state,
            tasks: state.tasks.map((task) => {
               if (task.id !== payload) return task
               return { ...task, isDone: true }
            }),
         }

      case MARK_ALL_TASKS:
         return {
            ...state,
            tasks: state.tasks.map((task) => {
               if (task.isDone) return task
               return { ...task, isDone: true }
            }),
         }

      case EDIT_TASK:
         const { id, value } = payload

         return {
            ...state,
            tasks: state.tasks.map((task) => {
               if (task.id !== id) return task
               return { ...task, description: value }
            }),
         }

      default:
         return state
   }
}
