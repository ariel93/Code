function sequenceCounter(arr,num){
    let count = 0;
    let temp=0;
    for(let j=0;j<arr.length-1;j++){
        for(let i=j;i<arr.length;i++){
         
            if(arr[i]===num || temp>num){
                temp=0;
                continue;
            }
            temp += arr[i];
            if (isNaN(arr[i])){
                throw(`Error:${arr[i]} is not a number `);
            }
            if(temp===num){
                temp=0;
                count++;
            }
        }
    }   
    return count;
}
console.log(sequenceCounter([1,2,3,4,5,1],6));
console.log(sequenceCounter([1,2,3,'B',5,1],6));


