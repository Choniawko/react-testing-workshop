import { useCounter } from "./useCounter";

export const Counter = () => {
  const { count, increment, decrement, reset } = useCounter();
  return (
    <div>
      <p role="contentinfo">Counter: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};
