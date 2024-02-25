
const { Square, Circle, Triangle } = require('./shapes')

 describe('Shapes', () => {
    describe('Triangle', () => {
        it('should correctly set the shape color of the triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150,0 0,200 300,200" fill="blue"/>');
        }) 
    })
    describe('Square', () => {
        it('should correctly set the shape color of the square', () => {
            const shape = new Square();
            shape.setColor("green");
            expect(shape.render()).toEqual('<rect width="200" height="200" fill="green"/>');
        }) 
    })
    describe('Circle', () => {
        it('should correctly set the shape color of the circle', () => {
            const shape = new Circle();
            shape.setColor("red");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="red"/>');
        }) 
    })
 })