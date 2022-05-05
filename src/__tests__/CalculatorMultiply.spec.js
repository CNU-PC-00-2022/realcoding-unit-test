import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

describe("사칙연산 곱셈 테스트.", () => {

    test("3과 5를 곱하면 15이다.", () => {
        expect(calc.multiply(3, 5)).toEqual(15);
    });

});