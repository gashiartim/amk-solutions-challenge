import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "./Input";

describe("Input", () => {
  const defaultProps = {
    name: "inputName",
    placeholder: "Input Placeholder",
  };

  it("should render an input element with the given props", () => {
    render(<Input {...defaultProps} type="text" />);

    const input = screen.getByPlaceholderText("Input Placeholder");
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("type", "text");
  });

  it("should call onChange prop when input value changes", () => {
    const handleChange = jest.fn();
    render(<Input {...defaultProps} onChange={handleChange} type="text" />);

    const input = screen.getByPlaceholderText("Input Placeholder");
    userEvent.type(input, "New Value");
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });

  it("should show error message when error prop is provided", () => {
    render(
      <Input
        {...defaultProps}
        error="This field is required"
        touched
        type="text"
      />
    );

    const errorMessage = screen.getByText("This field is required");
    expect(errorMessage).toBeInTheDocument();
  });
});
