import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

describe("사직연산 덧셈 테스트.", () => {

  test("8과 2를 나누면 4이다.", () => {
    expect(calc.divide(8, 2)).toEqual(4);
  });

});