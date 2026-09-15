function averageArray(arr) {
    let sum=0;

    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]
    }
    let length=arr.length;
    console.log(length)

    let average=sum/length;
    console.log(sum)
     console.log(length)
      console.log(average)
    
}
let arr=[10,20,30,40,50]
averageArray(arr)


// Q4. Find average

// Logic: First find sum, then divide by number of elements.

// Algorithm:

// Create sum = 0.
// Traverse the array.
// Add every element to sum.
// After the loop, get array length.
// Divide sum by length.
// Store the result in average.
// Print average.