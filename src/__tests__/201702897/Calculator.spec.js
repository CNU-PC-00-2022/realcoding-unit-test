import Calculator from "../../js/calculator/Calculator";

beforeAll(() => console.log("모든 테스트를 실행하기 전 한번만 실행된다."));
afterAll(() => console.log("모든 테스트가 완료된 후 한번만 실행된다."));
beforeEach(() => console.log("각 테스트가 실행되기 전 실행된다."));
afterEach(() => console.log("각 테스트가 완료된 후 실행된다."));

describe("음수 양수 판단", () => {
  const calculator = new Calculator();
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    expect(calculator.isNegative(7)).toBeFalsy();
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    expect(calculator.isNegative(-3)).toBeTruthy();
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    expect(calculator.isNegative(0)).not.toBeTruthy();
  });
});

describe("Date 클래스 판단하기", () => { 
  const calculator = new Calculator();
  test("getDate를 하면 Date객체가 나온다.", () => {
    expect(calculator.getDate()).toBeInstanceOf(Date)
  });
});


describe("가상 함수 테스트해보기", () => { 
  const calculator = new Calculator();
  test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
    const mock_fn = jest.fn();
    calculator.customCalculation(mock_fn);
    expect(mock_fn).toHaveBeenCalled();
  });
  test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
    const spy_fn = jest.spyOn(calculator, 'plus');
    calculator.customCalculation(calculator.plus, 1, 2, 3);
    expect(spy_fn).toBeCalledWith(1, 2, 3);
  });
  test("abs함수는 Math.abs를 호출한다.", () => {
    const spy_fn = jest.spyOn(global.Math, 'abs');
    calculator.abs(1);
    expect(spy_fn).toHaveBeenCalled();
  });
});