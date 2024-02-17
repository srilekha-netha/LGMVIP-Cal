// App.js

import React, { useState } from 'react';
import './App.css';

function App() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'AC') {
      clearInput();
    } else {
      setExpression(prevExpression => prevExpression + value);
    }
  };

  const clearInput = () => {
    setExpression('');
  };

  const calculateResult = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression('Error');
    }
  };

  return (
    <div className="calculator-wrapper">
      <h1 className="calculator-heading">My Calculator</h1>
      <div className="calculator">
        <input
          type="text"
          className="calculator-screen"
          value={expression}
          readOnly
        />
        <div className="calculator-keys">
          <button onClick={() => handleClick('1')}>1</button>
          <button onClick={() => handleClick('2')}>2</button>
          <button onClick={() => handleClick('3')}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
          <button onClick={() => handleClick('4')}>4</button>
          <button onClick={() => handleClick('5')}>5</button>
          <button onClick={() => handleClick('6')}>6</button>
          <button onClick={() => handleClick('-')}>-</button>
          <button onClick={() => handleClick('7')}>7</button>
          <button onClick={() => handleClick('8')}>8</button>
          <button onClick={() => handleClick('9')}>9</button>
          <button onClick={() => handleClick('*')}>*</button>
          <button onClick={() => handleClick('0')}>0</button>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick('AC')}>AC</button>
          <button onClick={calculateResult}>=</button>
          <button onClick={() => handleClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
