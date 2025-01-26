// Auto-fill fields if "No Change" is checked
const noChangeCheckbox = document.getElementById("no-change");
const formFields = document.querySelectorAll("#renewal-form input");

noChangeCheckbox.addEventListener("change", () => {
    if (noChangeCheckbox.checked) {
        formFields.forEach(field => {
            if (field.type !== "checkbox" && field.type !== "submit") {
                field.value = "Auto-filled Value"; // Replace with stored data
            }
        });
    } else {
        formFields.forEach(field => {
            if (field.type !== "checkbox" && field.type !== "submit") {
                field.value = ""; // Clear fields if unchecked
            }
        });
    }
});

// Form submission
const renewalForm = document.getElementById("renewal-form");

renewalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("All forms have been successfully submitted!");
    renewalForm.reset();
    noChangeCheckbox.checked = false; // Reset "No Change" checkbox
});