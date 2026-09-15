function countNumber(arr,target) {

    let count=0;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>target)
        {
            count++
        }
    }
    console.log(count)
    
}
let arr = [10, 25, 15, 40, 8]
countNumber(arr,20)



// Q19. Count Numbers Greater Than X

// Example:

// arr = [10, 25, 15, 40, 8]

// X = 20

// Output:

// 2

// Because:

// 25 > 20
// 40 > 20

// Algorithm
// Take the array.
// Take the value X.
// Create count = 0.
// Start traversing the array.
// Take the current element.
// Check whether element > X.
// If true, increase count by 1.
// Continue until the array ends.
// Print count.