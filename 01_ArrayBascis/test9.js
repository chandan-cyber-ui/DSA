function CountPositiveNagative(arr) {

    let positive=0;
    let nagetive=0;
    let countpos=0
     let countneg=0
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>0){
            countpos++
        }
        if(arr[i]<0)
        {
           countneg++
        }
    }
    console.log(countpos)
     console.log(countneg)
    
}
let arr=[-10,20,30,-40,50]
CountPositiveNagative(arr)



// Q9. Count positive and negative numbers

// Logic: Check each number using conditions.

// Algorithm:

// Create positive = 0.
// Create negative = 0.
// Traverse the array.
// If element > 0, increase positive.
// Else if element < 0, increase negative.
// Continue until the array ends.
// Print both counts.
