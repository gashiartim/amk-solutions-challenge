import Logo from "components/atoms/logo/Logo";
import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

export interface IHeader {}

const Header: FunctionComponent<IHeader> = (props) => {
  const location = useLocation();

  console.log({ location });

  return (
    <div className="container py-2 text-white bg-blue-600">
      <Logo />
    </div>
  );
};

export default Header;
