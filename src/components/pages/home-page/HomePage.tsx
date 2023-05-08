import CreateTask from "components/organisms/create-task/CreateTask";
import TaskList from "components/organisms/task-list/TaskList";
import { Fragment, FunctionComponent } from "react";

export interface IHomePage {}

const HomePage: FunctionComponent<IHomePage> = (props) => {
  return (
    <Fragment>
      <CreateTask />
      <TaskList />
    </Fragment>
  );
};

export default HomePage;
