const { Square, Circle, Triangle } = require('./shapes')

const generateSvg = (data) => {
    let shape;
    let x_Position;
    let y_position
    let fontSize;

    switch (data.shape) {
        case 'square':
            shape = new Square(data.shapeColor);
            x_Position = '100'
            y_position = '120'
            fontSize = '80'
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
            <text x="${x_Position}" y="${y_position}" text-anchor="middle" fill="${data.textColor}" font-size="${fontSize}">${data.chars.toUpperCase()}</text>
        </svg>`;
}
module.exports = generateSvg;
