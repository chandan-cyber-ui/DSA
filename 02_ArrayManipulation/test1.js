function reverseArray(arr) {

    let result=[];
    for(let i=arr.length-1;i>=0;i--){
        result.push(arr[i])
    }
    console.log(result)
    
}
let arr=[10,20,30,40,50]
reverseArray(arr);

// Q11. Reverse an Array

// Example:

// arr = [10, 20, 30, 40]

// Output:

// [40, 30, 20, 10]

// Algorithm
// Take the given array.
// Create an empty array called result.
// Start the loop from the last index.
// Move toward index 0.
// Add each element to result.
// After the loop, result contains the reversed array.