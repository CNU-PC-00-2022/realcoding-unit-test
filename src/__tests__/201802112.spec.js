import Calculator from "../js/calculator/Calculator";

describe("음수 양수 판단", () => {
    const cal = new Calculator();
    test("isNegative에 7을 넣으면 false를 반환한다.", () => {
        expect(cal.isNegative(7));
    });
    test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
        expect(cal.isNegative(-3));
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        expect(cal.isNegative(0)).toEqual(false);
    });
});

describe("Date 클래스 판단하기", () => {
    const cal = new Calculator();
    test("getDate를 하면 Date객체가 나온다.", () => {
        expect(cal.getDate());
    });
});