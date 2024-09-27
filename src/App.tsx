import { useCounterStore } from './store';

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  return (
    <div>
      {count}
      <div>
        <button onClick={increment}>Increment</button>
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
