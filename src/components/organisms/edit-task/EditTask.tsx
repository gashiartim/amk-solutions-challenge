import { FunctionComponent, useMemo } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/text-area/TextArea";
import Button from "components/atoms/button/Button";
import Select from "components/atoms/select/Select";
import {
  TaskStatusType,
  useTasksContext,
} from "lib/context/tasks-context/TasksContext";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { statusOptions } from "./status-options";

interface EditTaskFields {
  title: string;
  description: string;
  status: TaskStatusType;
}

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
    status: yup.string().required(),
  })
  .required();

export interface IEditTask {}

const EditTask: FunctionComponent<IEditTask> = (props) => {
  const navigate = useNavigate();
  let { taskId } = useParams() as { taskId: string };
  const { updateTask, tasks } = useTasksContext();

  const taskToEdit = tasks.find((task) => task.id === taskId);

  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    watch,
  } = useForm<EditTaskFields>({
    resolver: yupResolver(schema),
    defaultValues: { ...taskToEdit },
  });

  const status = useMemo(() => watch("status"), []);

  const onSubmit = (data: EditTaskFields) => {
    updateTask({ ...data, id: taskId });
    navigate("/");
    toast.success("Task edited successfully!");
  };

  return (
    <div>
      <h1 className="container my-3 text-lg font-semibold">Edit task</h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="container flex flex-col gap-y-2"
      >
        <Input
          id="title"
          name="title"
          placeholder="title"
          type="text"
          register={register}
          error={errors.title?.message}
          touched={touchedFields.title}
        />
        <TextArea
          id="description"
          name="description"
          placeholder="description"
          type="text"
          register={register}
          error={errors.description?.message}
          touched={touchedFields.title}
        />

        <Select
          id="status"
          name="status"
          options={statusOptions()[status as keyof typeof statusOptions] || []}
          register={register}
        />
        <Button type="submit">Update Task</Button>
      </form>
      <div className="container p-2 my-2 bg-blue-300 rounded-md">
        <div className="text-sm font-semibold">Task history:</div>
        <div className="flex text-sm gap-x-2">
          {taskToEdit?.history?.map((item) => (
            <span>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditTask;
