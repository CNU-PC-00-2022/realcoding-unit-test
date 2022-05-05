import Calculator from "../js/calculator/Calculator";

describe("사칙연산 곱셈 테스트.", () => {
  test("6에서 3을 곱하면 18이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(3, 6)).toEqual(18);
  });
});
