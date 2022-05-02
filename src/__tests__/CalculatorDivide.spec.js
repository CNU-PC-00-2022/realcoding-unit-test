import Calculator from "../js/calculator/Calculator";

describe("사칙연산 나눗셈 테스트.", () => {
  test("6을 3으로 나누면 2이다.", () => {
    expect(6 / 3).toEqual(2);
  });
});