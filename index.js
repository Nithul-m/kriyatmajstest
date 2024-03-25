// first question
function removeDuplicates(arr){
    return[...new Set(arr)];

}

const array = [3,4,9,3,8,0,4,9];

const uniqueArray = removeDuplicates(array);

console.log(uniqueArray);

//-------------------------------------//

//second question

function findMaxandMin(arr){
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    return [max,min];
}

const arr = [3,4,9,3,8,0,4,9];

const result = findMaxandMin(array);

console.log(result);

//--------------------------//

//third question

function reverseString(str){
    return str.split('').reverse().join('');

}

const inputString = "KRIYATMA";

const reversedString = reverseString(inputString);

console.log(reversedString);

//---------------------//