//Using recursion and Time Complexity O(n)
const reversArr = function (arr, start = 0, end = arr.length-1) {
    console.log(arr[start], ':::', arr[end]);
    if(start >= end){
        return;
    }
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    reversArr(arr,start+1,end-1);
}

const arr = [1,2,3,4]
reversArr(arr)
console.log(arr);
export {reversArr};