import Calculator from "../../js/calculator/Calculator";

describe("Date 클래스 판단하기", () => { test("getDate를 하면 Date객체가 나온다.", () => {
    const calc = new Calculator();
    expect(calc.getDate()).toBeInstanceOf(Date)
  });
});