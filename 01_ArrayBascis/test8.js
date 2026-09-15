function minNumber(arr) {
    let min=arr[0];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
           min=arr[i]
        }
    }
    console.log(min)
}
let arr=[10,20,30,40,50]
minNumber(arr)



// Q8. Find minimum

// Same concept as maximum, but comparison is reversed.

// Algorithm:

// Set min = arr[0].
// Start loop from index 1.
// Compare arr[i] with min.
// If arr[i] < min, update min.
// Continue until the array ends.
// Print min.