import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

describe("사칙연산 나눗셈 테스트.", () => {
    test("6에서 3을 나누면 2다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(6, 3)).toEqual(2);
    });

    test("10에서 5을 나누면 2다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(10, 5)).toEqual(2);
    });

    test("100에서 10을 나누면 10이다.", () => {
        const calculator = new Calculator();
        expect(calculator.divide(100, 10)).toEqual(10);
    });

    test("0으로는 나눌 수 없지롱", () => {
        const calculator = new Calculator();
        expect(() => {
            calculator.divide(100, 0)
        }).toThrowError(DivideZeroError);
    });

    test("0으로는 나눌 수 없지롱2", () => {
        const calculator = new Calculator();
        expect(() => {
            calculator.divide(10, 0)
        }).toThrowError(DivideZeroError);
    });
});