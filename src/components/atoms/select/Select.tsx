import { TaskStatusType } from "lib/context/tasks-context/TasksContext";
import { ChangeEventHandler, FunctionComponent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface ISelect {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: ChangeEventHandler<HTMLSelectElement>;
  error?: string;
  register?: UseFormRegister<any>;
  touched?: boolean;
  options: Array<{
    value: TaskStatusType;
    label: string;
  }>;
}

const Select: FunctionComponent<ISelect> = ({
  error,
  touched,
  register,
  options,
  ...selectProps
}) => {
  const hasError = Boolean(error && touched);

  return (
    <div className="relative px-3 py-2 text-sm text-gray-700 bg-gray-100 border-b border-gray-700 rounded-t-md">
      {hasError && (
        <pre className="absolute top-0 left-0 px-3 text-xs text-red-500">
          This field is required
        </pre>
      )}
      <select
        {...selectProps}
        {...register?.(selectProps.name)}
        className="relative w-full h-full p-0 bg-transparent border-none shadow-none focus:outline-none"
      >
        {options?.map((option, index) => (
          <option
            key={`option-${index}-${selectProps.name}`}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
