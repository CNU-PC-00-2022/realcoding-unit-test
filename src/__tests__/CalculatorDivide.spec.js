import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("8 나누기 2를 하면 4이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(8, 2)).toEqual(4);
  });
});

describe('사칙연산 나눗셈 테스트', () => { 
  test('0으로 나누면 에러가 발생한다.', () => {
    const calculator = new Calculator();
    try {
      calculator.divide(8, 0);
    } catch(e) {
      expect(e.name).toBe("Divide Zero Error");
    }
  }) 
});