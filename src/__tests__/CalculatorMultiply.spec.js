import Calculator from "../js/calculator/Calculator";

describe("사칙연산 곱셈 테스트.", () => {
  test("4와 5를 곱하면 20이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(4, 5)).toEqual(20);
  });
});