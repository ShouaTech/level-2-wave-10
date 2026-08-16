// ============================================================
// 🐛  EVENT LISTENERS — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> for <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// Clicking "Add Task" should log the title.
// Instead it logs the title immediately when the page loads,
// then does nothing when you click. What's wrong?

function logTitle() {
  const title = document.getElementById("task-title-input").value;
  console.log("Title: " + title);
}

document.getElementById("add-task-btn")
  .addEventListener("click", logTitle());

// What's wrong ↓
  // logTitle() is being called right away instead of being passed to the event listener.
// Your fix ↓

document.getElementById("add-task-btn")
  .addEventListener("click", logTitle);
// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This should hide/show task cards based on priority filter.
// Clicking "High" hides all tasks instead of showing only high ones.
// What's wrong with the condition?

function handleFilter(event) {
  const filter  = event.target.dataset.filter;
  const allCards = document.querySelectorAll(".task-card");

  allCards.forEach(function(card) {
    if (card.dataset.priority !== filter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.querySelector(".header-right")
  .addEventListener("click", handleFilter);

// What's wrong ↓
  // The condition is backwards.
// It shows cards that don't match the filter and hides the ones that do match.
// Your fix ↓

function handleFilter(event) {
  const filter = event.target.dataset.filter;
  const allCards = document.querySelectorAll(".task-card");

  allCards.forEach(function(card) {
    if (card.dataset.priority === filter) {
      card.classList.remove("hidden");
    } else {
      card.classList.add("hidden");
    }
  });
}

document.querySelector(".header-right")
  .addEventListener("click", handleFilter);

// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This delegation handler should remove a task card when
// its Remove button is clicked. Nothing happens when clicked.
// There are TWO bugs.

function handleBoardClick(event) {
  const card   = event.target.closest(".task-card");
  const taskId = card.dataset.id;

  if (event.target.classList.contains("remove-btn")) {
    card.remove();
  }
}

document.querySelector(".board")
  .addEventListener("click", handleBoardClick);

// Bug 1 ↓
  // We try to use card.dataset.id without first checking if a task card was found.
// Bug 2 ↓
  // event.target might be something inside the remove button,
  // so checking event.target for "remove-btn" may not work.
// Your fix ↓

function handleBoardClick(event) {
  const removeButton = event.target.closest(".remove-btn");
  const card = removeButton.closest(".task-card");
  const taskId = parseInt(card.dataset.id);

    if (!removeButton) {
    return;
  }

  if (!card) {
    return;
  }
  
  card.remove();
}

document.querySelector(".board")
  .addEventListener("click", handleBoardClick);