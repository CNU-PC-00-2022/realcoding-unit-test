import Calculator from "../js/calculator/Calculator";
beforeAll(() => {
  console.log('곱셈테스트 시작!')
});
afterAll(() => {
  console.log('곱셈테스트 종료!')
});
beforeEach(() => {
  console.log('곱셈테스트 전 실행 됨');
});

afterEach(() => {
  console.log('곱셈테스트 후 실행 됨');
})

describe("사직연산 곱셈 테스트.", () => {
  test("3과 5를 곱하면 15이다.", () => {
    const calculator = new Calculator();
    expect(calculator.multiply(3, 5)).toEqual(15);
  });
});