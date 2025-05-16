import { useCallback, useState } from 'react';
import TestComponent1 from './TestComponent1';

function App() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const test = useCallback(() => {
    console.log('test : ' + count);
  }, [count]);

  return (
    <div className="App">
      <button onClick={() => setCount(count + 1)}>
        count is: {count}
      </button>
      <button onClick={() => setCount2(count2 + 1)}>
        count2 is: {count2}
      </button>
      <TestComponent1 test={test} />
    </div>
  );
}

export default App;