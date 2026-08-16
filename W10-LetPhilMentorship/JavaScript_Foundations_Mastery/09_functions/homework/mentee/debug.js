// ============================================================
// 🐛  FUNCTIONS — HOMEWORK  |  DEBUG TASKS
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This arrow function should return the full name
// but always returns undefined. What's wrong?

const getFullName = (first, last) => {
  first + " " + last;
};

console.log(getFullName("Alex", "Rivera"));

// What's wrong ↓
  // The arrow function has braces, so we need to use return.
// Your fix — write TWO versions:
//   a) Fix by adding return inside the braces
const getFullName = (first, last) => {
  return first + " " + last;
};

console.log(getFullName("Alex", "Rivera"));
//   b) Fix by removing the braces (one-liner implicit return)
const getFullName2 = (first, last) => first + " " + last;

console.log(getFullName2("Alex", "Rivera"));

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should return "Admin", "Moderator", or "Member"
// depending on role. It works for "admin" but returns
// undefined for everything else. What's wrong?

function getRoleLabel(role) {
  if (role === "admin") {
    return "Admin";
  } else if (role === "mod") {
    "Moderator";
  } else {
    "Member";
  }
}

console.log(getRoleLabel("admin"));   // "Admin" ✅
console.log(getRoleLabel("mod"));     // undefined ❌
console.log(getRoleLabel("member"));  // undefined ❌

// What's wrong ↓
  // "Moderator" and "Member" are missing return, so the function gives back undefined.

// Your fix ↓
function getRoleLabel(role) {
  if (role === "admin") {
    return "Admin";
  } else if (role === "mod") {
    return "Moderator";
  } else {
    return "Member";
  }
}

// Bonus: rewrite the whole function as an arrow function
// using nested ternaries (just to see what it looks like —
const getRoleLabelArrow = (role) =>
  role === "admin"
    ? "Admin"
    : role === "mod"
    ? "Moderator"
    : "Member";
// then write a comment about whether you'd actually use it).
  // I probably wouldn't use the nested ternary here because the if/else version is easier to read
  // for me personally

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This discount calculator has TWO bugs.
// One causes the wrong math. One is a style issue from Lesson 8.

const applyDiscount = (price, discountPercent = 10) => {
  const discountAmount = price * discountPercent;
  const finalPrice = price + discountAmount;
  return finalPrice;
};

console.log(applyDiscount(100, 20));  // expected: 80
console.log(applyDiscount(50));       // expected: 45

// Bug 1 (math) ↓
  // discountPercent needs to be divided by 100, and the discount should be subtracted from the price
// Bug 2 (style) ↓
  // We can make this arrow function shorter since it only returns one thing.
// Your fix ↓

const applyDiscount = (price, discountPercent = 10) =>
  price - price * (discountPercent / 100);

console.log(applyDiscount(100, 20));
console.log(applyDiscount(50));