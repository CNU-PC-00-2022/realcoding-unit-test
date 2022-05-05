import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
  test("3과 5를 뻬면 -2이다.", () => {
    expect(3 - 5).toEqual(-2);
  });
  test("8과 5를 빼면 2이다.", () => {
    expect(7-5).toEqual(2);
  });
})