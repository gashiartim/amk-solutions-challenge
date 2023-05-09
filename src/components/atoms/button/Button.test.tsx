import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button, { IButton } from "./Button";

describe("Button", () => {
  const onClickMock = jest.fn();
  const defaultProps: IButton = {
    onClick: onClickMock,
  };

  it("should render the children prop", () => {
    const children = "Test button";
    render(<Button {...defaultProps}>{children}</Button>);

    expect(screen.getByText(children)).toBeInTheDocument();
  });

  it("should execute the onClick callback when clicked", () => {
    render(<Button {...defaultProps}>Test button</Button>);

    userEvent.click(screen.getByRole("button"));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it("should add a custom className to the button element", () => {
    const customClassName = "custom-class-name";
    render(
      <Button {...defaultProps} className={customClassName}>
        Test button
      </Button>
    );

    expect(screen.getByRole("button")).toHaveClass(customClassName);
  });
});
