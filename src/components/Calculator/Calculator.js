import React, {useState} from 'react';
import {View} from 'react-native';
import Display from './Display';
import Button from './Button';
import ButtonRow from './ButtonRow';
import styles from './style';

const Calculator = () => {
  const [displayText, setDisplayText] = useState('');
  const [isResult, setResult] = useState(false);

  const maxInput = () => {
    if (displayText.length >= 200) {
      return true;
    }
    return false;
  };

  const addNumber = char => {
    if (maxInput()) {
      return;
    }
    const lastChar = displayText.substr(-1);
    if (isResult) {
      setResult(!isResult);
      setDisplayText(char);
    } else if (lastChar === ')' || lastChar === '%') {
      setDisplayText(displayText + '×' + char);
    } else {
      setDisplayText(displayText + char);
    }
  };

  const addOperator = char => {
    if (maxInput()) {
      return;
    }
    if (isResult) {
      setResult(!isResult);
    }
    const symbols = ['÷', '×', '-', '+'];
    const lastChar = displayText.substr(-1);
    if (displayText.length === 0 || (lastChar === '(' && char !== '-')) {
      return;
    } else if (symbols.includes(lastChar)) {
      setDisplayText(displayText.substr(0, displayText.length - 1) + char);
    } else {
      setDisplayText(displayText + char);
    }
  };

  const addDecimal = () => {
    if (maxInput()) {
      return;
    }
    const equation = displayText.split(/[÷×\-+(]/);
    const lastNum = equation[equation.length - 1];
    if (lastNum.endsWith(')')) {
      setDisplayText(displayText + '×0.');
    } else if (isResult) {
      setDisplayText('0.');
      setResult(!isResult);
    } else if (lastNum === '') {
      setDisplayText(displayText + '0.');
    } else if (lastNum.indexOf('.') === -1) {
      setDisplayText(displayText + '.');
    } else {
      return;
    }
  };

  const negativePositive = () => {
    if (maxInput()) {
      return;
    }
    if (isResult) {
      setResult(!isResult);
    }
    const equation = displayText.split(/[÷×\-+(]/);
    const lastNum = equation[equation.length - 1];
    const lastNumIndex = displayText.lastIndexOf(lastNum);
    const negativeIndex = displayText.lastIndexOf('(-');
    var leftTotal = displayText.match(/\(/g);
    var rightTotal = displayText.match(/\)/g);
    if (leftTotal) {
      leftTotal = leftTotal.length;
    } else {
      leftTotal = 0;
    }
    if (rightTotal) {
      rightTotal = rightTotal.length;
    } else {
      rightTotal = 0;
    }
    if (leftTotal === rightTotal && displayText.endsWith(')')) {
      setDisplayText(displayText + '×(-');
    } else if (lastNumIndex - negativeIndex === 2 && negativeIndex !== -1) {
      setDisplayText(displayText.substr(0, negativeIndex) + lastNum);
    } else {
      setDisplayText(displayText.substr(0, lastNumIndex) + '(-' + lastNum);
    }
  };

  const addBrackets = () => {
    if (maxInput()) {
      return;
    }
    if (isResult) {
      setResult(!isResult);
    }
    const equation = displayText.split(/[÷×\-+(]/);
    const lastNum = equation[equation.length - 1];
    const lastNumIndex = displayText.lastIndexOf(lastNum);
    var leftTotal = displayText.match(/\(/g);
    var rightTotal = displayText.match(/\)/g);
    const rightIndex = displayText.lastIndexOf(')');
    if (leftTotal) {
      leftTotal = leftTotal.length;
    } else {
      leftTotal = 0;
    }
    if (rightTotal) {
      rightTotal = rightTotal.length;
    } else {
      rightTotal = 0;
    }
    if (lastNum.length !== 0 && rightTotal < leftTotal) {
      setDisplayText(displayText + ')');
    } else if (
      rightIndex > lastNumIndex ||
      (!['+', '-', '×', '÷', '('].includes(displayText.substr(-1)) &&
        displayText.length !== 0)
    ) {
      setDisplayText(displayText + '×(');
    } else {
      setDisplayText(displayText + '(');
    }
  };

  const addPercentage = () => {
    if (maxInput()) {
      return;
    }
    if (isResult) {
      setResult(!isResult);
    }
    const equation = displayText.split(/[÷×\-+(]/);
    const lastNum = equation[equation.length - 1];
    const percentageExist = lastNum.indexOf('%');
    if (percentageExist === -1 && lastNum !== '') {
      setDisplayText(displayText + '%');
    }
  };

  const backspaceDisplay = () => {
    if (displayText.endsWith("NaN")) {
      setDisplayText(displayText.substr(0, displayText.length - 3));
    } else {
      setDisplayText(displayText.substr(0, displayText.length - 1));
    }
  };

  const clearDisplay = () => {
    setDisplayText('');
  };

  const equate = equation => {
    console.log('now doing ' + equation);
    var number1 = parseFloat(equation[0]);
    var number2 = parseFloat(equation[2]);
    switch (equation[1]) {
      case '÷':
        if (number2 === 0) {
          return "Can't divide by zero";
        }
        return number1 / number2;
      case '×':
        return number1 * number2;
      case '-':
        return number1 - number2;
      case '+':
        return number1 + number2;
      default:
        return null;
    }
  };

  const turnNegative = equation => {
    if (equation.length === 1) {
      return equation;
    } else if (equation.length === 2 && equation[0] === '-') {
      return equation.splice(0, 2, equate([0, '-', equation[1]]));
    }
    for (let i = 1; i < equation.length - 2; i++) {
      if (
        equation[i] === '-' &&
        isNaN(equation[i - 1]) &&
        !isNaN(equation[i + 1])
      ) {
        equation.splice(i, 2, equate([0, '-', equation[i + 1]]));
      }
    }
    return equation;
  };

  const turnExponent = equation => {
    if (equation.length < 3) {
      return equation;
    }
    for (let i = 0; i < equation.length; i++) {
      if (equation[i].endsWith('e')) {
        equation.splice(i, 3, equation[i] + equation[i + 1] + equation[i + 2]);
        console.log(equation);
      }
    }
    return equation;
  };

  const calculate = () => {
    if (!displayText) {
      return;
    }
    var equation = displayText.split(/([÷×\-+()%])/g);
    var empty = equation.indexOf('');
    while (empty !== -1) {
      equation.splice(empty, 1);
      empty = equation.indexOf('');
    }
    turnExponent(equation);
    turnNegative(equation);
    console.log('before loop', equation);
    // need to loop this safely
    var left,
      right,
      sub,
      result,
      op,
      perop,
      divop,
      multiop,
      subop,
      plusop,
      initial;
    var count = 0;
    while (equation.length > 1 && count < 10) {
      count++;
      initial = equation.length;
      left = 0;
      right = displayText.length - 1;
      // check which part of equation to look at first
      if (equation.includes('(')) {
        left = equation.lastIndexOf('(');
      }
      if (equation.includes(')')) {
        right = equation.indexOf(')');
      }
      // remove redundant brackets
      if (
        equation.includes('(') &&
        equation.includes(')') &&
        right - left === 2
      ) {
        equation.splice(left, 3, equation[left + 1]);
        console.log(equation);
        continue;
      }
      // find percentage if any
      perop = equation.indexOf('%', left);
      if (perop !== -1 && perop <= right) {
        sub = [equation[perop - 1], '÷', '100'];
        result = equate(sub);
        equation.splice(perop - 1, 2, result);
        if (isNaN(result)) {
          break;
        }
        continue;
      }
      // find operators × and ÷ if any
      divop = equation.indexOf('÷', left);
      multiop = equation.indexOf('×', left);
      if (divop === -1 && multiop !== -1) {
        op = multiop;
      } else if (divop !== -1 && multiop === -1) {
        op = divop;
      } else if (multiop < divop) {
        op = multiop;
      } else {
        op = divop;
      }
      if (op !== -1 && op < right) {
        sub = equation.slice(op - 1, op + 2);
        result = equate(sub);
        equation.splice(op - 1, 3, result);
        if (isNaN(result)) {
          break;
        }
        continue;
      }

      // find operators + and - if any
      plusop = equation.indexOf('+', left);
      subop = equation.indexOf('-', left);
      if (subop === -1 && plusop !== -1) {
        op = plusop;
      } else if (subop !== -1 && plusop === -1) {
        op = subop;
      } else if (plusop < subop) {
        op = plusop;
      } else {
        op = subop;
      }
      if (op !== -1 && op <= right) {
        // check for negative
        sub = equation.slice(op - 1, op + 2);
        result = equate(sub);
        equation.splice(op - 1, 3, result);
        if (isNaN(result)) {
          break;
        }
        continue;
      }
      if (initial === equation.length) {
        break;
      }
    }
    result = equation[0];
    setResult(true);
    if (isNaN(result)) {
      result = NaN;
    }
    setDisplayText(result.toString());
  };

  return (
    <View>
      <Display text={displayText} />
      <View style={styles.buttonPadStyle}>
        <ButtonRow>
          <Button
            label="⌫"
            onPress={backspaceDisplay}
            onLongPress={clearDisplay}
          />
          <Button label="( )" onPress={addBrackets} />
          <Button label="%" onPress={addPercentage} />
          <Button
            label="÷"
            buttonColor="orange"
            onPress={() => addOperator('÷')}
          />
        </ButtonRow>

        <ButtonRow>
          <Button
            label="7"
            buttonColor="white"
            onPress={() => addNumber('7')}
          />
          <Button
            label="8"
            buttonColor="white"
            onPress={() => addNumber('8')}
          />
          <Button
            label="9"
            buttonColor="white"
            onPress={() => addNumber('9')}
          />
          <Button
            label="×"
            buttonColor="orange"
            onPress={() => addOperator('×')}
          />
        </ButtonRow>

        <ButtonRow>
          <Button
            label="4"
            buttonColor="white"
            onPress={() => addNumber('4')}
          />
          <Button
            label="5"
            buttonColor="white"
            onPress={() => addNumber('5')}
          />
          <Button
            label="6"
            buttonColor="white"
            onPress={() => addNumber('6')}
          />
          <Button
            label="-"
            buttonColor="orange"
            onPress={() => addOperator('-')}
          />
        </ButtonRow>

        <ButtonRow>
          <Button
            label="1"
            buttonColor="white"
            onPress={() => addNumber('1')}
          />
          <Button
            label="2"
            buttonColor="white"
            onPress={() => addNumber('2')}
          />
          <Button
            label="3"
            buttonColor="white"
            onPress={() => addNumber('3')}
          />
          <Button
            label="+"
            buttonColor="orange"
            onPress={() => addOperator('+')}
          />
        </ButtonRow>

        <ButtonRow>
          <Button label="+/-" buttonColor="white" onPress={negativePositive} />
          <Button
            label="0"
            buttonColor="white"
            onPress={() => addNumber('0')}
          />
          <Button label="." buttonColor="white" onPress={addDecimal} />
          <Button label="=" buttonColor="orange" onPress={calculate} />
        </ButtonRow>
      </View>
    </View>
  );
};

export {Calculator};
