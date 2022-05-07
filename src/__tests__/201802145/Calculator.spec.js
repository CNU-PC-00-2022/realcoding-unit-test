import Calculator from "../../js/calculator/Calculator";

const cal = new Calculator();

describe("음수 양수 판단", () => {
  test("isNegative에 7을 넣으면 false를 반환한다.", () => {
    expect(cal.isNegative(7)).toBeFalsy();
  });
  test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
    expect(cal.isNegative(-3)).toBeTruthy();
  });
  test("isNegative에 0을 넣으면 true가 아니다.", () => {
    expect(cal.isNegative(0)).not.toBeTruthy();
  });
});

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Date객체가 나온다.", () => {
    expect(cal.getDate()).toBeInstanceOf(Date);
  });
});

describe("Date 클래스 판단하기", () => {
  test("getDate를 하면 Date객체가 나온다.", () => {
    expect(cal.getDate()).toBeInstanceOf(Date);
  });
});
/**
 * 추가 과제
 */
describe("가상 함수 테스트해보기", () => {
  const spyCallBack = jest.fn((...args) => {
    var sum = 0;
    for (var i in args) {
      sum += i;
    }
    return sum;
  });
  const customCal = () => cal.customCalculation(spyCallBack, 1, 2, 3);

  test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
    customCal();
    expect(spyCallBack).toHaveBeenCalled();
  });
  test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
    customCal();
    expect(spyCallBack).toHaveBeenCalledWith(1, 2, 3);
  });
  test("abs함수는 Math.abs를 호출한다.", () => {
    const spyAbs = jest.spyOn(Math, "abs");
    const result = cal.abs(3);
    expect(spyAbs).toHaveBeenCalled();
  });
});

beforeAll(() => {
  console.log("모든 테스트를 실행하기 전 한번만 실행됩니당.");
});

beforeEach(() => {
  console.log("각 테스트를 실행하기 전 실행될까요.");
});

afterEach(() => {
  console.log("각 테스트가 완료된 후 실행되었어요.");
});

afterAll(() => {
  console.log("모든 테스트가 완료된 후 한번만 실행 끝.");
});
