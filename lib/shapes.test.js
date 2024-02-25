
const { Square, Circle, Triangle } = require('./shapes')

 describe('Shapes', () => {
    describe('Triangle', () => {
        it('should correctly set the shape color of the triangle', () => {
            const shape = new Triangle();
            shape.setColor("blue");
            expect(shape.render()).toEqual('<polygon points="150,0 0,200 300,200" fill="blue" />');
        }) 
    })
 })