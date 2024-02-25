class Shapes {
constructor(shapeColor){
    this.shapeColor = shapeColor
}
renderShape() {}

setColor(newColor) {
    this.shapeColor = newColor;
  }
}

class Square extends Shapes {
    renderShape(){ 
        return `<rect width="200" height="200" fill="${this.shapeColor}"/>`;
    }   
}

class Circle extends Shapes {
    renderShape() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}"/>`;
    }
}

class Triangle extends Shapes {
    renderShape() {
        return `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}"/>`;
    }
}

module.exports = { Square, Circle, Triangle }