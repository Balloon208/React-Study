/* ---------------------------------------------------------------------

  개념 : useCallback() hook

  설명 : useCallback() 은 컴포넌트가 리렌더링 될 때마다 새로운 함수를 생성하는 것을 방지하기 위해 사용됩니다.

        useCallback(ref, deps)
        - ref : 함수
        - deps : 의존성 배열

        컴포넌트가 리렌더링이 될때마다, 함수는 새로운 주소에 저장되기 때문에
        자식 컴포넌트에 props로 전달할 때, 자식 컴포넌트가 리렌더링이 됩니다.
        useCallback() 을 사용하면, 의존성 배열(deps)에 있는 값이 변경되지 않는 한 같은 주소를 유지합니다.
        따라서 자식 컴포넌트가 리렌더링 되는 것을 방지할 수 있습니다.

        + memo 를 사용하면 컴포넌트의 props가 변경되지 않으면 리렌더링이 되지 않습니다.
        
        이를 통해 Drilling Props를 예방하는 등 성능을 최적화 할 수 있습니다.
        
----------------------------------------------------------------------- */

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