import TaskCard from "components/molecules/task-card/TaskCard";
import NoDataBoundary from "components/support/boundaries/no-data-boundary/NoDataBoundary";
import { useTasksContext } from "lib/context/tasks-context/TasksContext";
import { FunctionComponent } from "react";

export interface ITaskList {}

const TaskList: FunctionComponent<ITaskList> = (props) => {
  const { tasks } = useTasksContext();
  return (
    <div className="mt-4 bg-blue-600 rounded-t-lg">
      <h2 className="container my-2 text-white">Tasks</h2>
      <div className="py-2 bg-blue-200 rounded-t-lg pt-7">
        <NoDataBoundary dataLength={tasks.length}>
          <div className="container grid grid-cols-2 gap-3 lg:grid-cols-6">
            {tasks.map((task, index) => (
              <TaskCard {...task} key={`task-${task.id}-${index}`} />
            ))}
          </div>
        </NoDataBoundary>
      </div>
    </div>
  );
};

export default TaskList;
