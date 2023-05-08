import { ChangeEventHandler, FunctionComponent } from "react";
import { UseFormRegister } from "react-hook-form";

export interface ITextArea {
  id?: string;
  name: string;
  label?: string;
  placeholder?: string;
  type?: "text" | "password";
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  error?: string;
  register?: UseFormRegister<any>;
  touched?: boolean;
}

const TextArea: FunctionComponent<ITextArea> = ({
  register,
  touched,
  error,
  ...textAreaProps
}) => {
  const hasError = Boolean(error && touched);

  return (
    <div className="relative px-3 py-2 overflow-hidden text-base text-gray-700 bg-gray-100 border-b border-gray-700 rounded-t-md">
      {hasError && (
        <pre className="absolute top-0 left-0 px-3 text-xs text-red-500">
          This field is required
        </pre>
      )}
      <textarea
        {...textAreaProps}
        className="w-full h-full bg-transparent rounded-md focus:outline-none"
        {...register?.(textAreaProps.name)}
      />
    </div>
  );
};

export default TextArea;
