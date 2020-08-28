var stringNumber = function(n) {
    // n = 100
    let counter = 1;
    let fizzBuzz = [];
    while(counter < n + 1 && n > 0){
        if(counter % 3 === 0 && counter !== n){
            fizzBuzz[counter-1] = 'Fizz';
        } else if(counter % 5 === 0 && counter !== n){
            fizzBuzz[counter-1] = 'Buzz';
        } else {
            fizzBuzz[counter-1] = counter.toString();
        }
        if(counter > 1 && counter !== (3*5) &&
            counter === n && (counter % 5 === 0)){
            fizzBuzz[counter-1] = 'Buzz';
        }
        if(counter > 1 && counter !== (3*5) &&
            counter === n && (counter % 3 === 0)){
            fizzBuzz[counter-1] = 'Fizz';
        }
        if(counter > 1 && counter % 3 === 0 && counter % 5 === 0){
            fizzBuzz[counter-1] = 'FizzBuzz';
        }
        counter = parseInt(counter,10).toFixed(1);
        counter++;
    }
    return fizzBuzz
};

stringNumber(100);

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let start = 0;
    let end = s.length-1;
    let s1 = s.split('');
    while(start < end){
        if(vowels.indexOf(s1[start]) === -1){
            start++
        } else if(vowels.indexOf(s1[end]) === -1){
            end--
        } else {
            let temp = s1[start];
            s1[start] = s1[end];
            s1[end] = temp;
            start++
            end--
        }
    }
    return s1.join('');

};

reverseVowels('Hello');

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // nums = [4,1,2,1,2]
    let map = new Map();
    for(var i = 0; i < nums.length; i++){
        if(!map.has(nums[i])){
            map.set(nums[i], nums[i]);
        } else {
            map.delete(nums[i]);
            console.log('ELSE', map.get(nums[i]));

        }
    }
    const arr = [...map].map(([key, value]) => ({ key, value }));
    return arr[0].value
};
singleNumber([1,2,2,4,5,6])



/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
    // use a handler function since it's easier to write and think about recursive code this way. You start at a num/depth value of 1 because of the definition of depth.
    return maxDepthHandler(root,1)

};
var maxDepthHandler = function(root, num){
// here's just base case -- if you get an empty root(because you definitely will at some point, just return a depth of zero because there's nothing in the tree!
    if(root == null){
        return 0
    }
// this is your terminating case. a leaf node doesn't have any children, and so the root at that point will have null value. at this point just return the depth/num
    if (root.right == null && root.left == null){
        return num
    }
//Use Math.max to get the highest between the two root depths. the rest of this code is just handling the individual root cases.
    if (root.right && root.left){
        return Math.max( maxDepthHandler(root.right, num+1), maxDepthHandler(root.left, num + 1))
    }  else if (root.right != null){
        return maxDepthHandler(root.right, num+1)
    } else {
        return maxDepthHandler(root.left, num+1)
    }
};

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let startIndex = 0;
    for(let i = 0; i < nums.length; i++){
        if(nums[i]!=0){
            nums[startIndex++] = nums[i]
        }
    }
    console.log('nums::',nums);
    for(let i = startIndex; i< nums.length; i++){
        nums[i] = 0
    }
    return nums
};

moveZeroes([0,1,0,3,12]);

//Get some of two integer without using + or - operator
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    const arr = [a, b];
    const sum = arr.reduce((acc, currValue) => (acc +=currValue), 0);
    return sum;
};

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    // nums = [0,4,5,0,3,6]
    const obj = {};
    for(var i = 0; i< nums.length; i++){
        if(!obj[nums[i]] && obj[nums[i]] !== 0){
            obj[nums[i]] = nums[i];
        } else {
            return true
        }
    }
    return false;
};

containsDuplicate([0,4,5,0,3,6])

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 * Input: s = "anagram", t = "nagaram"
 Output: true
 Example 2:

 Input: s = "rat", t = "car"
 Output: false
 */
var isAnagram = function(s, t) {
    let s1 = s.split('').sort().join();
    let s2 = t.split('').sort().join();

    return s1 === s2
};

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // s = 'loveleetcode'
    // s = "aadadaad"
    // s = 'bd'
    // s = "aaadd"
    var map = new Map;
    let ind = -1;
    let count = 0
    if(s === '') {
        return -1
    }
    if(s.length === 1){
        return 0
    }
    for(var i = 0; i<s.length; i++){
        if(!map.has(s[i])){
            count = 1
            var obj = {char:s[i], count:count, index:i};
            map.set(s[i], obj);
        } else {
            count ++;
            let repeatedChar = map.get(s[i]);
            repeatedChar.count = count;
            map.set(s[i], repeatedChar)
        }
    }
    const arr = [...map];
    for(let i = 0; i< arr.length; i++){
        if(arr[i] && arr[i][1] && arr[i][1].count === 1){
            ind = arr[i][1].index;
            break;
        }
    }
    return ind
};

firstUniqChar('loveleetcode');