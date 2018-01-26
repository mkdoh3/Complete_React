class Person {
    constructor(name = 'Anonymous', age=0) {
        this.name = name;
        this.age = age;
    }
    sayHi() {
        return `Hi. I am ${this.name}.`
    }
    getDescription(){
        return `Hi. I'm ${this.name}. I'm ${this.age} years old!`
    }   
}
//sub classes extend parent classes
class Student extends Person {
    //"construct" the new class bringing in props from the parents class (super)
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major
    }
    //a method can be overridden by defining a method with the same exact name
    getDescription() {
        //but methods from the parent class can still be accessed using super
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }
        return description
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation
    }

    sayHi() {
        let greeting = super.sayHi();
        if(this.homeLocation) {
            return greeting += ` I come from ${this.homeLocation}`
        }
        return greeting;
    }
}

const me = new Traveler('Michael', 30, 'Chicago');

console.log(me.sayHi());

const other = new Traveler(undefined, undefined, 'Outerspace');
console.log(other.sayHi());
