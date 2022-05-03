import Calculator from "../js/calculator/Calculator";
beforeAll(() => {
  console.log('덧셈 테스트 시작!')
});

afterAll(() => {
  console.log('덧셈 테스트 종료!')
});
beforeEach(() => {
  console.log('덧셈테스트 전 실행 됨');
});

afterEach(() => {
  console.log('덧셈테스트 후 실행 됨');
})

describe("사칙연산 덧셈 테스트.", () => {
  test("3과 5를 더하면 8이다.", () => {
    const calculator = new Calculator();
    expect(calculator.plus(3, 5)).toEqual(8);
  });
});