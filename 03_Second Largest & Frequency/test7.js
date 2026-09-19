function duplicate(arr) {
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j]){
                count++;
            }
        }
        if(count==2){
            console.log(arr[i])
        }
    }
    
}
let arr = [10, 20, 10, 30, 40, 20, 50];
duplicate(arr)