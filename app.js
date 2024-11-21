// Codewars

// 1-masala

//Code as fast as you can! You need to double the integer and return it.

{
    function doubleInteger(i) {
        // i will be an integer. Double it and return it.
        return i*2;
      }
      console.log(doubleInteger(5)); 
      console.log(doubleInteger(0)); 
      console.log(doubleInteger(-3)); 
}

// 2-masala

// Description:
// Complete the function that receives as input a string, and produces outputs according to the following table:

// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"
// Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

// Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".

{
    function getDrinkByProfession(profession) {
        profession = profession.toLowerCase(); 
        switch(profession) {
            case "jabroni":
                return "Patron Tequila";
            case "school counselor":
                return "Anything with Alcohol";
            case "programmer":
                return "Hipster Craft Beer";
            case "bike gang member":
                return "Moonshine";
            case "politician":
                return "Your tax dollars";
            case "rapper":
                return "Cristal";
            default:
                return "Beer";
        }
    }
    
  
    console.log(getDrinkByProfession("Jabroni")); 
    console.log(getDrinkByProfession("pOLItICIaN")); 
    console.log(getDrinkByProfession("Programmer")); 
    console.log(getDrinkByProfession("Doctor")); 
}

// 3-masala

// Looks like some hoodlum plumber and his brother has been running around and damaging your stages again.

// The pipes connecting your level's stages together need to be fixed before you receive any more complaints.

// The pipes are correct when each pipe after the first is 1 more than the previous one.

// Task
// Given a list of unique numbers sorted in ascending order, return a new list so that the values increment by 1 for each index from the minimum value up to the maximum value (both included).

// Example
// Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

{
    function pipeFix(numbers) {
        let min = numbers[0];
        let max = numbers[numbers.length - 1];
        let result = [];
    
        for (let i = min; i <= max; i++) {
            result.push(i);
        }
    
        return result;
    }
    
  
    console.log(pipeFix([1, 3, 5, 6, 7, 8]));  
}

// 4-masala

//write me a function stringy that takes a size and returns a string of alternating 1s and 0s.
//the string should start with a 1.
//a string with size 6 should return :'101010'.
//with size 4 should return : '1010'.
//with size 12 should return : '101010101010'.
//The size will always be positive and will only use whole numbers.

{
    function stringy(size) {
        let result = '';
        for (let i = 0; i < size; i++) {
            result += (i % 2 === 0) ? '1' : '0'; 
        }
        return result;
    }
    
    console.log(stringy(6)); 
    console.log(stringy(4));  
    console.log(stringy(12)); 
}

// 5-masala

//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.
//For example (Input -> Output):
//2 -> 3 (1 + 2)
//8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

{
    function summation(num) {
        return num * (num + 1) / 2;
    }

    console.log(summation(2)); 
    console.log(summation(8));   
}