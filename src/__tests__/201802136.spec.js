import Calculator from "../js/calculator/Calculator";

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