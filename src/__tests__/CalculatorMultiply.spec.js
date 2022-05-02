import Calculator from "../js/calculator/Calculator";

describe("사직연산 곱셈 테스트.", () => {
  test("6과 3를 곱하면 18이다.", () => {
    const Calculator = new Calculator();
    expect(Calculator.multiply(6, 3)).toEqual(18);
  });
});