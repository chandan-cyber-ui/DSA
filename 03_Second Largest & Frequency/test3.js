function thirdLargest(arr) {
    let largest=-Infinity;
     let seclargest=-Infinity;
      let thirdlargest=-Infinity;

      for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            thirdlargest=seclargest;
            seclargest=largest;
            largest=arr[i]
        }
        else if(arr[i]>seclargest && arr[i]<largest){
            thirdlargest=seclargest;
            seclargest=arr[i]
        }
        else if(arr[i]>thirdlargest && arr[i]<seclargest){
            thirdlargest=arr[i]
        }
      }
      console.log(largest)
      console.log(seclargest)
      console.log(thirdlargest)
}
let arr=[10, 50, 20, 40, 30];
thirdLargest(arr)
