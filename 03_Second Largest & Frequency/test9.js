function firstDuplicate(arr) {

    for(let i=0;i<arr.length;i++){
        
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]==arr[j]){
                console.log(arr[i])
                return;
            }
        }
    
    }
    
}
let arr = [10,20,30,40,50,50];
firstDuplicate(arr)