import { useState, createContext } from 'react';

const { Provider, Consumer: CounterConsumer } = createContext();

function CounterProvider(props) {
  const [count, setCount] = useState(100);

  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <Provider
      value={{
        count: count,
        onIncreaseCount: increaseCount,
        onDecreaseCount: decreaseCount,
      }}
    >
      {props.children}
    </Provider>
  );
}

export { CounterProvider, CounterConsumer };
