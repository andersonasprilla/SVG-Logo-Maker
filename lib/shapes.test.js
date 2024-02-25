
const { Square, Circle, Triangle } = require('./shapes')

 describe('Shapes', () => {
    describe('Square', () => {
        it('should correctly set the shape color of the square', () => {
            const square = new Square();
            square.setColor("green");
            expect(square.renderShape()).toEqual('<rect width="200" height="200" fill="green"/>');
        }) 
    })
    describe('Circle', () => {
        it('should correctly set the shape color of the circle', () => {
            const circle = new Circle();
            circle.setColor("red");
            expect(circle.renderShape()).toEqual('<circle cx="150" cy="100" r="100" fill="red"/>');
        }) 
    })
    describe('Triangle', () => {
        it('should correctly set the shape color of the triangle', () => {
            const triangle = new Triangle();
            triangle.setColor("blue");
            expect(triangle.renderShape()).toEqual('<polygon points="150,0 0,200 300,200" fill="blue"/>');
        }) 
    })
 })