import Calculator from "../../js/calculator/Calculator";

beforeAll(() => {
  console.log("모든 테스트를 실행하기 전 한번만 실행된다.");
});

afterAll(() => {
  console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});

beforeEach(() => {
  console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
  console.log("각 테스트가 완료된 후 실행된다.");
});

describe("사직연산 덧셈 테스트.", () => {
  test("3과 5를 더하면 8이다.", () => {
    const calc = new Calculator();
    expect(calc.plus(3, 5)).toEqual(8);
  });
});

describe("사직연산 뺄셈 테스트.", () => {
  test("3과 5를 빼면 -2이다.", () => {
    const calc = new Calculator();
    expect(calc.minus(3, 5)).toEqual(-2);
  });
});