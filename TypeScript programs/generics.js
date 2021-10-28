/*
        // Using the Generics:
            TypeScript generics allow you to write the reusable and generalized
            form of functions, classes, and interfaces.

            Suppose you need to develop a function that returns a random element
            in an array of numbers.
*/
function getRandomElement(items) {
    var randomIndex = Math.floor(Math.random() * items.length);
    return items[randomIndex];
}
var numbers = [1, 5, 7, 4, 2, 9];
var randomEle = getRandomElement(numbers);
console.log(randomEle);
