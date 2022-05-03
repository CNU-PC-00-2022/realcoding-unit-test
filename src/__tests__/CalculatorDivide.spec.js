import Calculator, { DivideZeroError } from "../js/calculator/Calculator";

describe("사직연산 나눗셈 테스트.", () => {
    test("9과 3를 나누면 3이다.", () => {
        expect(9 / 3).toEqual(3);
    });
});

describe("사직연산 나눗셈 테스트.", () => {
    test("0으로 나누면 에러가 발생한다.", () => {
        const calcul = new Calculator();
        expect(() => calcul.divide(9,0)).toThrowError(new Error('0으로는 나눌 수 없지'));
    });
});