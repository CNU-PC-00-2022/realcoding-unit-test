import Calculator from "../../js/calculator/Calculator";
beforeAll(() => {
    console.log('클래스 테스트 시작!')
});

afterAll(() => {
    console.log('클래스 테스트 종료!')
});
beforeEach(() => {
    console.log('클래스 테스트 전 실행 됨');
});

afterEach(() => {
    console.log('클래스 테스트 후 실행 됨');
})
describe("클래스 비교 테스트.", () => {

    test("c1과 c2 클래스는 서로 같다.", () => {
        const calculator = new Calculator();
        expect(new calculator.getDate()).toBeInstanceOf(Date);
    });
});