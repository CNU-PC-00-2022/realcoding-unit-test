import Calculator from "../js/calculator/Calculator";

describe("사직연산 나누기 테스트.", () => {
  test("10에서 5를 나누면 2이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(10,5).toEqueal(2));
  });
});