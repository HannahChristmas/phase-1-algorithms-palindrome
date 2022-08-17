function reverseWord(word) {
  let splitWordIntoArray = word.split('')
  let reverseSplitArray = splitWordIntoArray.reverse()
  let reversedWord = reverseSplitArray.join('')
  return reversedWord
}

function isPalindrome(word) {
  // Write your algorithm here:
  // Overall: Write a function that checks whether or not a word is a palindrome
  // 1. Write an if statement that checks if the word is the same forward & backwards
  // If so, return true
  // 2. Finish the if statement with else: return false

  const reversedWord = reverseWord(word)

  if(word === reversedWord) {
    return true
  } else {
    return false
  }

}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("bob"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("steven"));
}

module.exports = isPalindrome;


// 1. Rewrite the Problem in Your Own Words

  // Build a function that checks if a word is the same forwards and reveresed. If it is, return true. If it isn't, return false. 

// 2. Write Your Own Test Cases

  // mom === mom // true
  // abc === cba // false

// 3. Pseudocode

  // 1. reverse the string
  // 2. check if input is same - return true
  // 3. else return false

// 4. Code
// 5. Make It Clean and Readable
// 6. Optimize