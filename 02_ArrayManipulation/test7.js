function largest(arr) {

let largestno=arr[0]
for(let i=0;i<arr.length;i++)
{
    if(arr[i]>largestno)
    {
        largestno=arr[i]
    }
}
console.log(largestno)
    
}
let arr=[11, 24, 8, 35, 42, 17]
largest(arr)