const playWithString = (function () {
    const reshape = 'abc efgh lbhn';
    const len = 3;
    let newReshapeStr = reshape.split(' ').join('');
    let tempNewstr = newReshapeStr;
    console.log('newReshapeStr::', newReshapeStr.length / 3);
    let finalStr = '';
    let count = len;
    console.log(count,'::',tempNewstr.length - count);
    if(count)
    while (count <= tempNewstr.length){
        finalStr += newReshapeStr.substr(0,len) + '\n';
        count+=len;
        console.log(count,'::',tempNewstr.length-count)
        newReshapeStr = newReshapeStr.substr(len, count)
        console.log(newReshapeStr, '::finalStr::', finalStr);
    }


    //array = [1,2,3,4,5,6]
    //n1 = 0 and n2 = 2 so sum between these two index.


})();

export default playWithString

function sumBetweenTwoIndex(n1,n2, arr){
    const sum = arr.slice(n1, n2).reduce((acc,value) => (acc+ value));
    return sum
}

sumBetweenTwoIndex(3, 6, [1,2,3,4,5,6])