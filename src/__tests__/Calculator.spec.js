import Calculator from "../js/calculator/Calculator";

describe("사칙연산 덧셈 테스트.", () => {
  let a = 5;
  let b = 3;

  test("3과 5를 더하면 8이다.", () => {
    const cal = new Calculator();
    expect(cal.plus(a, b)).toEqual(8);
  });
});
