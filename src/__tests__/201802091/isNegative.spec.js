import Calculator from "../../js/calculator/Calculator";

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
})

beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한번만 실행한다.");
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 실행된다.");
});

describe("음수 양수 판단", () => {
    test("isNegative에 5을 넣으면 false를 반환한다.", () => {
        const calculator = new Calculator();
        expect(calculator.isNegative(5)).toBeFalsy();
    });
    test("isNegative에 -5을 넣으면 true를 반환한다.", () => {
        const calculator = new Calculator();
        expect(calculator.isNegative(-5)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다", () => {
        const calculator = new Calculator();
        expect(calculator.isNegative(0)).not.toBeTruthy();
    });
});