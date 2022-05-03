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

  divide = (a,b) => {
    if(b==0){
      return false;
    }else {
      return a / b;
    }
  };

  isNegative = (a) => {
    return a < 0;
  };

  getDate = () => {
    return new Date();
  };

  abs = (a) => {
    return Math.abs(a);
  };

  customCalculation = (callback, ...args) => {
    callback(...args);
  };
}

export default Calculator;
