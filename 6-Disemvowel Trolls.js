// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

function disemvowel(str) {
    return str.replace(/[aeiou]/gi, '');
  }

//   Regular Expression (/[aeiou]/gi):
//   [aeiou]: Matches any of the characters a, e, i, o, or u.
//   g: Global flag ensures that all vowels in the string are replaced, not just the first one.
//   i: Case-insensitive flag matches both uppercase and lowercase vowels.
//   replace() method:
//   Replaces all matched vowels with an empty string (''), effectively removing them.