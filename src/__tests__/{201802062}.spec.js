import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

beforeAll(() => {
  console.log("모든 테스트를 실행하기 전 한 번만 실행된다.");
});

afterAll(() => {
  console.log("모든 테스트를 완료한 후 한 번만 실행된다.");
});

beforeEach(() => {
  console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
  console.log("각 테스트를 완료한 후 실행된다.");
});

describe("음수 양수 판단.", () => {

  test("isNagative에 7을 넣으면 false를 반환한다.", () => {
    expect(calc.isNegative(7)).toBeFalsy();
  });

  test("isNagative에 -2을 넣으면 true를 반환한다.", () => {
    expect(calc.isNegative(-2)).toBeTruthy();
  });

  test("isNagative에 0을 넣으면 true가 아니다", () => {
    expect(calc.isNegative(0)).not.toBeTruthy();
  });
});

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Date객체가 나온다.", () => {
    expect(calc.getDate()).toBeInstanceOf(Date);
  });
});

describe("가상 함수 테스트해보기", () => {
  test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
    const custom_func = jest.fn();
    calc.customCalculation(custom_func);
    expect(custom_func).toHaveBeenCalled();
  });


  test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
    const custom_func = jest.fn();
    calc.customCalculation(custom_func, 1, 2, 3);
    expect(custom_func).toHaveBeenCalledWith(1, 2, 3);
  });

  test("abs함수는 Math.abs를 호출한다.", () => {
    const spy_func = jest.spyOn(Math, "abs");
    calc.abs(3);
    expect(spy_func).toHaveBeenCalled();
  });
})