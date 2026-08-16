// ============================================================
// 🐛  ARRAYS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should log the middle element ("C") of the array.
// Instead it logs undefined. What's wrong?

// const letters = ["A", "B", "C", "D", "E"];
// const middleIndex = letters.length / 2;
// console.log(letters[middleIndex]);

// What's wrong ↓
  // letters.length will display 5 / 2 which is 2.5
// Your fix ↓
  const letters = ["A", "B", "C", "D", "E"];
  const middleIndex = letters[2];
  console.log(middleIndex);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should build a total of all prices.
// It logs NaN instead of a number. What's wrong?

// const prices = [10, 20, 30, 40];
// let total = 0;

// for (let i = 0; i <= prices.length; i++) {
//   total += prices[i];
// }

// console.log("Total: $" + total);

// What's wrong ↓
  // because of the <= sign, that will make i go up to 5 which the array only goes up to 4
// Your fix ↓

const prices = [10, 20, 30, 40];
let total = 0;

for (let i = 0; i < prices.length; i++) {
  total += prices[i];
}

console.log("Total: $" + total);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to find the highest score in the array
// and log the winner's name. It always logs the wrong winner.
// There are TWO bugs. Find both.

const names  = ["Alice", "Bob", "Carol", "Dave"];
const scores = [82, 91, 78, 95];

let topIndex  = 1;
let topScore  = 0;

for (let i = 0; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}

console.log("Winner: " + names[topIndex] + " with " + topScore);

// Bug 1 ↓
  // topIndex should be 0, 1 starts with the second index
// Bug 2 ↓
  // topScore variable should be [0] instead of 0
// Your fix ↓

// Bug 1 ↓
// topIndex should start at 0

// Bug 2 ↓
// topScore should start at scores[0], not 0

// Your fix ↓
let topIndex = 0;
let topScore = scores[0];

for (let i = 1; i < scores.length; i++) {
  if (scores[i] > topScore) {
    topScore = scores[i];
    topIndex = i;
  }
}