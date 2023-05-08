import TaskCard from "components/molecules/task-card/TaskCard";
import { FunctionComponent } from "react";

export interface ITaskList {}

const TaskList: FunctionComponent<ITaskList> = (props) => {
  return (
    <div className="mt-4 bg-blue-600 rounded-t-lg">
      <h2 className="container my-2 text-white">Tasks</h2>
      <div className="container grid grid-cols-2 gap-3 py-2 bg-blue-200 rounded-t-lg pt-7">
        <TaskCard
          title="Task title goes here"
          description="Task description goes here if text is more than 3 paragraphs it is trimmed."
        />
        <TaskCard
          title="Task title goes here"
          description="Task description goes here if text is more than 3 paragraphs it is trimmed."
        />
        <TaskCard
          title="Task title goes here"
          description="Task description goes here if text is more than 3 paragraphs it is trimmed."
        />
        <TaskCard
          title="Task title goes here"
          description="Task description goes here if text is more than 3 paragraphs it is trimmed."
        />
      </div>
    </div>
  );
};

export default TaskList;
