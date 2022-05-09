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

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Data 객체가 나온다.", () => {
    const calculator = new Calculator();
    expect(calculator.getDate()).toBeInstanceOf(Date);
  });
});

describe("abs에 대한 테스트 코드", () => {
  test("3의 절댓값은 3이다.", () => {
    const calculator = new Calculator();
    expect(calculator.abs(3)).toEqual(3);
  });
  test("-1의 절댓값은 1이다.", () => {
    const calculator = new Calculator();
    expect(calculator.abs(-1)).toEqual(1);
  });
});

describe("가상 함수 테스트", () => {
  test("customCalculation은 전달된 함수를 호출한다.", () => {
    const calculator = new Calculator();
    const mockCallback = jest.fn();
    calculator.customCalculation(mockCallback, ["a", "b"]);
    expect(mockCallback).toHaveBeenCalled();
  });
  test("customCalculation에 함수와 인자 1, 2, 3을 전달하면, 함수가 인자를 받아 호출한다.", () => {
    const calculator = new Calculator();
    const mockCallback = jest.fn();
    calculator.customCalculation(mockCallback, [1, 2, 3]);
    expect(mockCallback).toHaveBeenCalledWith([1, 2, 3]);
  });
  test("abs 함수는 Math.abs를 호출한다.", () => {
    const calculator = new Calculator();
    const spy = jest.spyOn(Math, "abs");
    calculator.abs(0);
    expect(spy).toBeCalledTimes(1);
  });
});
