import Calculator from "../js/calculator/Calculator";

describe("사칙연산 뺄셈 테스트.", () => {
  test("100에 9를 빼면 91이다.", () => {
    const calculator = new Calculator();
    expect(calculator.minus(100, 9)).toEqual(91);
  });
});
