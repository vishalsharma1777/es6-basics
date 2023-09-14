/* eslint-disable no-const-assign */
// Use the let keyword in an example function

let x = 1;
if (x == 1) {
  let x = 2;
  console.log('changed value for this scope only', x);
}

console.log('value is same outside the scope', x);

// Use the const keyword in an example function
const y = 1;
if (y == 1) {
  try {
    y = 2;
    console.log(y);
  } catch (err) {
    console.log('TYPE ERROR due to line number 16', err.message);
  }
}
console.log(y);

//Create an arrow function that finds the square of a number
const square = (number) => {
  return number * number;
};
let c = 5;
console.log('Suare of the number ', c, ' : ', square(c));

//Create an arrow function that adds two numbers
const sum = (a, b) => {
  return a + b;
};
let a = 10;
let b = 20;

console.log('Sum of the numbers ', a, ' & ', b, ' is ', sum(a, b));

//Create a multi-line string and then split the string into the corresponding lines and print the lines

const multiLine = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur 
sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
laborum.`;

console.log(multiLine);

multiLine
  .split('\n')
  .forEach((line, index) =>
    console.log('this is line', index + 1, ' : ', line)
  );

//Create a function that calculates the area of a circle. If the radius of the circle is not provided assume
//that the default radius is 5. Use the JavaScript default parameter feature to implement the function

const area = (radius = 5) => {
  return Math.PI * radius * radius;
};

console.log('AREA IF WE PROVIDE RADIUS : ', area(2));
console.log("AREA IF WE DON'T PROVIDE RADIUS : ", area());

//Create a string that prints the name and location of the person in below format:
let person = {
  name: 'Harry Potter',
  location: 'London'
};

console.log(`"${person['name']} is located in ${person['location']}."`);

//- Show an example where an array is destructured using destructuring assignment

let m, n, o, remaining;

[m, n] = [1, 2];
console.log(m);
console.log(n);

[m, n, o = 3] = [1, 2];
console.log(o);

[m, n, ...remaining] = [10, 20, 30, 40, 50];
console.log(remaining);

//Show an example where an object is destructured using destructuring assignment in the function body
function calculateAreaAndPerimeter(rectangle) {
  const { length, breadth } = rectangle;
  const area = length * breadth;
  const perimeter = 2 * (length + breadth);
  return { area, perimeter };
}

const rectangle = { breadth: 5, length: 10 };
const result = calculateAreaAndPerimeter(rectangle);

console.log('Area:', result.area);
console.log('Perimeter:', result.perimeter);

//Show an example where a function argument which is an object is destructured inside the parantheses of the function
function printPlayerDetails({ firstName, jerseyNumber, team }) {
  console.log(`Player Name: ${firstName}`);
  console.log(`Jersey Number: ${jerseyNumber}`);
  console.log(`Team: ${team}`);
}
const player = {
  firstName: 'Virat',
  jerseyNumber: 18,
  team: 'India'
};
printPlayerDetails(player);

//Show an example where enhanced object literals is used.
var firstName = 'Vishal';
var company = 'MountBlue';
var age = 22;
var employee = { firstName, company, age };
console.log(employee);

//Create a function `sum` that takes any number of numbers as arguments and calculates
//the sum of the input numbers using the rest parameter syntax
function unlimtedSum(...numbers) {
  let total = 0;
  for (let number of numbers) {
    total += number;
  }
  return total;
}

console.log(unlimtedSum(1, 2, 3, 4, 5));
console.log(unlimtedSum(1, 3));

//Use the spread syntax to expand an array of numbers and pass the elements of the
//array as arguments to the `sum` function created in the previous example
const testingArray = [10, 20, 30];
console.log(unlimtedSum(...testingArray));

//Use the for..of loop to iterate through all values in an array
const movies = ['jawan', 'jailer', 'kgf', 'znmd'];
for (const movie of movies) {
  console.log(movie);
}

//Iterate through all keys of an object using Object.keys
const testObject = {
  key1: 'value1',
  key2: 'value2',
  key3: 'value3',
  key4: 'value4'
};

const keys = Object.keys(testObject);
for (const key of keys) {
  console.log(key);
}

//Iterate through all values of an object using Object.values
const values = Object.values(testObject);
for (const value of values) {
  console.log(value);
}

//Iterate through all the key / value pairs of an object using Object.entries
const entries = Object.entries(testObject);
for (const [key, value] of entries) {
  console.log(`Key: ${key}, Value: ${value}`);
}
