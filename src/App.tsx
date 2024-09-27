import { useEffect } from 'react';
import { useCounterStore } from './store';

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log('count: ', count);
};

const setCount = () => {
  useCounterStore.setState((prev) => ({ ...prev, count: 1 }));
};

const OtherComponent = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.increment);
  const incrementAsync = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);
  console.log('OtherComponent rerendered')

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

const TimerComponent = () => {
  const timer = useCounterStore((state) => state.timer);
  const setTimer = useCounterStore((state) => state.setTimer);
  console.log('TimerComponent rerendered')
  return (
    <div>
      {timer}
      <div>
        <button onClick={() => setTimer(5)}>Set timer</button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <>
      <OtherComponent />
      <TimerComponent />
    </>
  );
};

export default App;
