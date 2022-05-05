import Calculator from "../../js/calculator/Calculator";

describe("음수 양수 판단", () => {
    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
        const calc = new Calculator();
        expect.toBeFalsy(calc.isNegative(7));
    });
    test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
        const calc = new Calculator();
        expect.toBeTruthy(calc.isNegative(-3));
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        const calc = new Calculator();
        expect.not(calc.isNegative(0));
    });
});
describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        const calc = new Calculator();
        expect.toBeInstanceOf(calc.getDate());
    });
});