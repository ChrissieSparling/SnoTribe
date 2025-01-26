// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1); // Get the target ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50, // Adjust for fixed header height
                behavior: "smooth",
            });
        }
    });
});

// Back to Top Button Functionality
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑ Back to Top";
backToTopButton.id = "back-to-top";
backToTopButton.style.display = "none"; // Initially hidden
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

// Alert Messages for Missing Features
document.querySelectorAll(".btn-placeholder").forEach(button => {
    button.addEventListener("click", () => {
        alert("This feature is coming soon. Stay tuned!");
    });
});

// Form Validation (Optional Utility)
function validateForm(form) {
    let isValid = true;
    form.querySelectorAll("input, textarea").forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "red";
            isValid = false;
        } else {
            input.style.borderColor = "";
        }
    });
    return isValid;
}

// Example: Apply validation to all forms with the `needs-validation` class
document.querySelectorAll(".needs-validation").forEach(form => {
    form.addEventListener("submit", e => {
        e.preventDefault(); // Prevent submission
        if (validateForm(form)) {
            alert("Form submitted successfully!");
            form.reset();
        } else {
            alert("Please fill out all required fields.");
        }
    });
});