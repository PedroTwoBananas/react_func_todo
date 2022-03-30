import TaskInterface from '../interfaces/TaskInterface'
import {
   ADD_TASK,
   DELETE_TASK,
   DELETE_ALL_CHECKED,
   MARK_TASK,
   MARK_ALL_TASKS,
   EDIT_TASK,
} from './types'
import {TaskActionsTypes} from '../interfaces/actionsInterfaces'

export function addTask(task: TaskInterface): TaskActionsTypes {
   return {
      type: ADD_TASK,
      payload: task,
   }
}

export function deleteTask(id: string): TaskActionsTypes {
   return {
      type: DELETE_TASK,
      payload: id,
   }
}

export function deleteAllChecked(): TaskActionsTypes {
   return { type: DELETE_ALL_CHECKED }
}

export function markTask(id: string): TaskActionsTypes {
   return {
      type: MARK_TASK,
      payload: id,
   }
}

export function markAllTasks(): TaskActionsTypes {
   return { type: MARK_ALL_TASKS }
}

export function editTask(id: string, value: string): TaskActionsTypes {
   return {
      type: EDIT_TASK,
      payload: { id: id, value: value },
   }
}
