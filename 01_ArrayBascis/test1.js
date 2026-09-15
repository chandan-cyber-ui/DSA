function printElements(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

let arr = [10, 20, 30, 40, 50];

printElements([10, 20, 30, 40, 50]);

// Q1. Print all elements

// Logic: Traverse the array from first index to last index.

// Algorithm:

// Start from index 0.
// Check if index is less than array length.
// Access arr[i].
// Print the element.
// Increase i by 1.
// Repeat until the last element