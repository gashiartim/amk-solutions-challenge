import { fireEvent, render, screen } from "@testing-library/react";
import { TaskStatusType } from "lib/context/tasks-context/TasksContext";
import Select, { ISelect } from "./Select";

const options: Array<{ value: TaskStatusType; label: string }> = [
  { value: TaskStatusType.TODO, label: "To Do" },
  { value: TaskStatusType.IN_PROGRESS, label: "In Progress" },
  { value: TaskStatusType.DONE, label: "Done" },
];

const defaultProps: ISelect = {
  name: "status",
  options,
};

describe("Select", () => {
  it("should render without errors", () => {
    render(<Select {...defaultProps} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("should render all the options", () => {
    render(<Select {...defaultProps} />);
    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  it("should call onChange when the value is changed", () => {
    const onChange = jest.fn();
    render(<Select {...defaultProps} onChange={onChange} />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "in-progress" },
    });
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
