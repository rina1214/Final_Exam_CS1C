// Get input using prompt 
let numbers = prompt("Enter numbers separated by comma (24,65,21,5,9,32,42,80,57):");
let names = prompt("Enter names separated by comma (Zenvo,Erica,Jordie,Alicia,Rendon):");

// Convert input strings to arrays
numbers = numbers.split(',').map(Number);
// Convert names input to array
names = names.split(',');

// Merge arrays and log
let mergedArray = numbers.concat(names);
// Log the merged array
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order and log
numbers.sort((a,b)=>a-b);
// Reverse the sorted numbers
let sortedNumbers = numbers.toReversed();
// Log the sorted numbers
console.log("Numbers sorted in reverse:", sortedNumbers);

// Sort names alphabetically and log
names.sort();
console.log("Names sorted alphabetically:", names);
