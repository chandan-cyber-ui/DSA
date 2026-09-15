function sumOfArray(arr) {

    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i]

    }
    console.log(sum)
    
}
let arr=[10,20,30,40,50]
sumOfArray(arr);

// Q3. Find sum of elements

// Logic: Keep one variable to store the total.

// Algorithm:

// Create sum = 0.
// Start from index 0.
// Take current element.
// Add it to sum.
// Move to the next index.
// Repeat until the array ends.
// Print sum.