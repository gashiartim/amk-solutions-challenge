import classNames from "classnames";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FunctionComponent,
  PropsWithChildren,
} from "react";

export interface IButton
  extends PropsWithChildren,
    DetailedHTMLProps<
      ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    > {
  className?: string;
}

const Button: FunctionComponent<IButton> = ({
  children,
  className,
  ...buttonProps
}) => {
  const buttonClassNames = classNames([
    "w-full px-3 py-3 text-white bg-blue-600 rounded-md",
    className,
  ]);

  return (
    <button {...buttonProps} className={buttonClassNames}>
      {children}
    </button>
  );
};

export default Button;
