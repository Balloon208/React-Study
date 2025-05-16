/* ---------------------------------------------------------------------

  개념 : useContext() hook

  설명 : useContext() 는 컴포넌트에서 Context를 읽고 구독할 수 있는 React Hook입니다.
        Context를 생성하기 위해선 createContext(초기 값) 함수를 사용합니다.
        useContext(context) 를 사용하면 <Context.Provider>의 value로 전달된 값을 읽을 수 있습니다.
        이를 통해 Drilling props를 피할 수 있습니다.
        한마디로, 전역적인 데이터(예: 테마, 사용자 정보 등)를 관리할 때 useContext()가 유용합니다.

        단, 해당 App이 다시 렌더링이 되면 useContext()를 사용한 컴포넌트도 다시 렌더링이 되므로,
        useMemo() 또는 useCallback()을 사용하여 성능을 최적화하는 것이 좋습니다.

----------------------------------------------------------------------- */


import './App.css';
import { createContext } from 'react';
import TestComponent1 from './components/TestComponent1';

export const ColorContext = createContext(null);

function App() {
  return (
    <div className="App">
      <ColorContext.Provider value="red">
        <TestComponent1 />
        <ColorContext.Provider value="blue">
          <TestComponent1 />
        </ColorContext.Provider>
      </ColorContext.Provider>
    </div>
  );
}

export default App;
