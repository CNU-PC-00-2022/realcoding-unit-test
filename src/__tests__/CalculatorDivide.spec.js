import Calculator from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("9를 3으로 나누면 3이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(9, 3)).toEqual(3);
  });
  test("0으로 나누면 에러가 발생한다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(9, 0)).toEqual(0);
  });
});
