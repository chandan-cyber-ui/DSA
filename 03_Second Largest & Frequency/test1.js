function secondLargest(arr) {
   let largest=-Infinity;
   let secondlargest=-Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            secondlargest=largest;
            largest=arr[i]
        }
        else if(arr[i]>secondlargest && arr[i]<largest){
            secondlargest=arr[i]
        }
    }
   console.log(largest)
   console.log(secondlargest)
   
    
}
let arr = [10, 25, 8, 40, 30];
secondLargest(arr)