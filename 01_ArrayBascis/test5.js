function countEven(arr) {
    count=0;

    for(let i=0;i<arr.length;i++){

        if(arr[i]%2===0){
            count++
        }

    }
console.log(count)

    
}
let arr=[10,20,30,40,50]
countEven(arr)

// Q5. Count even numbers

// Logic: Check whether each number is divisible by 2.

// Algorithm:

// Create count = 0.
// Traverse the array.
// Take the current element.
// Check element % 2 === 0.
// If true, increase count.
// Continue until the array ends.
// Print count.