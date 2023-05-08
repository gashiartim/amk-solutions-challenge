import EditTask from "components/organisms/edit-task/EditTask";
import { FunctionComponent } from "react";

export interface IEditTaskPage {}

const EditTaskPage: FunctionComponent<IEditTaskPage> = (props) => {
  return (
    <div>
      <EditTask />
    </div>
  );
};

export default EditTaskPage;
