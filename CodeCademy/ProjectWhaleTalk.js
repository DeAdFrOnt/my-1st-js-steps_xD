/*Whale Talk
Take a phrase like ‘turpentine and turtles’ and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

There are a few simple rules for translating text to whale language:

There are no consonants. Only vowels excluding “y”.
The u‘s and e‘s are extra long, so we must double them in our program.
Once we have converted text to the whale language, the result is sung slowly, as is a custom in the ocean.

To accomplish this translation, we can use our knowledge of loops. Let’s get started!*/

//Here our string to "translate"
let input='Make My dick a little big'
//Here array of vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
//Empty array for new "translate"
let resultArray =[]
//Loop: check that input more than 0 letter
for (let i=0;i<input.length;i++){
	//Nessted loop: check that input which is got have vowel
  for (let j = 0; j < vowels.length; j++) {    
    // Compare input letter to every letter in vowels
    if(input[i]===vowels[j]){
      resultArray.push(input[i])
    }
    //If find letter as E or U double them
    if(input[i]==='e'||input[i]==='u'){
       resultArray.push(input[i])
    } 
  } 
}
//.join() make from array => string
console.log('On whale lang ur input will sound like: '+resultArray.join('').toUpperCase())