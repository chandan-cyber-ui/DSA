function MaxNumber(arr) {

    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    console.log(max)
    
}
let arr=[10,20,30,40,50]
MaxNumber(arr)


// Q7. Find maximum

// Logic: Assume the first element is maximum, then compare every other element.

// Algorithm:

// Set max = arr[0].
// Start loop from index 1.
// Compare arr[i] with max.
// If arr[i] > max, update max.
// Continue until the array ends.
// Print max.