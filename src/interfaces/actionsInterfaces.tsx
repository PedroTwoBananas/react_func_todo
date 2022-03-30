import TaskInterface from '../interfaces/TaskInterface'
import {
   ADD_TASK,
   DELETE_TASK,
   DELETE_ALL_CHECKED,
   MARK_TASK,
   MARK_ALL_TASKS,
   EDIT_TASK,
} from '../redux/types'

interface addTaskInterface {
   type: typeof ADD_TASK
   payload: TaskInterface
}

interface deleteTaskInterface {
   type: typeof DELETE_TASK
   payload: string
}

interface deleteAllCheckedInterface {
   type: typeof DELETE_ALL_CHECKED
   payload?: any
}

interface markTaskInterface {
   type: typeof MARK_TASK
   payload: string
}

interface markAllTasksInterface {
   type: typeof MARK_ALL_TASKS
   payload?: any
}

interface editTaskInterface {
   type: typeof EDIT_TASK
   payload: { id: string; value: string }
}

export type TaskActionsTypes =
   | addTaskInterface
   | deleteTaskInterface
   | deleteAllCheckedInterface
   | markTaskInterface
   | markAllTasksInterface
   | editTaskInterface
