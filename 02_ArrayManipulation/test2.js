function copyArray(arr) {

    let copy=[];
    for(let i=0;i<arr.length;i++)
    {
        copy.push(arr[i])
    }
    console.log(copy)
}
let arr=[10,20,30,40,50];
copyArray(arr)

// Q12. Copy an Array

// Example:

// arr = [10, 20, 30, 40]

// Output:

// copy = [10, 20, 30, 40]

// Algorithm
// Take the given array.
// Create an empty array called copy.
// Start the loop from index 0.
// Visit each element.
// Add the current element to copy.
// Continue until the last element.
// Print copy.