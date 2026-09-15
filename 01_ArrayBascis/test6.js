function countOdd(arr) {
    count=0;

    for(let i=0;i<arr.length;i++){

        if(arr[i]%2===1){
            count++
        }

    }
console.log(count)
}
let arr=[10,20,30,40,50]
countOdd(arr)

// Q6. Count odd numbers

// Same idea as Q5, but condition changes.

// Algorithm:

// Create count = 0.
// Traverse the array.
// Take current element.
// Check element % 2 !== 0.
// If true, increase count.
// Continue until the array ends.
// Print count.