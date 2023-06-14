//Task 1: Filter Even Numbers
//Write a function that takes an array of numbers and returns a new array with only the even numbers. For example, if the input array is [1, 2, 3, 4, 5, 6], the output should be [2, 4, 6].

let numbers = [1, 2, 3, 4, 5, 6];
let evenNums = numbers.filter((num) => num % 2 === 0);
console.log(evenNums);

// Task 2: Filter Names with a Specific Length
// Write a function that takes an array of names and a specific length and returns a new array with only the names that have the given length. For example, if the input array is ["John", "Alice", "Bob", "David"] and the length is 4, the output should be ["John", "Alice"].

let names = ['John', 'Alice', 'Bob', 'David'];
let lengthNames = names.filter((name) => name.length === 5);
console.log(lengthNames);

//Task 3: Filter Prime Numbers
//Write a function that takes an array of numbers and returns a new array with only the prime numbers. For example, if the input array is [2, 3, 4, 5, 6, 7], the output should be [2, 3, 5, 7].

// Task 4: Filter Words Starting with a Specific Letter
// Write a function that takes an array of words and a specific letter and returns a new array with only the words that start with the given letter. For example, if the input array is ["apple", "banana", "cherry", "avocado"] and the letter is "a", the output should be ["apple", "avocado"].

let words = ['apple', 'banana', 'cherry', 'avocado'];

let filteredWords = words.filter((word) => word.charAt(0) == 'a');
console.log(filteredWords);

//Task 5: Filter Objects with a Specific Property
// Write a function that takes an array of objects and a specific property name and returns a new array with only the objects that have the given property. For example, if the input array is [{name: "John", age: 25}, {name: "Alice"}, {age: 30}] and the property name is "age", the output should be [{name: "John", age: 25}, {age: 30}].

let ary = [{ name: 'John', age: 25 }, { name: 'Alice' }, { age: 30 }];
let filteredArr = ary.filter((obj) => obj.hasOwnProperty('age'));
console.log(filteredArr);
