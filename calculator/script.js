document.addEventListener('DOMContentLoaded', () => {
  const display = document.getElementById('display');
  const buttons = document.querySelectorAll('button');

  let currentInput = '';
  let operator = null;
  let previousInput = null;

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const value = button.getAttribute('data-value');

      if (value === 'AC') {
        currentInput = '';
        operator = null;
        previousInput = null;
        display.value = '0';
      } else if (value === 'DEL') {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput || '0';
      } else if (value === '=') {
        if (operator && previousInput !== null) {
          currentInput = evaluate(previousInput, currentInput, operator);
          operator = null;
          previousInput = null;
          display.value = currentInput;
        }
      } else if (['+', '-', '*', '/'].includes(value)) {
        if (operator && previousInput !== null) {
          currentInput = evaluate(previousInput, currentInput, operator);
        }
        operator = value;
        previousInput = currentInput;
        currentInput = '';
      } else {
        currentInput += value;
        display.value = currentInput;
      }
    });
  });

  function evaluate(num1, num2, operator) {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    switch (operator) {
      case '+':
        return (n1 + n2).toString();
      case '-':
        return (n1 - n2).toString();
      case '*':
        return (n1 * n2).toString();
      case '/':
        return (n1 / n2).toString();
      default:
        return num2;
    }
  }
});
