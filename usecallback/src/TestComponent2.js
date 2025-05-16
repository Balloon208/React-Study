import React, { memo } from 'react';
import './App.css';
import TestComponent3 from './TestComponent3';

function TestComponent2({test}) {
  console.log('TestComponent1 렌더');

  return (
    <div className="App">
      <TestComponent3 test={test}/>
    </div>
  );
}

export default memo(TestComponent2);
