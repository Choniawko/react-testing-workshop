import { useStore } from "./store";

export const GlobalCounter = () => {
  const { count, increment, decrement, reset } = useStore();
  return (
    <div>
      <p role="contentinfo">Counter: {count}</p>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};
