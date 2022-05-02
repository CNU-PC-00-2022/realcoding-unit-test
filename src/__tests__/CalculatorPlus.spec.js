import Calculator from "../js/calculator/Calculator";

describe("사직연산 덧셈 테스트.", () => {
  test("3과 5를 더하면 8이다.", () => {
    const calculator = new Calculator();
    expect(calculator.plus(5, 3)).toEqual(8);
  });
});