import { FunctionComponent } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "components/atoms/input/Input";
import TextArea from "components/atoms/text-area/TextArea";
import Button from "components/atoms/button/Button";

interface CreateTaskFields {
  title: string;
  description: number;
}

const schema = yup
  .object({
    title: yup.string().required(),
    description: yup.string().required(),
  })
  .required();

export interface ICreateTask {}

const CreateTask: FunctionComponent<ICreateTask> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors, touchedFields },
  } = useForm<CreateTaskFields>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: CreateTaskFields) => console.log(data);

  return (
    <div>
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
