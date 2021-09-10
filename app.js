"use strict";
/* eslint-disable */

/* You need the module.exports when testing in node.  Comment it out when you send your file to the browser */
module.exports = { ucFirst, getMaxSubSum, truncate, camelize };
/ /
/**
 * 
 * @param {string} str string input 
 * @returns {string}  string  result first upperCase string
 */

function ucFirst(str) {
    let firstChar = str.charAt(0).toUpperCase();
    let result = firstChar + str.substring(1);
    return result;
}
console.log(ucFirst("kassaw")); //Kassaw
/**
 * 
 * @param {string} str  input of string
 * @returns {boolean} return true or false
 */

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
alert(checkSpam("this is spam"));


function truncate(str, maxlength) {

    if (str.length <= maxlength) {
        return str;
    }
    return str.slice(0, maxlength) + '...'
}

console.log(truncateString("Kassaw Ayalew", 8));


/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} the total of the maximal subarray
 */
function getMaxSubSum(arr) {

    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // for each item of arr
        partialSum += item; // add it to partialSum
        maxSum = Math.max(maxSum, partialSum); // remember the maximum
        if (partialSum < 0) partialSum = 0; // zero if negative
    }

    return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // 5
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // 100
console.log(getMaxSubSum([1, 2, 3])); // 6
console.log(getMaxSubSum([-1, -2, -3])); // 0 

function camelize(str) {
    return str
        .split('-').map(

            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        ).join('');
}
console.log(camelize("background-color")); //backgroundColor
console.log(camelize("list-style-image")); //listStyleImage
console.log(camelize("-webkit-transition")); //webkitTransition
