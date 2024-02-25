class Shapes {
constructor(shapeColor){
    this.shapeColor = shapeColor
}
generateSvgElement() {}
}

class Square extends Shapes {
    generateSvgElement(){
        
        return `<rect width="80" height="80" fill="${this.shapeColor}"/>`;
    }
    
}

class Circle extends Shapes {
    generateSvgElement() {
        return `<circle cx="40" cy="40" r="40" fill="${this.shapeColor}" />`;
    }
}

class Triangle extends Shapes {
    generateSvgElement() {
        return `<polygon points="50,15 20,80 80,80" fill="${this.shapeColor}" />`;
    }
}


module.exports= { Square, Circle, Triangle }