import React, { memo } from 'react';
import './App.css';

function TestComponent3({test}) {
  console.log('TestComponent3 렌더');

  return (
    <div className="App">
    </div>
  );
}

export default memo(TestComponent3);
