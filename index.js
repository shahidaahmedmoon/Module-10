
//---------------------1----------------------

function calculateSum(a, b) {
    return a + b;
}
console.log(calculateSum(3, 5));  // Output: 8




//---------------------2-----------------------

function isEven(number) {
    return number % 2 === 0;
}
console.log(isEven(7));  // Output: false





//----------------------3----------------------

function findMax(array) {
    return Math.max(...array);
}
console.log(findMax([1, 2, 3, 4, 5]));  // Output: 5





//----------------------4----------------------

function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("12345"));  // Output: "54321"





//----------------------5----------------------

function filterOddNumbers(array) {
    return array.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([-10, -21, 3, 40, 5]));  // Output: [-21, 3, 5]





//----------------------6---------------------

function sumArray(array) {
    return array.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5]));  // Output: 15





//----------------------7---------------------

function sortArray(array) {
    return array.slice().sort((a, b) => a - b);
}
console.log(sortArray([5, 3, 8, 1, 2]));  // Output: [1, 2, 3, 5, 8]





//----------------------8----------------------

function capitalizeFirstLetter(str) {
    if (str.length === 0) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeFirstLetter("hello"));  // Output: "Hello"
