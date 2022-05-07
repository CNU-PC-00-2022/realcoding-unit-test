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
        expect(calc.isNegative(0)).not.toBe(true);
    });
});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        expect(calc.getDate()).toBeInstanceOf(Date);
    });
});