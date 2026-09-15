function largestEven() {
    let lergest=null;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            largest=arr[i];
        }
    }
    console.log(largest)
}
let arr = [11, 24, 8, 35, 42, 17]
largestEven(arr)


// Q17. Find Largest Even Number

// Example:

// arr = [11, 24, 8, 35, 42, 17]

// Output:

// 42

// Algorithm
// Take the given array.
// Create a variable to store the largest even number.
// Start traversing the array.
// Check whether the current element is even.
// If it is even, compare it with the current largest value.
// If the current element is greater, update the largest value.
// Continue until the array ends.
// Print the largest even number.