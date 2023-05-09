import { TaskStatusType } from "lib/context/tasks-context/TasksContext";

export const statusOptions = () => ({
    todo: [
      {
        label: "ToDo",
        value: TaskStatusType.TODO,
      },
      {
        label: "InProgress",
        value: TaskStatusType.IN_PROGRESS,
      },
    ],
    inprogress: [
      {
        label: "InProgress",
        value: TaskStatusType.IN_PROGRESS,
      },
      {
        label: "InQa",
        value: TaskStatusType.QA,
      },
    ],
    qa: [
      {
        label: "InQa",
        value: TaskStatusType.QA,
      },
      {
        label: "ToDo",
        value: TaskStatusType.TODO,
      },
      {
        label: "Done",
        value: TaskStatusType.DONE,
      },
    ],
    done: [
      {
        label: "Done",
        value: TaskStatusType.DONE,
      },
    ],
  });