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
 
=======
  
>>>>>>> dd4c4c0baaaa611615088deb772c9fe8b3d4dd41
  minus = (a, b) => {
    return a - b;
  };
  
  multiply = (a, b) => {
    return a * b;
  };

<<<<<<< HEAD
  divide = (a, b) => {
    if (b == 0) {
      throw new DivideZeroError();
    } else {
      return a / b;
    }
  };

=======
  divide = (a,b) => {
    if(b==0){
      throw new DivideZeroError();
    }else {
      return a / b;
    }
  };
  
>>>>>>> dd4c4c0baaaa611615088deb772c9fe8b3d4dd41
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