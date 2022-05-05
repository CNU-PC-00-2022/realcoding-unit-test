import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()
//test
describe("사칙연산 곱셈 테스트.", () => {

  test("8과 2를 곱하면 16이다.", () => {
    expect(calc.multiply(8, 2)).toEqual(16);
  });

});