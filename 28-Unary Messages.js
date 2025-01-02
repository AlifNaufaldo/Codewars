// Binary with 0 and 1 is good, but binary with only 0 is even better! Originally, this is a concept designed by Chuck Norris to send so called unary messages.

// Can you write a program that can send and receive this messages?

// Rules
// The input message consists of ASCII characters between 32 and 127 (7-bit)
// The encoded output message consists of blocks of 0
// A block is separated from another block by a space
// Two consecutive blocks are used to produce a series of same value bits (only 1 or 0 values):
// First block is always 0 or 00. If it is 0, then the series contains 1, if not, it contains 0
// The number of 0 in the second block is the number of bits in the series
// Example
// Let’s take a simple example with a message which consists of only one character (Letter 'C').
// 'C' in binary is represented as 1000011, so with Chuck Norris’ technique this gives:
// 0 0 - the first series consists of only a single 1
// 00 0000 - the second series consists of four 0
// 0 00 - the third consists of two 1
// So 'C' is coded as: 0 0 00 0000 0 00

// Second example, we want to encode the message "CC" (i.e. the 14 bits 10000111000011) :
// 0 0 - one single 1
// 00 0000 - four 0
// 0 000 - three 1
// 00 0000 - four 0
// 0 00 - two 1
// So "CC" is coded as: 0 0 00 0000 0 000 00 0000 0 00
// Note of thanks
// Thanks to the author of the original kata. I really liked this kata. I hope that other warriors will enjoy it too.

function send(text) {
  // Convert the input text to binary representation
  const binary = [...text]
    .map((char) => char.charCodeAt(0).toString(2).padStart(7, "0")) // Convert to 7-bit binary
    .join(""); // Join all binary characters together

  // Encode the binary string using Chuck Norris' unary encoding
  let result = "";
  let currentChar = binary[0];
  let count = 0;

  for (const bit of binary) {
    if (bit === currentChar) {
      count++;
    } else {
      result += (currentChar === "1" ? "0 " : "00 ") + "0".repeat(count) + " ";
      currentChar = bit;
      count = 1;
    }
  }

  // Add the last sequence
  result += (currentChar === "1" ? "0 " : "00 ") + "0".repeat(count);

  return result.trim();
}

function receive(text) {
  // Decode the unary message into binary representation
  const parts = text.split(" ");
  let binary = "";

  for (let i = 0; i < parts.length; i += 2) {
    const type = parts[i] === "0" ? "1" : "0"; // Determine the bit type
    const count = parts[i + 1].length; // Count the number of 0s
    binary += type.repeat(count);
  }

  // Convert the binary string back into ASCII characters
  const result = [];
  for (let i = 0; i < binary.length; i += 7) {
    const charCode = parseInt(binary.slice(i, i + 7), 2);
    result.push(String.fromCharCode(charCode));
  }

  return result.join("");
}

console.log(send("C")); // '0 0 00 0000 0 00'
console.log(receive("0 0 00 0000 0 00")); // 'C'
