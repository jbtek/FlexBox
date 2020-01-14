//Using recursion and Time Complexity O(n)
//Reverse the array
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

///Reverse the Strings
const reverseString = function (str,start=0, end=str.length-1) {

}



///Merge an array of size n into another array of size m+n
/**
 *
 * @param mPlusN
 * @param N
 * @param m
 * @param n
 * M+N = [2,NA,4,NA,6,7,NA,9]
 * N = [3,5,8]
 */
const mergeArrayNToMPlusN = function (mPlusN,N, m,n) {
    
}

