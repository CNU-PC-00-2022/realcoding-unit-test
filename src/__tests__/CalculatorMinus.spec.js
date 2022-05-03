import Calculator from "../js/calculator/Calculator";
beforeAll(() => {
    console.log('뺄셈 테스트 시작!')
  });
  
afterAll(() => {
    console.log('뺄셈 테스트 종료!')
  });
beforeEach(() => {
    console.log('뺄셈테스트 전 실행 됨');
  });
  
  afterEach(() => {
    console.log('뺄셈테스트 후 실행 됨');
  })
describe("사칙연산 뺄셈 테스트.", () => {
    test("5에서 3을 빼면 2이다.", () => {
        const calculator = new Calculator();
        expect(calculator.minus(5, 3)).toEqual(2);
    });
});