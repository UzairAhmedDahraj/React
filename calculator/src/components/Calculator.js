import { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import '../styles/Calculator.css';

const Calculator = () => {
  let [displayValue, setDisplayValue] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      setDisplayValue(evaluateExpression(displayValue));
    } else if (value === 'C') {
      setDisplayValue(''); // Clear display
    } else {
      setDisplayValue((prev) => prev + value);
    }
  };

  const evaluateExpression = (expression) => {
    try {
      // Tokenize the input string by separating numbers and operators
      const tokens = expression.match(/(\d+|\D)/g);

      if (!tokens) return 'Error';

      let currentOperator = null;
      let result = parseFloat(tokens[0]);

      for (let i = 1; i < tokens.length; i++) {
        const token = tokens[i];
        
        if (/\d/.test(token)) {  // If token is a number
          const number = parseFloat(token);
          switch (currentOperator) {
            case '+':
              result += number;
              break;
            case '-':
              result -= number;
              break;
            case '*':
              result *= number;
              break;
            case '/':
              result /= number;
              break;
            default:
              break;
          }
        } else {  // If token is an operator
          currentOperator = token;
        }
      }

      return result.toString();
    } catch (error) {
      return 'Error';
    }
  };

  return (
    <div className="calculator">
      <Display value={displayValue} />
      <div className="buttons">
        {['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'].map((num) => (
          <Button key={num} label={num} onClick={handleButtonClick} type="number" />
        ))}
        
        {['+','-','*','/'].map((op) => (
          <Button key={op} label={op} onClick={handleButtonClick} type="operator" />
        ))}
        <Button label="C" onClick={handleButtonClick} type="function" />
        <Button label="=" onClick={handleButtonClick} type="operator" />
        

      </div>
    </div>
  );
};

export default Calculator;
