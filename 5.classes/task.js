class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix() {
        this.state =  this.state * 1.5
    }
    set state(value) {
        if (value < 0) {
            this._state = 0;
        }
        else if (value > 100) {
            this._state = 100;
        }
        else {
            this._state = value;
        }
    }
    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(...args) {
        super(...args);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, ...args) {
        super(...args);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(...args) {
        super(...args);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }
    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }
    findBookBy(type, value) {
        let filtred_books
        switch(type) {
            case "releaseDate":
                filtred_books = this.books.filter(book => book.releaseDate == value);
                break;
            case "type":
                filtred_books = this.books.filter(book => book.type == value);
                break;
            case "author":
                filtred_books = this.books.filter(book => book.author == value);
                break;
            case "pagesCount":
                filtred_books = this.books.filter(book => book.pagesCount == value);
                break;
            case "name":
                filtred_books = this.books.filter(book => book.name == value);
                break;
            case "state":
                filtred_books = this.books.filter(book => book.state == value);
                break;
        }
        if (filtred_books.length >= 1) {
            return filtred_books[0];
        }
        else {
            return null
        }
    }
    
    giveBookByName(bookName) {
        let indexBook = -1
        indexBook = this.books.findIndex(book => book.name == bookName)
        if (indexBook != -1) {
            let book = this.books.splice(indexBook, 1)[0]
            return book
        }
        else {
            return null
        }
    }
}


class Student{
    constructor (name, gender, age) {
        this.name = name,
        this.age = age,
        this.gender = gender;
        this.marks = {}
    }
    addMark(mark_value, subject){
        if (0 > mark_value > 5) {
            return undefined
        } 
        if (this.marks[subject] == undefined) {
            this.marks[subject] = [mark_value]
        }
        else {
            this.marks[subject].push(mark_value)
        }
    }
    exclude(reason) {
        delete this.marks;
        this.excluded = reason;
    }
    getAverageBySubject(subject) {
        if (this.marks[subject]) {
            let sum = 0;
            for (const item in this.marks[subject]){
                sum += this.marks[subject][item];
            }
            return Number(sum / this.marks[subject].length);
        }
        else {
            return "Несуществующий предмет"
        }
    }
    getAverage() {
        let sum = 0;
        let length = 0;
        for (const subject in this.marks) {
            for (const item in this.marks[subject]){
                sum += this.marks[subject][item]
                length += 1
            }
        }
        return Number(sum / length);
    }
}
