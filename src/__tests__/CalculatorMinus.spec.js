import Calculator from "../js/calculator/Calculator";

describe("사칙연산 뺄셈 테스트.", () => {
    test("5에서 3을 빼면 2이다.", () => {
        expect(5 - 3).toEqual(2);
    });
});