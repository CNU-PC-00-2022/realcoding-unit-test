import Calculator from "../js/calculator/Calculator";

const calc = new Calculator();

describe("사직연산 뺄셈 테스트.", () => {
  test("7에서 4를 빼면 3이다.", () => {
    expect(calc.minus(7,4)).toEqual(3);
  });
  test("11에서 27을 빼면 3이다.", () => {
    expect(calc.minus(11,27)).toEqual(3);
  });
});