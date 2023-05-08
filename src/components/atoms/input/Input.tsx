import { ChangeEventHandler, FunctionComponent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface IInput {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: ChangeEventHandler<HTMLInputElement>;
  error?: string;
  register?: UseFormRegister<any>;
  touched?: boolean;
}

const Input: FunctionComponent<IInput> = ({
  register,
  error,
  touched,
  ...inputProps
}) => {
  const hasError = Boolean(error && touched);

  return (
    <div className="relative px-3 py-2 text-sm text-gray-700 bg-gray-100 border-b border-gray-700 rounded-t-md">
      {hasError && (
        <pre className="absolute top-0 left-0 px-3 text-xs text-red-500">
          This field is required
        </pre>
      )}
      <input
        {...inputProps}
        {...register?.(inputProps.name)}
        className="w-full h-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Input;
