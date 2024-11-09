// array.reduce((accumulator, currentValue, currentIndex, array) => {
// Return the new accumulator value
// }, initialValue);

const numbers_one = [1, 2, 3, 4, 5];

const sum = numbers_one.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const numbers_two = [10, 20, 30, 40, 50];

const max = numbers_two.reduce((accumulator, currentValue) => {
    return currentValue > accumulator ? currentValue : accumulator;
}, numbers_two[0]);

console.log(max); // Output: 50

// Use Cases for reduce:

// 1. Summing Values: As seen in the first example, reduce is ideal for summing up numbers or aggregating any type of values (like totals, averages, etc.).

// 2. Flattening Arrays: You can flatten multi-dimensional arrays (nested arrays) into a single array.

// 3. Counting Occurrences: As shown in the word count example, reduce can be used to count the frequency of items or track statistics over an array.

// 4. Transforming Data: You can use reduce to transform the structure of data. For example, turning an array of objects into a single object or creating a new data structure.

// 5. Extracting a Value: If you need to extract a specific property or value from an array of objects, reduce can be used to accumulate that value. For example, finding the maximum number in an array of numbers or extracting unique elements.

// 6. Building Complex Data Structures: When you need to aggregate information into a more complex data structure (like creating a lookup table, combining related data into an object, etc.).
