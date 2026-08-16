const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactMessage = document.getElementById("contact-message");
const contactStatus = document.getElementById("contact-status");
const darkMode = document.getElementById("dark-mode");
const quoteText = document.getElementById("quote-text");
const quoteBtn = document.getElementById("quote-btn");

const savedDarkMode = localStorage.getItem("darkMode");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = contactName.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    if (name === "" || email === "" || message === "") {
        contactStatus.textContent = "Please fill out all fields.";
        return;
    }

    const savedMessages = localStorage.getItem("messages");
    let messages;

    if (savedMessages) {
        messages = JSON.parse(savedMessages);
    } else {
        messages = [];
    }

    const newMessage = {
        name: name,
        email: email,
        message: message
    };

    messages.push(newMessage);

    localStorage.setItem("messages", JSON.stringify(messages));

    contactStatus.textContent = "Message sent successfully!";

    contactName.value = "";
    contactEmail.value = "";
    contactMessage.value = "";
});

function toggleDarkMode() {
    const isDark = document.body.classList.toggle("dark-toggle");

    localStorage.setItem("darkMode", isDark);
    if (isDark) {
        darkMode.textContent = "Light Mode ☀️";
    } else {
        darkMode.textContent = "Dark Mode 🌙";
    };
}

darkMode.addEventListener("click", toggleDarkMode);

if (savedDarkMode === "true") {
    document.body.classList.add("dark-toggle");
    darkMode.textContent = "Light Mode ☀️";
}

function getQuote() {
    fetch("https://dummyjson.com/quotes/random")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        quoteText.textContent = `"${data.quote}" - ${data.author}`;
    });
}

quoteBtn.addEventListener("click", getQuote);

