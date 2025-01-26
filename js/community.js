// Forum Post Functionality
const forumForm = document.getElementById("forum-form");
const forumMessages = document.getElementById("forum-messages");

document.getElementById("post-message").addEventListener("click", () => {
    const textarea = forumForm.querySelector("textarea");
    const message = textarea.value.trim();

    if (message) {
        const messageDiv = document.createElement("div");
        messageDiv.textContent = message;
        messageDiv.className = "forum-message";
        forumMessages.appendChild(messageDiv);
        textarea.value = ""; // Clear the textarea
    } else {
        alert("Please write a message before posting.");
    }
});

// Shout-Outs Functionality
const shoutoutsForm = document.getElementById("shoutouts-form");
const shoutoutsList = document.getElementById("shoutouts-list");

document.getElementById("add-shoutout").addEventListener("click", () => {
    const input = shoutoutsForm.querySelector("input");
    const shoutout = input.value.trim();

    if (shoutout) {
        const li = document.createElement("li");
        li.textContent = shoutout;
        shoutoutsList.appendChild(li);
        input.value = ""; // Clear the input
    } else {
        alert("Please write a shout-out before adding.");
    }
});