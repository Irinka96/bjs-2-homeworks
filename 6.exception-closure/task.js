function parseCount(userNumber) {
    let result = Number.parseInt(userNumber);
    if (isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    else {
        return result;
    }
}

function validateCount (someValue) {
    try {
        return parseCount(someValue);
    }
    catch (error) {
        return error;
    }
}

class Triangle{
    constructor(a, b, c){
        if (a + b > c && a + c > b && b + c > a){
            // сумма двух сторон меньше третьей
            this.a = a;
            this.b = b;
            this.c = c;
        }
        else{
            throw new Error("Треугольник с такими сторонами не существует");
        }
    }

    getPerimeter(){
        let p = this.a + this.b + this.c;
        return p;
    }
    getArea(){
        let p = this.getPerimeter() / 2;
        let area = Math.sqrt(p * (p - this.a)*(p - this.b)*(p - this.c));
        return Number(area.toFixed(3));
    };
};

class BadTriangle{
    message = "Ошибка! Треугольник не существует";
    getArea(){
        return this.message;
    }; 
    getPerimeter(){
        return this.message;
    }; 
};

function getTriangle(a, b, c){
    try{
        let object = new Triangle(a, b, c);
        return object;
    }
    catch(error){
        return new BadTriangle();
    };
};