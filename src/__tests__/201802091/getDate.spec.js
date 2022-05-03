import Calculator from "../../js/calculator/Calculator";

beforeEach(() => {
    console.log("각 테스트를 실행하기 전 실행된다.");
});

afterEach(() => {
    console.log("각 테스트가 완료된 후 실행된다.");
})

beforeAll(() => {
    console.log("모든 테스트를 실행하기 전 한번만 실행한다.");
});

afterAll(() => {
    console.log("모든 테스트가 완료된 후 실행된다.");
});

describe("Date 클래스 판단하기", () => {
    test("getDate를 하면 Date객체가 나온다.", () => {
        const calculator = new Calculator();
        expect(calculator.getDate()).toBeInstanceOf(Date);
    });
});