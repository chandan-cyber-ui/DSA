function countTarget(arr,target) {

    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]==target){
            count++;
        }
    }
    console.log(count)
    
}
let arr = [10, 20, 10, 30, 10, 40];
let x = 10;
countTarget(arr,x)