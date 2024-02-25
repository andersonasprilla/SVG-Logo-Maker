class Shapes {
constructor(shapeColor){
    this.shapeColor = shapeColor
}
render() {}

setColor(newColor) {
    this.shapeColor = newColor;
  }
}

class Square extends Shapes {
    render(){ 
        return `<rect width="200" height="200" fill="${this.shapeColor}"/>`;
    }   
}

class Circle extends Shapes {
    render() {
        return `<circle cx="150" cy="100" r="100" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    render() {
        return `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}" />`;
    }
}

module.exports = { Square, Circle, Triangle }