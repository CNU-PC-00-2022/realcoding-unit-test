import Calculator from "../../js/calculator/Calculator";

describe("가상 함수 테스트해보기", () => {
    test("customCalculation는 전달된 함수를 호출시킨다.", () => {
        const calculator = new Calculator();
        const mockFunction = jest.fn();
        calculator.customCalculation(mockFunction);
        expect(mockFunction).toHaveBeenCalled();
    });

    test("customCalculation에 함수와 1, 2, 3 인자를 전달하면, 전달된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        const calculator = new Calculator();
        const mockFunction = jest.fn();
        calculator.customCalculation(mockFunction, 1, 2, 3);
        expect(mockFunction).toHaveBeenCalledWith(1, 2, 3);
    });

    test("abs함수는 Math.abs를 호출한다.", () =>{
        const calculator = new Calculator();
        const mockMathAbs = jest.spyOn(Math, "abs");
        calculator.abs(3);
        expect(mockMathAbs).toHaveBeenCalled();
    })
});

