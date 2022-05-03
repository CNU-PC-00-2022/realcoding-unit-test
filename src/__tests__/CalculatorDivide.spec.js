import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

describe("사칙연산 나눗셈 테스트.", () => {
  test("6을 3으로 나누면 2이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 3)).toEqual(2);
  });
  test("6을 0으로 나누면 Error가 발생한다.", () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(6, 0)).toThrowError();
  });
});