// Prompt user for names and ages
let names = prompt("Names:", "Genevieve,Juan,Luna,Gabriel,Elise");
let ages = prompt("Ages:", "24,65,21,5,9");

// Converting input strings into an arrays
names = names.split(',').map(name => name.trim());
ages = ages.split(',').map(age => parseInt(age.trim(), 10));

// Creating a  multi-dimensional array
let multi_Dimentional_Array = [names, ages];

// Restructuring  to (name, age) pairs
let restructuredArray = [];
for (let i = 0; i < names.length; i++) {
    restructuredArray.push([names[i], ages[i]]);
}

// Log each (name, age) pair per line
restructuredArray.forEach(pair => {
    console.log(pair);
});
