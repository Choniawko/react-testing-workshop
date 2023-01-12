import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "./Counter";

test("handle increment", () => {
  render(<Counter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getAllByRole("button");
  fireEvent.click(buttonElement[0]);
  expect(divElement).toHaveTextContent("Counter: 1");
});

test("handle decrement", () => {
  render(<Counter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getAllByRole("button");
  fireEvent.click(buttonElement[1]);
  expect(divElement).toHaveTextContent("Counter: -1");
});
