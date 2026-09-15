function sumEvenNo(arr) {
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            sum=sum+arr[i]
        }
    }
    console.log(sum)
}
let arr = [10, 15, 20, 25, 30]
sumEvenNo(arr)


// Q15. Find Sum of Even Numbers

// Example:

// arr = [10, 15, 20, 25, 30]

// Output:

// 60

// Because:

// 10 + 20 + 30 = 60

// Algorithm
// Take the given array.
// Create a variable sum = 0.
// Start the loop from index 0.
// Take the current element.
// Check whether the element is even.
// If even, add it to sum.
// Continue until the array ends.
// Print sum.