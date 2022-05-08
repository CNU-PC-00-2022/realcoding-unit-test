import Calculator from "../js/calculator/Calculator";

const calc = new Calculator()

/*
    전체 테스트가 실행되기 전, 후의 동작 선언
    각 테스트가 실행되기 전, 후의 동작 선언
 */
beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한번만 실행된다.");
});
afterAll(() => {
    console.log("모든 테스트가 완료된 후 한번만 실행된다.");
});
beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.")
})
afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.")
})


describe("음수 양수 판단", () => {
    test("isNegative에 10을 넣으면 false를 반환한다.", () => {
        expect(calc.isNegative(10)).toBeFalsy();
    });

    test("isNegative에 -4을 넣으면 true를 반환한다.", () => {
        expect(calc.isNegative(-4)).toBeTruthy();
    });
    test("isNegative에 0을 넣으면 true가 아니다.", () => {
        expect(calc.isNegative(0)).not.toBeTruthy();
    });

});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        expect(calc.getDate()).toBeInstanceOf(Date);
    });
});


//추가과제
describe("가상 함수 테스트해보기", () => {
    test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
        const mockfn = jest.fn();
        calc.customCalculation(mockfn);
        expect(mockfn).toHaveBeenCalled();
    });

    test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
        const mockfn = jest.fn();
        calc.customCalculation(mockfn, 1, 2, 3);
        expect(mockfn).toHaveBeenCalledWith(1, 2, 3);
    });

    test("abs함수는 Math.abs를 호출한다.", () => {
        const spyfn = jest.spyOn(Math, "abs");
        calc.abs(3);
        expect(spyfn).toHaveBeenCalled();
    });
})