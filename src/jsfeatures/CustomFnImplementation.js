//How to check type of any objects
const  checkTypes = (function () {
    function fCheckAnyArbitraryValuetype(value) {
        let str = Object.prototype.toString;
        console.log('str::', str);
        let newStr = str.call(value);

        console.log('newStr:::', typeof value);
        return newStr.slice(8,-1);
    }
    const type = fCheckAnyArbitraryValuetype(null);
    console.log('type::', type);
    const arr = [1,2,3];
    const myMap = function(callBackfn,context){
        let arr = Array.prototype.slice.call(this);
        console.log('arr::', arr);
        const mappedArr = Array()
        for(let i = 0; i<arr.length; i++){
            if(!arr.hasOwnProperty(i)) continue;
            mappedArr[i] = callBackfn.call(context,arr[i],i,arr);
        }
        return mappedArr;
    }

    Array.prototype.myMap = myMap;
    arr.myMap((item,index, arr) =>{
        console.log(index, '::map:::', item);
    })
    console.log('arr::', arr);

})();
export {checkTypes};
