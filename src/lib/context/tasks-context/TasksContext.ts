import { Reducer, createContext, useContext } from "react";

export enum TaskStatusType {
  "TODO" = "todo",
  "IN_PROGRESS" = "inprogress",
  "QA" = "qa",
  "DONE" = "done",
}

export interface ITask {
  id: string;
  title: string;
  description: string;
  status: TaskStatusType;
  history?: Array<string>;
}

export interface ITasksContext {
  tasks: Array<ITask>;
  addNewTask: (task: ITask) => void;
  updateTask: (task: ITask) => void;
}

export const tasksContextDefaultValues: ITasksContext = {
  tasks: [],
  addNewTask: () => {},
  updateTask: () => {},
};

export const TasksContext = createContext(tasksContextDefaultValues);

export const useTasksContext = () => useContext(TasksContext);

export enum TasksReducerActionTypes {
  "CREATE" = "create",
  "UPDATE" = "update",
  "LOAD_TASKS_FROM_STORAGE" = "load_tasks_from_storage",
}

export type TasksReducerActionType = TasksReducerActionTypes;

export interface ITasksReducerAction {
  type: TasksReducerActionType;
  payload?: any;
}

export type TasksReducerType = Reducer<ITasksContext, ITasksReducerAction>;
