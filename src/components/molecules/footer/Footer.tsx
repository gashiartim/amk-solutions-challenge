import { FunctionComponent } from "react";

export interface IFooter {}

const Footer: FunctionComponent<IFooter> = (props) => {
  return (
    <div className="p-2 mt-5 text-xs italic text-center bg-blue-200">2023</div>
  );
};

export default Footer;
