import Calculator, { DivideZeroError }from "../js/calculator/Calculator";

const calc = new Calculator();


describe("사직연산 나눗셈 테스트.", () => {
    test("8과 4를 나누면 2이다.", () => {
        expect(calc.divide(8, 4)).toEqual(2);
    });
    test("0으로 나누면 에러가 발생한다.", () => {
        expect(() => calc.divide(8, 0)).toThrowError(DivideZeroError);
    });
});