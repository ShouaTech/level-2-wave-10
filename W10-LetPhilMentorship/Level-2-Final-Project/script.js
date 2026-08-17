const darkMode = document.getElementById("dark-mode");
const habitsDone = document.getElementById("habits-done");
const addHabitBtn = document.getElementById("add-habit-btn");
const habitsContainer = document.querySelector(".empty-habits");
const habitInput = document.getElementById("input-field");

const savedHabits = localStorage.getItem("habits");
const savedDarkMode = localStorage.getItem("darkMode");

let habits;

if (savedHabits) {
    habits = JSON.parse(savedHabits);
} else {
    habits = [];
}

if (savedDarkMode === "true") {
    document.body.classList.add("dark-toggle");
    darkMode.textContent = "Light Mode ☀️";
}

function calculateStreak(completedDates) {
  let streak = 0;
  let currentDate = new Date();

  while (true) {
    const dateString = currentDate.toISOString().split("T")[0];

    if (completedDates.includes(dateString)) {
      streak++;
      const previousDay = currentDate.getDate() - 1;
      currentDate.setDate(previousDay);
    } else {
      break;
    }
  }

  return streak;
}

function completeHabit(habit) {
    const today = new Date().toISOString().split("T")[0];

    if (!habit.completedDates.includes(today)) {
        habit.completedDates.push(today);
        saveHabits();
    }

    renderHabits();
    updateDashboard();
}

function deleteHabit(habit) {
    habits = habits.filter(function(item) {
        return item.id !== habit.id;
    });

    saveHabits();
    renderHabits();
    updateDashboard();
}

function createHabitCard(props) {
    const habit = props.habit;
    const onComplete = props.onComplete;
    const onDelete = props.onDelete;

    const habitCard = document.createElement("div");
    habitCard.classList.add("habit-card");

    const habitInfo = document.createElement("div");
    habitInfo.classList.add("habit-info");

    const habitTitle = document.createElement("p");
    habitTitle.classList.add("habit-title");
    habitTitle.textContent = habit.name;

    const streak = calculateStreak(habit.completedDates);

    const streakText = document.createElement("p");
    streakText.classList.add("streak-text");
    streakText.textContent = `🔥 ${streak} day streak`;

    habitInfo.appendChild(habitTitle);
    habitInfo.appendChild(streakText);

    const buttonGroup = document.createElement("div");
    buttonGroup.classList.add("habit-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    const today = new Date().toISOString().split("T")[0];

    if (habit.completedDates.includes(today)) {
        completeBtn.textContent = "✓ Done";
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");

    completeBtn.addEventListener("click", onComplete);
    deleteBtn.addEventListener("click", onDelete);

    buttonGroup.appendChild(completeBtn);
    buttonGroup.appendChild(deleteBtn);

    habitCard.appendChild(habitInfo);
    habitCard.appendChild(buttonGroup);

    return habitCard;
}

function renderHabits() {
    habitsContainer.innerHTML = "";

    if (habits.length === 0) {
        habitsContainer.classList.add("empty-state");

        const emptyMessage = document.createElement("p");
        emptyMessage.classList.add("no-habits");
        emptyMessage.textContent = "No habits yet. Add your first habit!";

        habitsContainer.appendChild(emptyMessage);

        return;
    }

    habitsContainer.classList.remove("empty-state");

    habits.forEach(function(habit) {
        const habitCard = createHabitCard(
            {
              habit: habit,
              onComplete: function()
            {
              completeHabit(habit);
            },
              onDelete: function() {
              deleteHabit(habit);
            }
        });

        habitsContainer.appendChild(habitCard);
    });
}

function saveHabits() {
    localStorage.setItem("habits", JSON.stringify(habits));
}

function createHabit() {
    const habitName = habitInput.value.trim();

    if (habitName === "") {
        return;
    }

    const newHabit = {
        id: Date.now(),
        name: habitName,
        completedDates: []
    };

    habits.push(newHabit);

    saveHabits();
    renderHabits();
    updateDashboard();

    habitInput.value = "";
}

function updateDashboard() {
    const today = new Date().toISOString().split("T")[0];

    const completedToday = habits.filter(function(habit) {
        return habit.completedDates.includes(today);
    });

    habitsDone.textContent =
        `${completedToday.length}/${habits.length} Completed Today`;
}

function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-toggle");

    localStorage.setItem("darkMode", isDark);

    if (isDark) {
        darkMode.textContent = "Light Mode ☀️";
    } else {
        darkMode.textContent = "Dark Mode 🌙";
    }
}

darkMode.addEventListener("click", toggleDarkMode);
addHabitBtn.addEventListener("click", createHabit);

habitInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        createHabit();
    }
});

renderHabits();
updateDashboard();