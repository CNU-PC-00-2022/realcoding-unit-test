import Calculator from "../js/calculator/Calculator";

beforeAll(() => {
  console.log('음수 양수 판단 테스트 시작!')
});
afterAll(() => {
  console.log('음수 양수 판단 테스트 종료!')
});
beforeEach(() => {
  console.log('음수 양수 판단 테스트 전 실행 됨');
});
afterEach(() => {
  console.log('음수 양수 판단 테스트 후 실행 됨');
})

describe("음수 양수 판단", () => {
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    const calculator = new Calculator();
    expect(calculator.isNegative(7)).toBeFalsy();
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    const calculator = new Calculator();
    expect(calculator.isNegative(-3)).toBeTruthy();
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    const calculator = new Calculator();
    expect(calculator.isNegative(0)).not.toBeTruthy();
  });
});
