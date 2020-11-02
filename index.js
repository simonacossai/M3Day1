/*
1)
Create a function to calculate the sum of the two given integers. If the two values are same, then returns triple their sum.
*/
const sum =(num1, num2)=>{
    return num1!==num2 ? num1+num2 : (num1+num2)*3;
}
//console.log(sum(2,2));


/*
2)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.
*/

const checkNumbers =(num1, num2)=>{
    if(num1 === 50 || num2 === 50 || num1+num2 === 50){
        return true
    }else{
        return false
    }
}
//console.log(checkNumbers(20,50));

/*
3)
Create a function to remove a character at the specified position of a given string and return the new string.
*/

const removeChar=(word, index)=>{
   let arrayOfChar= word.split("");
   arrayOfChar.splice(index,1);
   let newWord = arrayOfChar.join("");
   return newWord;
}
//console.log(removeChar("hello", 4));


/*
4)
 Create a function to find the largest of three given integers.
*/

const bigger=(num1, num2, num3)=>{
    let max = num1>num2 ? num1 : num2;
    max= num3>max ? num3 : max;
    return max;
}
//console.log(bigger(7, 4, 1));


/*
5)
Create a function to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.
*/

const rangeCheck=(num1, num2)=>{
    if(num2 >=40 && num2<=60 && num1 >=40 && num1<=60){
        return "the two numbers are between 40 and 60";
    }else if(num2 >=70 && num2<=100 && num1 >=70 && num1<=100){
        return "the two numbers are between 70 and 100";
    }else{
        return "the two given numbers aren't between the needed ranges";
    }
}
//console.log(rangeCheck(70,72));

/*
6) 
Create a function to create a new string of specified copies (positive number) of a given string.
*/

const newString=(word, num)=>{
    var repeatedString = "";
  while (num > 0) {  
    repeatedString += word; 
    num--;
  }
  return repeatedString; 
}
//console.log(newString("hello",2));

/*
7)
Create a function to display the city name if the string begins with "Los" or "New" otherwise return blank.
*/

const cityName=(string)=>{
    if(string==="Los"){
        return string+ " Angeles";
    }else if(string==="New"){
        return string + " York";
    }else{
        return " ";
    }
}
//console.log(cityName("Los"));

/*
8)
Create a function to calculate the sum of three elements of a given array of integers of length 3.
*/
let array=[3, 6, 9];
let sumArray=0;
const arraySum=()=>{
    for(let i=0; i<array.length; i++){
        sumArray+=array[i];
    }
    return sumArray;
}
//console.log(arraySum());

/*
9)
Create a function to test whether an array of integers of length 2 contains 1 or a 3. 
*/
let myArray= [5,7];

const numberCheck=()=>{
    for(let i=0; i<myArray.length; i++){
        return myArray[i]===1 || myArray[i]===3 ? true : false
    }
}
//console.log(numberCheck());


/*
10)
Create a function to test whether an array of integers of length 2 does not contain 1 or a 3
*/
let myArray2= [5,7];

const numberCheck2=()=>{
    if (!myArray2.includes(1) && !myArray2.includes(3)){
        return true;
    } else {
        return false;
    }
}
//console.log(numberCheck2());



/*
11)
Create a function to find the longest string from a given array of strings.
*/
function longest(array) {
    let max = array[0].length;
    array.map(v => max = Math.max(max, v.length));
    result = array.filter(v => v.length == max);
    return result;
  }
  
//  console.log(longest(['hello', 'goodbye', 'strive','bye','hi']));

/*
12)
Create a function to find the types of a given angle.
Types of angles:
    Acute angle: An angle between 0 and 90 degrees.
    Right angle: An 90 degree angle.
    btuse angle: An angle between 90 and 180 degrees.
    Straight angle: A 180 degree angle.
    */

    const typeOfAngle=(num)=>{

        if(num>0 && num<90){
            return "Acute angle"
        }else if(num===90){
            return "Right angle"
        }else if(num>90 && num<180){
            return "Btuse angle"
        }else if(num===180){
            return "Straight angle"
        }
    }
//console.log(typeOfAngle(79));

/*
13)
Create a function to find the index of the greatest element of a given array of integers
*/
let arrayOfInt =[3, 14, 91, 90, 4];

const indexOfGreatest=()=>{
    let max=0;
    for(let i=0; i<arrayOfInt.length; i++){
        if(arrayOfInt[i]>max){
            max= arrayOfInt[i];
        }
    }
    return arrayOfInt.indexOf(max);

}
//console.log(indexOfGreatest());

/*
14)
Create a function to get the largest even number from an array of integers.
*/
const largestEvenNumber=()=>{
    let max=0;

    for(let i=0; i<arrayOfInt.length; i++){
        if(arrayOfInt[i]>max && arrayOfInt[i]%2===0){
            max= arrayOfInt[i];
        }
    }
    return arrayOfInt.indexOf(max);
}
//console.log(largestEvenNumber());

/*
15)
Create a function to check two given numbers and return true if one of the number is 50 or if their sum is 50.*/

/*
16)
Create a function to check from two given integers, whether one is positive and another one is negative.
*/
const isPositiveAndNegative=(num1, num2)=>{

    if(num1<0 && num2>0 || num1>0 && num2<0){
        return true
    }else{
        return false
    }
}
//console.log(isPositiveAndNegative(2,-3));


/*
17)
Create a function to create new string with first 3 characters are in lower case and the others in upper case.
If the string length is less than 3 convert all the characters in upper case. 
*/
function upper_lower(word) {
    if (word.length < 3) {
      return word.toUpperCase();
    }
    let firstPart = (word.substring(0, 3)).toLowerCase();
    let secondPart = word.substring(3, word.length).toUpperCase();  
    return firstPart + secondPart;
  }
 // console.log(upper_lower("goodbye"));
  
  
/*
18)
Create a function to calculate the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
*/
const calculateSum=(num1, num2)=>{
    let sum = num1+num2;

    if(sum>50 && sum<80){
        return 65
    }else{
        return 80
    }
}
//console.log(calculateSum(50, 3));


/*
19)
Create a function to convert a number to a string, the contents of which depend on the number's factors. Follow next example:
If the number has 3 as a factor, output 'Diego'.
If the number has 5 as a factor, output 'Riccardo'.
If the number has 7 as a factor, output 'Stefano'.
If the number does not have 3, 5, or 7 as a factor, just pass the number's digits straight through.
Examples
28's factors are 1, 2, 4, 7, 14, 28.
this would be a simple "Stefano".
30's factors are 1, 2, 3, 5, 6, 10, 15, 30.
this would be a "DiegoRiccardo".
34 has four factors: 1, 2, 17, and 34.
this would be "34".
*/

const convert=(num)=>{
    if(num%3===0 && num%5===0){
        return "Diego"+"Riccardo"
    }
    else if(num%3===0&& num%7===0){
        return "Diego"+"Stefano"
      }
      else if(num%5===0&& num%7===0){
        return "Riccardo"+"Stefano"
      }
     else if(num%3===0){
     return "Diego"
     }else if(num%5===0){
     return "Riccardo"
      }else if(num%7===0){
     return "Stefano"
 }
}
//console.log(convert(35));


/*
20)
Create a function that given a phrase returns its acronym, like British Broadcasting Corporation returns BBC
*/

const createAcronym=(phrase)=>{
    let newArray= phrase.split(" ");
    let firstLetters="";
    for(let i=0; i<newArray.length; i++){
        firstLetters+= newArray[i].charAt(0).toUpperCase();
    }
    return firstLetters;
}
console.log(createAcronym("welcome to strive school"));