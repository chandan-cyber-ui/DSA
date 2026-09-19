function mostFrequent(arr) {
       let mostFrequent = arr[0];
       let maxfrequency=0;
      
       for(let i=0;i<arr.length;i++){
         let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;

            }
        }
        if(count>maxfrequency){
            maxfrequency=count;
            mostFrequent=arr[i]
        }
       }
       console.log(maxfrequency)
       console.log(mostFrequent)
      
}
let arr = [10, 20, 10, 30, 20, 10, 40,40,50,40,40,40];
mostFrequent(arr)