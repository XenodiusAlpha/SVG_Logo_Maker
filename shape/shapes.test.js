// import shape classes
const { Circle, Triangle, Square } = require("./shapes");

// Testing for green Triangle shape
describe("Triange test", () => {
  test("Test for Triange shape with green background", () => {
    const shape = new Triangle();
    shape.setColor("green");
    expect(shape.render()).toEqual(
      '<polygon points="150, 18 244, 182 56, 182" fill="green" />'
    );
  });
});

// Testing for black Circle shape
describe("Circle test", () => {
  test("Test for Circle shape with black background", () => {
    const shape = new Circle();
    shape.setColor("black");
    expect(shape.render()).toEqual(
      `<circle cx="150" cy="115" r="80" fill="black" />`
    );
  });
});

// Testing for blue Square shape
describe("Square test", () => {
  test("Test for Square shape with blue background", () => {
    const shape = new Square();
    shape.setColor("blue");
    expect(shape.render()).toEqual(
      `<rect x="55" y="25" width="190" height="190" fill="blue" />`
    );
  });
});