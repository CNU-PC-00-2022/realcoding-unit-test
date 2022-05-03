import Calculator from "../js/calculator/Calculator";

beforeAll(() => {
  console.log('클래스 판단 테스트 시작!')
});
afterAll(() => {
  console.log('클래스 판단 테스트 종료!')
});
beforeEach(() => {
  console.log('클래스 판단 테스트 전 실행 됨');
});
afterEach(() => {
  console.log('클래스 판단 테스트 후 실행 됨');
})

describe("Date 클래스를 판단하기", () => {
  test("getDate를 하면 Date객체가 나온다.", () => {
    const calculator = new Calculator();
    expect(calculator.getDate()).toBeInstanceOf(Date);
  });
});