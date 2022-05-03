import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
  const cal = new Calculator();
  test("5과 3를 빼면 2이다.", () => {
    expect(cal.minus(5, 3)).toEqual(2);
  });
});