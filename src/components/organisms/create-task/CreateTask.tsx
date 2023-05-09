import { FunctionComponent } from "react";
import { v4 as uuidv4 } from "uuid";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/text-area/TextArea";
import Button from "components/atoms/button/Button";
import {
  TaskStatusType,
  useTasksContext,
} from "lib/context/tasks-context/TasksContext";
import { toast } from "react-toastify";

interface CreateTaskFields {
  title: string;
  description: string;
}

const schema = yup.object({
  title: yup.string().required(),
  description: yup.string().required(),
});

interface ICreateTaskProps {}

const CreateTask: FunctionComponent<ICreateTaskProps> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
    reset,
  } = useForm<CreateTaskFields>({
    resolver: yupResolver(schema),
  });
  const { addNewTask } = useTasksContext();

  const onSubmit = (data: CreateTaskFields) => {
    const taskId = uuidv4();
    const newTask = { ...data, id: taskId, status: TaskStatusType.TODO };
    addNewTask(newTask);
    reset();
    toast.success("Task created successfully!");
  };

  return (
    <div className="">
      <h1 className="container my-3 text-lg font-semibold">Add a new task</h1>

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
        <Button type="submit">Create Task</Button>
      </form>
    </div>
  );
};

export default CreateTask;
