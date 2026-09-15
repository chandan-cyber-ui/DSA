function reverseElement(arr) {

    for(let i=arr.length-1;i>=0;i--){
        console.log(arr[i])
    }
    
}
let arr=[10,20,30,40,50]
reverseElement(arr)

// Q2. Print elements in reverse

// Logic: Start from the last index and move backward.

// Algorithm:

// Find the last index: length - 1.
// Start loop from the last index.
// Access arr[i].
// Print the element.
// Decrease i by 1.
// Stop when i becomes less than 0