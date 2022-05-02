import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

describe("사직연산 덧셈 테스트.", () => {

  test("10과 2를 더하면 12이다.", () => {
    expect(calc.plus(10, 2)).toEqual(12);
  });

});