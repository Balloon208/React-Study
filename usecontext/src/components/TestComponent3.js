import React, { useContext } from 'react';
import { ColorContext } from '../App.js'
import '../App.css';

function TestComponent3() {
  const color = useContext(ColorContext);
  return (
    <div className="App">
      <h1 className={color}>test</h1>
    </div>
  );
}

export default TestComponent3;
