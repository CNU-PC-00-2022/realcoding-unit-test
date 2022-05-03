import Calculator from "../js/calculator/Calculator";

describe("사직연산 뺄셈 테스트.", () => {
    test("9에서 5를 빼면 4이다.", () => {
        const calculator = new Calculator();
        expect(calculator.minus(9, 5)).toEqual(4);
    });
});