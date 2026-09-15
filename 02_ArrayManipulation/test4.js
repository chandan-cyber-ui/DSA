function oddNumberArray(arr) {

    let odd=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2!==0)
        {
            odd.push(arr[i])
        }
    }
    console.log(odd)
    
}
let arr=[11,122,23,40,50]
oddNumberArray(arr)


// Q14. Create Array of Odd Numbers

// Example:

// arr = [10, 15, 20, 25, 30]

// Output:

// [15, 25]

// Algorithm
// Take the given array.
// Create an empty array called odd.
// Start the loop from index 0.
// Take the current element.
// Check whether element % 2 !== 0.
// If true, add the element to odd.
// Continue until the array ends.
// Print odd.