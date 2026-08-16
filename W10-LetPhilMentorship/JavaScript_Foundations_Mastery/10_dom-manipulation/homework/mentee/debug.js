// ============================================================
// 🐛  DOM MANIPULATION — HOMEWORK  |  DEBUG TASKS
// ============================================================
// To test: swap <script src="app.js"> with <script src="debug.js">
// in index.html.
// ============================================================


// ----------------------------------------------------------
// 🟢 DEBUG 1 — Easy
// ----------------------------------------------------------
// This should set the board title but logs a TypeError. Why?

function renderBoardTitle() {
  const titleEl = document.querySelector(".board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// What's wrong ↓
  // querySelector(".board-title") isn't finding an element, so titleEl is null.
  // Then we try to use .textContent on null, which causes the TypeError.
// Your fix ↓

function renderBoardTitle() {
  const titleEl = document.querySelector("#board-title");
  titleEl.textContent = "My Task Board";
}

renderBoardTitle();

// ----------------------------------------------------------
// 🟡 DEBUG 2 — Medium
// ----------------------------------------------------------
// This loop should create a card for every task and append
// it to the list. But only the last card appears. Why?

function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;
    list.innerHTML = li.outerHTML;
  });
}

renderTasks();

// What's wrong ↓
  // innerHTML replaces everything already inside the list each time the loop runs,
  // so every new task removes the one before it.

// Your fix ↓

function renderTasks() {
  const list = document.getElementById("list-todo");
  const tasks = ["Design page", "Write tests", "Fix bug"];

  tasks.forEach(function(taskTitle) {
    const li = document.createElement("li");
    li.textContent = taskTitle;

    list.appendChild(li);
  });
}

renderTasks();
// ----------------------------------------------------------
// 🔴 DEBUG 3 — Hard
// ----------------------------------------------------------
// This function should add a "highlighted" class to all
// high-priority cards, but nothing changes on the page.
// There are TWO bugs.

function highlightTasks() {
  const highCards = document.querySelectorAll(".priority-high");

  for (let i = 0; i <= highCards.length; i++) {
    highCards[i].classList.add("highlighted");
  }
}

highlightTasks();

// Bug 1 ↓
  // The loop uses <=, so it goes one past the last item in highCards.
// Bug 2 ↓
  // .priority-high selects the priority label, not the whole task card.
// Your fix ↓

function highlightTasks() {
  const highPriorityLabels = document.querySelectorAll(".priority-high");

  for (let i = 0; i < highPriorityLabels.length; i++) {
    const card = highPriorityLabels[i].closest(".task-card");
    card.classList.add("highlighted");
  }
}

highlightTasks();