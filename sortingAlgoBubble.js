// Create an empty array
let numbers = [];

// Prompt user for numbers and push to array
let input = prompt("Enter numbers separated by commas:", "42,25,12,63,48,10,16,5,30,78");
input.split(',').forEach(num => numbers.push(parseInt(num.trim(), 10)));

console.log("Original array:", numbers);

// Bubble Sort function with comparison logging
function bubbleSort(arr) {
    let n = arr.length;
    let swapped;
    for (let i = 0; i < n - 1; i++) {
        swapped = false;
        for (let j = 0; j < n - i - 1; j++) {
            // Corrected template literals with backticks
            console.log(`Comparing ${arr[j]} and ${arr[j + 1]}`);
            if (arr[j] > arr[j + 1]) {
                // Swap
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
                // Corrected template literals with backticks
                console.log(`Swapped: ${arr[j]} and ${arr[j + 1]} -> [${arr.join(', ')}]`);
            }
        }
        if (!swapped) break; // Exit early if no swaps occurred
    }
    return arr; // Return the sorted array
}

// Sort and log the sorted array
let sortedArray = bubbleSort(numbers);
console.log("Sorted array:", sortedArray);
