import Button from "components/atoms/button/Button";
import { FunctionComponent } from "react";

export interface ITaskCard {
  title: string;
  description: string;
}

const TaskCard: FunctionComponent<ITaskCard> = ({ title, description }) => {
  return (
    <div className="p-2 bg-white border border-gray-500 rounded-md shadow-sm">
      <div className="mb-2 text-lg font-medium leading-tight">{title}</div>
      <p className="text-base leading-tight line-clamp-3">{description}</p>
      <div className="flex items-center gap-x-5">
        <Button disabled={true} className="px-1 py-1">
          ToDo
        </Button>
        <Button className="px-1 py-1 !text-black bg-transparent w-min">
          Edit
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
