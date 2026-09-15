function searchTarget(arr) {
    let target=30;
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i]===target)
      {
        return i;
      }
    }
    return -1;
}
let arr=[10,20,30,40,50]
let result=searchTarget(arr);
console.log(result)
