import Calculator from "../js/calculator/Calculator";

const cal = new Calculator();
describe("사칙연산 곱셈 테스트.", () => {
  let a = 3;
  let b = 6;

  test("3과 6을 곱하면 18이다.", () => {
    expect(cal.multiply(a, b)).toEqual(18);
  });
});
