import Calculator from "../../js/calculator/Calculator";

describe("음수 양수 판단", () => {
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    const cal = new Calculator();
    expect(cal.isNegative(7)).toBeFalsy;
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    const cal = new Calculator();
    expect(cal.isNegative(-3)).toBeTruthy;
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    const cal = new Calculator();
    expect(cal.isNegative(7)).toBeTruthy;
  });
});
