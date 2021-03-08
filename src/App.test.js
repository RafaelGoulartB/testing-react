import { fireEvent, getByText, render, screen } from "@testing-library/react";
import App from "./App";

const Button = ({ label, onClick }) => {
  return (
    <button
      testid="my-button"
      aria-label="my-button"
      type="submit"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("should add button in document", () => {
  let called = false;
  const onClick = () => {
    called = true;
  };

  const { getByText, getByTestId, getByLabelText } = render(
    <Button label="MyButton" onClick={onClick} />
  );

  const btnElement = getByLabelText("my-button");
  fireEvent.click(btnElement);

  expect(btnElement).toBeInTheDocument();
  expect(getByText("MyButton")).toBeInTheDocument();
  expect(btnElement).toHaveTextContent("MyButton");
  expect(btnElement).toHaveAttribute("type", "submit");
  expect(called).toBeTruthy();
});
