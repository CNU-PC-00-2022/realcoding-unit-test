import Calculator from "../../js/calculator/Calculator";

beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한 번만 실행");
});

afterAll(() => {
    console.log("모든 테스트를 실행한 후 한 번만 실행");
});

beforeEach(() => {
    console.log("각 테스트 실행시 출력");
  });
  
beforeEach(() => {
    console.log("각 테스트 실행 후 출력");
});

    describe("사직연산 덧셈 테스트.", () => {
        test("3과 5를 더하면 8이다.", () => {
            const calculator = new Calculator();
            expect(calculator.plus(3, 5)).toEqual(8);
        });

    describe("음수 양수 판단", () => {
        test("isNegative에 7을 넣으면 false를 반환한다.", () => {
            const calculator = new Calculator();
            expect(calculator.isNegative(7)).toBeFalsy;
    });

        test("isNegative에 -3을 넣으면 true를 반환한다.", () => {
            const calculator = new Calculator();
            expect(calculator.isNegative(-3)).toBeTruthy;
        });

        test("isNegative에 0을 넣으면 true가 아니다.", () => {
            const calculator = new Calculator();
            expect(calculator.isNegative(0)).not.toBe(true);
    });
        });
        describe("Date 클래스 판단하기", () => { test("getDate를 하면 Date객체가 나온다.", () => {
            const calculator = new Calculator();
            expect(calculator.getDate()).toBeInstanceOf(Date);
    });

    describe("가상 함수 테스트해보기", () => { 
        test("customCalculation는 전달 된 함수를 호출시킨다.", () => {
        
    });
        test("customCalculation에 함수와 1, 2, 3인자를 전달하면, 전달 된 함수가 인자 1, 2, 3을 받아 호출한다.", () => {
             
        });
        test("abs함수는 Math.abs를 호출한다.", () => {
        //
     });
        });

        });

    

});

