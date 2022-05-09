import Calculator from "../../js/calculator/Calculator";

const calc = new Calculator();

beforeAll(() => {
    console.log("전체 테스트가 실행되기 전 한번만 동작한다.");
});

beforeEach(() => {
    console.log("각 테스트가 실행되기 전 동작한다.");
});

afterEach(() => {
    console.log("각 테스트가 실행된 후 동작한다.");
});

afterAll(() => {
    console.log("전체 테스트가 실행된 후 한번만 동작한다.");
});


describe("음수 양수 판단", () => {
    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
        expect(calc.isNegative(7)).toBeFalsy();
    });
    test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
        expect(calc.isNegative(-3)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        expect(calc.isNegative(0)).not.toBeTruthy();
    });
});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        expect(calc.getDate()).toBeInstanceOf(Date);
    });
});

describe("가상 함수 테스트해보기", () => {
    const callFunction = jest.fn((...args) => {
        var count = 0;
        for (var i in args) {
            count += i;
        }
        return count;
    });
    const customCalFunc = () => calc.customCalculation(callFunction, 1, 2, 3);

    test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
        customCalFunc()
        expect(callFunction).toHaveBeenCalled();
    });

    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        customCalFunc();
        expect(callFunction).toHaveBeenCalledWith(1, 2, 3);

    });
    test("abs함수는 Math.abs를 호출한다.", () => {
        var callABS = jest.spyOn(Math, "abs");
        var result = calc.abs(3);
        expect(callABS).toHaveBeenCalled();
    });
});