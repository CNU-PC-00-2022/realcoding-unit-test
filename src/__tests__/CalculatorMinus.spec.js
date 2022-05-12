import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
  const calculator = new Calculator();
  test("3과 2를 빼면 1이다.", () => {
    expect(calculator.minus(2, 1)).toEqual(1);
  });
});