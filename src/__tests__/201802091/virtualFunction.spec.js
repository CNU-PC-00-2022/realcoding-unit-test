import Calculator from "../../js/calculator/Calculator";
beforeAll(() => {
    console.log('가상함수 테스트 시작!');
});

afterAll(() => {
    console.log('가상함수 테스트 종료!');
});
beforeEach(() => {
    console.log('가상함수 테스트 전 실행 됨');
});

afterEach(() => {
    console.log('가상함수 테스트 후 실행 됨');
})
describe("가상 함수 테스트해보기.", () => {
    test("customCalculation는 전달 된 함수를 호출한다.", () => {
        const calculator = new Calculator();
        const mockCallback = jest.fn();
        calculator.customCalculation(mockCallback, ["1", "2"]);
        expect(mockCallback).toHaveBeenCalled();
    });
    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        const calculator = new Calculator();
        const mockCallback = jest.fn();
        calculator.customCalculation(mockCallback, [1, 2, 3]);
        expect(mockCallback).toHaveBeenCalledWith([1, 2, 3]);
    });
    test("abs함수는 Math.abs를 호출한다.", () => {
        const calculator = new Calculator();
        const spy = jest.spyOn(Math, "abs");
        calculator.abs(3);
        expect(spy).toBeCalledTimes(1);
    });
});