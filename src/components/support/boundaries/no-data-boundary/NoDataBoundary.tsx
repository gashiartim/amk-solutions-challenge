import { Fragment, FunctionComponent, PropsWithChildren } from "react";

export interface INoDataBoundary extends PropsWithChildren {
  dataLength: number;
}

const NoDataBoundary: FunctionComponent<INoDataBoundary> = ({
  dataLength,
  children,
}) => {
  if (dataLength <= 0)
    return (
      <div className="w-full p-3 mx-auto text-center">
        No more tasks for today, <br /> go get some sleep!
      </div>
    );

  return <Fragment>{children}</Fragment>;
};

export default NoDataBoundary;
