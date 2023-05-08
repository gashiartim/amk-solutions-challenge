import Logo from "components/atoms/logo/Logo";
import { FunctionComponent } from "react";
import { useLocation } from "react-router-dom";

export interface IHeader {}

const Header: FunctionComponent<IHeader> = (props) => {
  const location = useLocation();

  const path = location.pathname === "/" ? "Home" : "Edit";

  return (
    <div className="container flex items-center py-2 text-lg text-white bg-blue-600 gap-x-1">
      <Logo />
      <span>&gt;</span>
      <span>{path}</span>
    </div>
  );
};

export default Header;
