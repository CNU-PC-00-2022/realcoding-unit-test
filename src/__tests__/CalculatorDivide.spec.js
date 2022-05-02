import Calculator from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("8 나누기 2를 하면 4이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(8, 2)).toEqual(4);
  });
});
