import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

describe("사직연산 덧셈 테스트.", () => {

  test("6과 2를 나누면 3이다.", () => {
    expect(calc.divide(6, 2)).toEqual(3);
  });

});