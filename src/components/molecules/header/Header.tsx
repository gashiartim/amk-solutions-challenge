import Logo from "components/atoms/logo/Logo";
import { FunctionComponent } from "react";

export interface IHeader {}

const Header: FunctionComponent<IHeader> = (props) => {
  return (
    <div className="container py-2 text-white bg-blue-600">
      <Logo />
    </div>
  );
};

export default Header;
