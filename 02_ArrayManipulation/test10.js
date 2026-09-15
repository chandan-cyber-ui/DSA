function countNoRange(arr,x,y) {
    let count=0;

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>=x && arr[i]<=y)
        {
            count++
        }
    }
    console.log(count)

    
}
let arr = [5, 10, 15, 20, 25, 30]
countNoRange(arr,10,25)





// Q20. Count Numbers Between X and Y

// Example:

// arr = [5, 10, 15, 20, 25, 30]

// X = 10
// Y = 25

// Output:

// 4

// Numbers are:

// 10, 15, 20, 25

// Algorithm
// Take the array.
// Take X and Y.
// Create count = 0.
// Start traversing the array.
// Take the current element.
// Check whether the element is between X and Y.
// If yes, increase count by 1.
// Continue until the array ends.
// Print count.