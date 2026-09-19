function remeoveDuplicate(arr) {
    let result=[];
    for(let i=0;i<arr.length;i++){
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(arr[i]==arr[j])
            {
                count++;
            }
        }
        if(count==1){
            result.push(arr[i])
        }
       
    }
    console.log(result)
}
let arr = [10, 20, 10, 30, 20, 40,40,50,60, 30];
remeoveDuplicate(arr)