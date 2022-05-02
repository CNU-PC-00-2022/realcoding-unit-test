class Calculator {
  plus = (a, b) => {
    return a + b;
  };
  minus = (a, b) => {
    return a - b;
  };
  multiply = (a, b) => {
    return a * b;
  };
  divide = (a, b) => {
    if (b == 0) {
      return '0으로 값을 나눌 수 없습니다.'
    }
    return a / b;
  } ;
}

export default Calculator;
