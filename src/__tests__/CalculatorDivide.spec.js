import Calculator, {DivideZeroError} from "../js/calculator/Calculator";

const cal = new Calculator();

describe('사칙연산 나눗셈 테스트', () => {
    test('0으로 나누면 에러가 발생한다.',()=>{
      expect(() => cal.divide(4, 0)).toThrowError(DivideZeroError);
    })
});

describe("사직연산 나눗셈 테스트.", () => {
  let a = 4;
  let b = 2;

  test("분모가 0이 아니다.", () => {
    expect(b).not.toBe(0);
  });

  test("4과 2를 나누면 2이다.", () => {
    expect(cal.divide(a, b)).toEqual(2);
  });
});
