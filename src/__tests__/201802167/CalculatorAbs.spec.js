import Calculator from "../js/calculator/Calculator";

beforeAll(() => {
  console.log('절댓값 판단 테스트 시작!')
});
afterAll(() => {
  console.log('절댓값 판단 테스트 종료!')
});
beforeEach(() => {
  console.log('절댓값 판단 테스트 전 실행 됨');
});
afterEach(() => {
  console.log('절댓값 판단 테스트 후 실행 됨');
})

describe("절댓값 판단하기", () => {
  test("abs에 -3을 넣으면 3을 반환한다.", () => {
    const calculator = new Calculator();
    expect(calculator.abs(-3)).toEqual(3);
  });
  test("abs에 3을 넣으면 3을 반환한다.", () => {
    const calculator = new Calculator();
    expect(calculator.abs(3)).toEqual(3);
  });
});