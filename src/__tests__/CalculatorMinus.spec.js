import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
    test("3과 5를 빼면 -2이다.", () => {
        const calculator = new Calculator();
        expect(calculator.minus(3, 5)).toEqual(-2);
    });
});