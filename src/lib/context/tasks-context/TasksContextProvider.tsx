import {
  FunctionComponent,
  PropsWithChildren,
  useEffect,
  useReducer,
} from "react";

import {
  ITask,
  ITasksContext,
  ITasksReducerAction,
  TasksContext,
  TasksReducerActionTypes,
  TasksReducerType,
  tasksContextDefaultValues,
} from "./TasksContext";

const loadTasksFromLocalStorage = (): ITask[] => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const tasksReducer = (
  state: ITasksContext,
  action: ITasksReducerAction
): ITasksContext => {
  const { payload } = action;

  switch (action.type) {
    case TasksReducerActionTypes.LOAD_TASKS_FROM_STORAGE:
      const tasksFromLocalStorage = loadTasksFromLocalStorage();
      return { ...state, tasks: tasksFromLocalStorage };

    case TasksReducerActionTypes.CREATE:
      const tasks = [...state.tasks, { ...payload }];
      return { ...state, tasks };

    case TasksReducerActionTypes.UPDATE:
      const taskIndex = state.tasks.findIndex((task) => task.id === payload.id);
      if (taskIndex === -1) {
        throw new Error("Task does not exist!");
      }

      const taskExists = state.tasks[taskIndex];
      const taskHistory = [...(taskExists?.history || [])];
      if (payload.status !== taskExists.status) {
        taskHistory.push(taskExists.status);
      }

      const updatedTask = { ...taskExists, ...payload, history: taskHistory };
      const updatedTasks = [...state.tasks];
      updatedTasks[taskIndex] = updatedTask;

      return { ...state, tasks: updatedTasks };

    default:
      return state;
  }
};

export interface ITasksContextProviderProps extends PropsWithChildren<{}> {}

const TasksContextProvider: FunctionComponent<ITasksContextProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer<TasksReducerType>(
    tasksReducer,
    tasksContextDefaultValues
  );

  useEffect(() => {
    dispatch({ type: TasksReducerActionTypes.LOAD_TASKS_FROM_STORAGE });
  }, []);

  useEffect(() => {
    if (state.tasks.length) {
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    }
  }, [state.tasks]);

  const addNewTask = (task: ITask) => {
    dispatch({ type: TasksReducerActionTypes.CREATE, payload: task });
  };

  const updateTask = (task: ITask) => {
    dispatch({ type: TasksReducerActionTypes.UPDATE, payload: task });
  };

  const contextValues: ITasksContext = {
    tasks: state.tasks,
    addNewTask,
    updateTask,
  };

  return (
    <TasksContext.Provider value={contextValues}>
      {children}
    </TasksContext.Provider>
  );
};

export default TasksContextProvider;
