// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
  return string.replace(/([A-Z])/g, " $1");
}

console.log(solution("camelCasing")); // 'camel Casing'
console.log(solution("identifier")); // 'identifier'

// The provided JavaScript function solution is designed to take a string in camelCase format and insert a space before each uppercase letter. CamelCase is a naming convention where the first letter of each word is capitalized, and there are no spaces between words. For example, "camelCaseExample" would be transformed into "camel Case Example".

// The function uses the replace method of the string object, which searches for a specified pattern and replaces it with a given replacement. In this case, the pattern is a regular expression /([A-Z])/g. The regular expression matches any uppercase letter from A to Z. The parentheses around [A-Z] create a capturing group, which allows the matched uppercase letter to be referenced in the replacement string.

// The g flag at the end of the regular expression stands for "global", meaning that the replacement should be applied to all matches in the string, not just the first one.

// The replacement string is ' $1'. The $1 is a backreference to the first (and only) capturing group in the regular expression, which is the uppercase letter that was matched. By prefixing $1 with a space, the function effectively inserts a space before each uppercase letter in the original string.

// Overall, this function is a concise and effective way to convert camelCase strings into a more readable format by separating words with spaces.
