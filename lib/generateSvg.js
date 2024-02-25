const { Square, Circle, Triangle } = require('./shapes')

// Function to generate SVG content based on user input
const generateSvg = (data) => {
    let shape;
    let textPosition;

    //  handle creation of different shape objects based on user input
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

    // Call the renderShape method of the shape object to get the SVG representation of the shape
    const shapeSvg = shape.renderShape();
    
    // Construct the final SVG content combining the shape SVG and text
    return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
            ${shapeSvg}
            <text ${textPosition} text-anchor="middle" fill="${data.textColor}" font-size="80">${data.chars.toUpperCase()}</text>
        </svg>`;
}
module.exports = generateSvg;
