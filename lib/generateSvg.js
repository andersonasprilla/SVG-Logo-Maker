const { Square, Circle, Triangle } = require('./shapes')

const generateSvg = (data) => {
    let shape;
    let textPosition;

    switch (data.shape) {
        case 'square':
            shape = new Square(data.shapeColor);
            textPosition = 'x="100" y="120"'
            break;
        case 'circle':
            shape = new Circle(data.shapeColor);
            textPosition = 'x="150" y="125"'
            break;
        case 'triangle':
            shape = new Triangle(data.shapeColor);
            textPosition = 'x="150" y="160"'
            break;
        default:
            throw new Error('Unsupported shape type');
    }

    const shapeSvg = shape.generateSvgElement();
    
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSvg}
            <text ${textPosition} text-anchor="middle" fill="${data.textColor}" font-size="80">${data.chars.toUpperCase()}</text>
        </svg>`;
}
module.exports = generateSvg;
