import Calculator from "../js/calculator/Calculator";

beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한번만 실행된다.");
});

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});


describe("음수 양수 판단", () => {
    const cal = new Calculator();
    test("isNegative에 8을 넣으면 false를 반환한다.", () => {
        expect(cal.isNegative(8)).toBeFalsy();
    });
    test("isNegative에 -2을 넣으면 false를 반환한다.", () => {
        expect(cal.isNegative(-2)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        expect(cal.isNegative(0)).not.toBeTruthy();
    });
});

describe("Data 클래스 판단하기", () => {
    test("getDate를 하면 Date 객체가 나온다.", () => {
        const cal = new Calculator();
        expect(cal.getDate()).toBeInstanceOf(Date);
    })
});

describe("가상 함수 테스트해보기", () => {
    const cal = new Calculator();
    test("customCalculation는 전달된 함수를 호출시킨다.", () => {
        const calculator = new Calculator();
        const mockFunction = jest.fn(); 
        calculator.customCalculation(mockFunction);
        expect(mockFunction).toHaveBeenCalled();
    });
    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        const calculator = new Calculator();
        const mockFunction = jest.fn();
        calculator.customCalculation(mockFunction, 1, 2, 3);
        expect(mockFunction).toHaveBeenCalledWith(1, 2, 3);
    });
    test("abs함수는 Math.abs를 호출한다.", () => {
        const calculator = new Calculator();
        const mockMathAbs = jest.spyOn(Math, "abs"); 
        calculator.abs(3); 
        expect(mockMathAbs).toHaveBeenCalled();
    });
});

