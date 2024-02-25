class Shapes {
constructor(shapeColor){
    this.shapeColor = shapeColor
}
generateSvgElement() {}
}

class Square extends Shapes {
    generateSvgElement(){   
        return `<rect width="200" height="200" fill="${this.shapeColor}"/>`;
    }
    
}

class Circle extends Shapes {
    generateSvgElement() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    generateSvgElement() {
        return `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Square, Circle, Triangle }