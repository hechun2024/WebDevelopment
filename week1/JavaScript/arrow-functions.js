// Scenario 1: Basic Function:
const sayHelloArrow = () => "Hello, world!";
console.log(sayHelloArrow()); 

// Scenario 2: Single Parameter:
const doubleArrow = x => x * 2;
console.log(doubleArrow(4));  

// Scenario 3: Multiple Parameters:
const addArrow = (x, y) => x + y;
console.log(addArrow(3, 5)); 
 
// Scenario 4: Function Inside an Object:
const personArrow = {
    name: "Alice",
    sayHi: () => "Hi, " + this.name + "!" // 'this' will not work as expected here
};
console.log(personArrow.sayHi());   



// Scenario 5: Callback Functions:
const numbers = [1, 2, 3, 4, 5];
const doubled = [];
numbers.forEach(num =>  doubled.push(num * 2));
console.log("Numbers:", numbers);
console.log("Doubled:", doubled);
