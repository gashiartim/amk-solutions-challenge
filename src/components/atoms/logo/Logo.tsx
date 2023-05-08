import { FunctionComponent } from "react";

export interface ILogo {}

const Logo: FunctionComponent<ILogo> = (props) => {
  return <div className="text-lg">Task Management</div>;
};

export default Logo;
