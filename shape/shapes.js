// declaring a class called Shape to be used with other classes.
class Shape {
    // define the constructor
    constructor(){
        this.color = "";
    }
    // class specific function to set the color
    setColor(color){
        this.color = color;
    }
}

// declaring a class of Circle that uses the Shape class with it's function and adds to it. 
class Circle extends Shape {
    render(){
        // defines the shape of the svg circle to be returned.
        return `<circle cx="80" cy="150" r="115" fill="${this.color}" />`;
    }
}

// declaring a class of Triangle that uses the Shape class with it's function and adds to it. 
class Triangle extends Shape {
    render(){
        // defines the shape of the svg triangle to be returned.
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
}

// declaring a class of Square that uses the Shape class with it's function and adds to it. 
class Square extends Shape {
    render(){
        // defines the shape of the svg rectangle to be returned.
        return `<rect x="55" y="25" width="190" height="190" fill="${this.color}" />`;
    }
}

// exports the classes of Circle, Triangle, and Square to be used in index.js.
module.exports = { Circle, Triangle, Square };
