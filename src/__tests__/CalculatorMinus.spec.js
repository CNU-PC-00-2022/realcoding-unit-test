import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
  test("5와 3를 빼면 2이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(5,3)).toEqual(2);
  });
  test("3와 5를 빼면 -2이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(3,5)).toEqual(-2);
  });
});