let person = {
    firstName: 'John', 
    lastName: 'Wick',
    age: 41,
    eyeColor: 'brown'
};

let People = function(fn, ln, a, ec){
    this.firstName = fn;
    this.lastName = ln;
    this.age = a;
    this.eyeColor = ec;
};

let matt = new People("Matt", "Higley", "21", "green");
let chuck = new People ("Professor", "X", "109", "red")

console.log(matt);
console.log(chuck);

People.prototype.nationality = "American";

let person = {
    firstName: 'John',
    lastName: 'Wick',
    age: '41',
    eyeColor: 'brown'
 };
 
 let People = function(fn, ln, a, ec){
    this.firstName = fn,
    this.lastName = ln,
    this.age = a,
    this.eyeColor = ec
    this.greeting = function(ufn){
        return `It's nice to meet you ${ufn}! My name is ${this.firstName}`
    };
 };
 
 let nate = new People('Nate', 'Silva', '19', 'Brown');
 let chuck = new People('Carlos', 'Flores', '21', 'Brown');
 console.log(nate, chuck);
 console.log(nate.greeting('larro'));
 console.log(chuck.greeting('Natkat'));