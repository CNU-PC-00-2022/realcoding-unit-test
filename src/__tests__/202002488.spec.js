import Calculator from "../js/calculator/Calculator";

beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한번만 실행된다."); // async code
});

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다."); // async code
});

afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
});

describe("음수 양수 판단", () => {
    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
        const calcul = new Calculator();
        expect(calcul.isNegative(7)).toBeFalsy();
    });
    test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
        const calcul = new Calculator();
        expect(calcul.isNegative(-3)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        const calcul = new Calculator();
        expect(calcul.isNegative(0)).not.toBeTruthy();
    });
});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        const calcul = new Calculator();
        expect(calcul.getDate()).toBeInstanceOf(Date);
    });
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});

//추가 과제
/*  jest.fn
    jest.spyOn
    expect.toHaveBeenCalled
    expect.toHaveBeenCalledWith
* */



let calculator = new Calculator();

describe("가상 함수 테스트해보기", () => {
    test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
        const monkFn = jest.fn();
        calculator.customCalculation(monkFn, 'a', 1);
        expect(monkFn).toHaveBeenCalled();
    });
    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        const monkFn = jest.fn();
        calculator.customCalculation(monkFn, 1, 2, 3);
        expect(monkFn).toHaveBeenCalledWith(1, 2, 3);
    });
    test("abs함수는 Math.abs를 호출한다.", () => {
        const spy = jest.spyOn(Math, "abs");
        calculator.abs(-1);
        expect(spy).toBeCalledTimes(1);
    });
});
