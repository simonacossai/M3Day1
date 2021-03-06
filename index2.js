/* 1) MAX CHAR
Given a string, return the character that is most
commonly used in the string.
--- Examples
    maxChar("abcccccccd") === "c"
    maxChar("apple 1231111") === "1"
*/
let findMostUsed = function (word) {
    var max = 0;
        maxChar = '';
     word.split('').forEach(function(char){
       if(word.split(char).length > max) {
           max = word.split(char).length;
           maxChar = char;
        }
     });
     return maxChar;
   };
//console.log(findMostUsed("blabbbbblaaa"));

/* 2) ANAGRAMS
Check to see if two provided strings are anagrams of each other.
One string is an anagram of another if it uses the same characters
in the same quantity. Only consider characters, not spaces
or punctuation.  Consider capital letters to be the same as lower case
--- Examples
  anagrams('rail safety', 'fairy tales') --> True
  anagrams('RAIL! SAFETY!', 'fairy tales') --> True
  anagrams('Hi there', 'Bye there') --> False
*/
function anagrams(firstString, secondString) {
    return clean(firstString) === clean(secondString);
  }
  
  function clean(word) {
    return word.replace(/[^\w]/g, '').split('').sort().join('').toLowerCase();
  }

 // console.log(anagrams("rail safety", "fairy tales"));


/* 3) ANAGRAMS 2
Given a word and a list of possible anagrams, select the correct sublist.
--- Examples 
    "listen" and a list of candidates like "enlists" "google" "inlets" "banana" the program should return a list containing "inlets".
*/

let word1 = "listen";
let array1= ["enlists", "google", "inlets", "banana"];

function findAnagrams() {
    for(let i=0; i<array1.length; i++){
     if(clean(word1) === clean(array1[i])){
        return array1[i];
     }
    }
  }
  
  function clean(word) {
    return word.replace(/[^\w]/g, '').split('').sort().join('').toLowerCase();
  }

  //console.log(findAnagrams());

/* 4) PALINDROME
Given a string, return true if the string is a palindrome
or false if it is not.  Palindromes are strings that
form the same word if it is reversed. Do include spaces
and punctuation in determining if the string is a palindrome.
--- Examples:
    palindrome("abba") === true
    palindrome("abcdefg") === false
 */

const palindrome=(word)=>{
    let arrayOfWord = word.split("");
    let reverseArray= arrayOfWord.reverse();
    let newWordReversed = reverseArray.join("");
    if (word===newWordReversed){
        return "the word is palindrome"
    }else{
        return "the word is not palindrome"
    }
}
//console.log(palindrome("abba"));

/* 5) REVERSE INT
Given an integer, return an integer that is the reverse
ordering of numbers.
--- Examples
    reverseInt(15) === 51
    reverseInt(981) === 189
    reverseInt(500) === 5
    reverseInt(-15) === -51
    reverseInt(-90) === -9
 */
const reverseInt=(num)=>{
   let number= num.toString();
    let arrayNum = number.split("");
    let minus;
if(arrayNum[0]==="-"){
    minus=arrayNum[0];
}
    let joinedNum= arrayNum.reverse().join("");
    let newNumber= parseInt(joinedNum);
    if(minus==="-"){
        return minus+newNumber;
    }else{
        return newNumber;
    }
    
}
//console.log(reverseInt(31));

/* 6) STEPS
Write a function that accepts a positive number N.
The function should console log a step shape
with N levels using the # character.  Make sure the
step has spaces on the right hand side!
--- Examples
    steps(2)
        '# '
        '##'
    steps(3)
        '#  '
        '## '
        '###'
    steps(4)
        '#   '
        '##  '
        '### '
        '####' */
const halfPyramid=(num)=>{
    let char = '';

    for(i = 0; i <= num ; i++) {
        for(j = 1; j <= i; j++) {
           char += '#';
        }
        char += '\n';
    }
    return char;
}

//console.log(halfPyramid(10));


/* 7) REVERSE STRING
Given a string, return a new string with the reversed
order of characters
--- Examples
    reverse('apple') === 'leppa'
    reverse('hello') === 'olleh'
    reverse('Greetings!') === '!sgniteerG'
 */
const reverseString =(word)=>{
    let newArray = word.split("");
    let reversedArray = newArray.reverse();
    let newWord = reversedArray.join("");
    return newWord;
}
//console.log(reverseString("hello!"));

/* 8) CHUNK
Given an array and chunk size, divide the array into many subarrays
where each subarray is of length size
--- Examples
    chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
    chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
    chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
    chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
    chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]
*/
const chunkArray=(array, chunk)=>{
    let i = 0;
    let tempArray = [];
    
    for (i = 0; i< array.length; i+= chunk) {
        chunks = array.slice(i, i+chunk);
        tempArray.push(chunks);
    }

    return tempArray;
}
//console.log(chunkArray([1,2,3,4,5,6,7,8,9,10], 2));

/* 9) PYRAMID
Write a function that accepts a positive number N.
The function should console log a pyramid shape
with N levels using the # character.  Make sure the
pyramid has spaces on both the left and right hand sides
--- Examples
    pyramid(1)
        '#'
    pyramid(2)
        ' # '
        '###'
    pyramid(3)
        '  #  '
        ' ### '
        '#####' */

    const pyramid=(num)=>{
            for (let i = 0; i <num; i++) {
                let result = '';
                for (let j =0; j <num - i; j++) {
                    result += ' ';
                }
                for (let k = 0; k <= i; k++) {
                    result += '# ';
                }
              console.log(result);  
            } 
        }
        
pyramid(7);


/* 10) SPYRAL MATRIX
Write a function that accepts an integer N
and returns a NxN spiral matrix.
--- Examples
    matrix(2)
        [[1, 2],
        [4, 3]]
    matrix(3)
        [[1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]]
    matrix(4)
        [[1, 2, 3, 4],
        [12, 13, 14, 5],
        [11, 16, 15, 6],
        [10,  9,  8, 7]]
*/