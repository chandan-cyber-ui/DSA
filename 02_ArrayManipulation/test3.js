function EvenArray(arr) {
    let even=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            even.push(arr[i])
        }
    }
    console.log(even)
}
let arr=[11,20,33,5,50];
EvenArray(arr)
