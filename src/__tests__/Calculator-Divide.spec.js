import Calculator from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
  test("9를 3으로 나누면 3이다.", () => {
    expect(9 / 3).toEqual(3);
  });
});