function nonRepat(arr) {

    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++
            }
          
           
        }
        console.log(count)
         if(count==1){
                console.log(arr[i])
                return
              
            }
    }
    
}
let arr = [10, 20, 10, 30, 20, 40];
nonRepat(arr)
