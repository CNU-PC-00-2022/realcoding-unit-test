import Calculator from "../../js/calculator/Calculator";

const calc = new Calculator();

// task 1

describe("음수 양수 판단", () => {
    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
        expect(calc.isNegative(7)).toBeFalsy();
    });
    test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
        expect(calc.isNegative(-3)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        expect(calc.isNegative(0)).not.toBe(true);
    });
});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        expect(calc.getDate()).toBeInstanceOf(Date);
    });
});


// task 2


beforeAll(() => {
    console.log("모든 테스트를 실행되기 전 한 번 만 실행된다.");
});

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 한 번 만 실행된다.");
});


// task 3
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