function sumOfOddNo(arr) {

    let sum=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===1)
        {
            sum=sum+arr[i]
        }
    }
    console.log(sum)
    
}
let arr = [10, 15, 20, 25, 30]
sumOfOddNo(arr)



// 🟢 Q16. Find Sum of Odd Numbers

// Example:

// arr = [10, 15, 20, 25, 30]

// Output:

// 40

// Because:

// 15 + 25 = 40

// Algorithm
// Take the given array.
// Create sum = 0.
// Start the loop from index 0.
// Take the current element.
// Check whether the element is odd.
// If odd, add it to sum.
// Continue until the array ends.
// Print sum.