import { fireEvent, render, screen } from "@testing-library/react";
import { GlobalCounter } from "./GlobalCounter";
import { useStore } from "./store";

const originalState = useStore.getState();
beforeEach(() => {
  useStore.setState(originalState);
});

test("handle increment", () => {
  render(<GlobalCounter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getAllByRole("button");
  fireEvent.click(buttonElement[0]);
  expect(divElement).toHaveTextContent("Counter: 1");
});

test("handle decrement", () => {
  render(<GlobalCounter />);
  const divElement = screen.getByRole("contentinfo");
  const buttonElement = screen.getAllByRole("button");
  fireEvent.click(buttonElement[1]);
  expect(divElement).toHaveTextContent("Counter: -1");
});
