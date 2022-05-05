import Calculator from "../js/calculator/Calculator";

const calc = new Calculator();

describe("사직연산 뺄셈 테스트.", () => {
  test("8과 5를 뻬면 3이다.", () => {
    expect(calc.minus(8, 5)).toEqual(3);
  });
});