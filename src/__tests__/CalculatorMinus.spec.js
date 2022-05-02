import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
  test("7에서 5를 빼면 2이다.", () => {
    expect(7 - 5).toEqual(2);
  });
});
