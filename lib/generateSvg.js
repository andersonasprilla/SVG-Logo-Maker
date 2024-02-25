const { Square, Circle, Triangle } = require('./shapes')

// Updated generateSvg function to handle different shapes
const generateSvg = (data) => {
    let shape;
    switch(data.shape) {
        case 'square':
            shape = new Square(data.shapeColor);
            break;
        case 'circle':
            shape = new Circle(data.shapeColor);
            break;
        case 'triangle':
            shape = new Triangle(data.shapeColor);
            break;
        default:
            throw new Error('Unsupported shape type');
    }

    const shapeSvg = shape.generateSvgElement();

    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSvg}
            <text x="50" y="70" text-anchor="middle" fill="${data.textColor}" font-size="20">${data.chars}</text>
        </svg>`;
}
module.exports = generateSvg;
