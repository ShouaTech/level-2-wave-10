// ============================================================
// 🐛  OPERATORS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// Fix the bug in each snippet.
// Explain what was wrong as a comment. Then fix it.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should calculate a 15% tip but the result is wrong.

// const billAmount = 80;
// const tipPercent = 15;
// const tipAmount  = billAmount % tipPercent;
// console.log("Tip: $" + tipAmount);

// What's wrong ↓
 // the problem % modulo operator, that only gives you the remainder after division
// Your fix ↓
const billAmount = 80;
const tipPercent = 15;
const tipAmount = billAmount * (tipPercent / 100);

console.log("Tip: $" + tipAmount);

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// The developer wants to track a countdown timer.
// Something is wrong with how the variable is declared.

const countdown = 10;
countdown -= 1;
countdown -= 1;
countdown -= 1;
console.log("Countdown: " + countdown);

// What's wrong ↓
 // You can't change countdown when using the variable const, use let instead
// Your fix ↓
let countdown = 10;

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This code is supposed to check if two usernames match.
// It always logs true even when they shouldn't match.
// There are also two style issues (not errors, but bad practice).
// Find the logic bug AND the two style issues.

var username1 = "gamer99";
var username2 = "Gamer99";
console.log("Names match: " + (username1 == username2));

// Logic bug ↓
   // one G is lowercase and the other is uppercase, resulting in strict equality operator to be false
// Style issue 1 ↓
   // var is outdated, to replace it we would use let
// Style issue 2 ↓
   // we would use === to be certain that they're the same, it checks the type and value inside
// Your fix ↓
let username1 = "Gamer99";
let username2 = "Gamer99";
console.log("Names match: " + (username1 === username2));