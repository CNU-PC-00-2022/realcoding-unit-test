import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

describe("사직연산 덧셈 테스트.", () => {

  test("10과 2를 나누면 5이다.", () => {
    expect(calc.divide(10, 2)).toEqual(5);
  });

});