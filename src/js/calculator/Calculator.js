export class DivideZeroError extends Error {
  constructor() {
    super("0으로는 나눌 수 없지");
    this.name = "Divide Zero Error";
  }
}

class Calculator {
  plus = (a, b) => {
    return a + b;
  };
<<<<<<< HEAD
 
  minus = (a, b) => {
    return a - b;
  };
  
=======

  minus = (a, b) => {
    return a - b;
  };

>>>>>>> da4856cf9a9fced66f678b3f3ae01b9c2aca557b
  multiply = (a, b) => {
    return a * b;
  };

  divide = (a, b) => {
    if (b == 0) {
      throw new DivideZeroError();
    } else {
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
