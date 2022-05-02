import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
  test("7에서 4를 빼면 3이다.", () => {
      const calculator = new Calculator();
    expect(calculator.minus(7,4)).toEqual(3);
  });
  test("11에서 27를 빼면 -16이다.", () => {
    const calculator = new Calculator();
    //
  expect(calculator.minus(11,27)).toEqual(-16);
});
});