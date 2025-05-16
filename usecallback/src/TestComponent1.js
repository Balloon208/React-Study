import React, { memo } from 'react';
import './App.css';
import TestComponent2 from './TestComponent2';

function TestComponent1({test}) {
  console.log('TestComponent1 렌더');

  return (
    <div className="App">
      <TestComponent2 test={test}/>
    </div>
  );
}

export default memo(TestComponent1);
