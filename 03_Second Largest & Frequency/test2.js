function secondSmalest(arr) {
    let smalest=Infinity;
    let secSmalest=Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]<smalest){
            secSmalest=smalest;
            smalest=arr[i];
        }
        else if(arr[i]>secSmalest && arr[i]<smalest){
            secSmalest=arr[i]
        }
    }
    console.log(smalest);
    console.log(secSmalest)
}
let arr=[10, 5, 8, 2, 7]
secondSmalest(arr)
