import { useEffect } from 'react';
import { useCounterStore } from './store';

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log('count: ', count);
};

const setCount = () => {
  useCounterStore.setState((prev) => ({ ...prev, count: 1 }));
};

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  useEffect(() => {
    logCount();
  }, []);

  useEffect(() => {
    setCount();
  }, []);

  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
      </div>
      <div>
        <button onClick={incrementAsync}>incrementAsync</button>
      </div>
      <div>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
};

const App = () => {
  const count = useCounterStore((state) => state.count);
  return <OtherComponent count={count} />;
};

export default App;
