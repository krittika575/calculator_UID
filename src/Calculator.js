import React, { useState } from 'react';
import './Calculator.css'; // Optional for styling

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(0);

  const handleClick = (value) => {
    setInput(input + value);
  };

  const clearInput = () => {
    setInput('');
    setResult(0);
  };

  const calculate = () => {
    try {
      setResult(eval(input)); // eval for simple arithmetic. Be cautious using eval in real apps
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <p>{input || "0"}</p>
        <h2>{result}</h2>
      </div>
      <div className="keypad">
        <button onClick={clearInput}>C</button>
        <button onClick={() => handleClick('(')}>(</button>
        <button onClick={() => handleClick(')')}>)</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('7')}>7</button>
        <button onClick={() => handleClick('8')}>8</button>
        <button onClick={() => handleClick('9')}>9</button>
        <button onClick={() => handleClick('*')}>*</button>
        <button onClick={() => handleClick('4')}>4</button>
        <button onClick={() => handleClick('5')}>5</button>
        <button onClick={() => handleClick('6')}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
        <button onClick={() => handleClick('1')}>1</button>
        <button onClick={() => handleClick('2')}>2</button>
        <button onClick={() => handleClick('3')}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
        <button className="equals" onClick={calculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
