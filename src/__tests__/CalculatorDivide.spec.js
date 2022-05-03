import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

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

describe("사칙연산 나눗셈 테스트.", () => {
  test("6을 3으로 나누면 2이다.", () => {
    const calculator = new Calculator();
    expect(calculator.divide(6, 3)).toEqual(2);
  });
  test("6을 0으로 나누면 Error가 발생한다.", () => {
    const calculator = new Calculator();
    expect(() => calculator.divide(6, 0)).toThrowError();
  });
});