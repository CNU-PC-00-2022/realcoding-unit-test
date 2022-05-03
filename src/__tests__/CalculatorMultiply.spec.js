import Calculator from "../js/calculator/Calculator";

beforeEach(() => {
  console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
  console.log("각 테스트가 완료된 후 실행된다.");
})

beforeAll(() => {
  console.log("모든 테스트를 실행하기 전 한번만 실행한다.");
});

afterAll(() => {
  console.log("모든 테스트가 완료된 후 실행된다.");
});

describe("사직연산 곱셈 테스트.", () => {
  test("3과 5를 곱하면 15이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(3, 5)).toEqual(15);
  });
});