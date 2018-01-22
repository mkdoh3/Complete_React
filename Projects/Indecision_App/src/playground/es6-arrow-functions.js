//arguments object is no longer bound with arrow functions
const add = function(a,b) {
  // console.log(arguments)
  return a+b
}
// console.log(add(6,9))

const add2 = (a,b) => {
  // console.log(arguments)
  return a+b
}
// console.log(add2(6,9))


//this keyword is also no longer bind their own this value, they are bound to the this value of the context they were created in

const user = {
  cities: ['Chicago', 'Denver'],
  name: 'Michael',
  //using an arrow function on a method is a bad idea, as the this context will default to the global scope, instead of the object's this
  //instead use this new es6 method declaration.. no function keyword every again >.<!
  printPlacesLived() {    
    // this.cities.forEach(function(city) {
    //   console.log(this.name + ' has lived in ' +city)
    // })
    return this.cities.map(city => this.name + ' has lived in ' + city)
  }
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [2,4,6,8],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map(number => number*this.multiplyBy)
  }
}
console.log(multiplier.multiply());