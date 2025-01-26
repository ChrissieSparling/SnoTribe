// Sample funding programs data
const fundingPrograms = [{
        name: "Education Grant",
        description: "Financial aid for students pursuing higher education.",
        eligibility: "Tribal members enrolled full-time.",
        link: "#"
    },
    {
        name: "Housing Assistance",
        description: "Support for housing needs, including rent and mortgage assistance.",
        eligibility: "Available to all tribal members.",
        link: "#"
    },
    {
        name: "Small Business Grant",
        description: "Funding for tribal entrepreneurs to start or expand a business.",
        eligibility: "Tribal members with a business plan.",
        link: "#"
    },
    {
        name: "Medical Support Program",
        description: "Reimbursement for out-of-pocket medical expenses.",
        eligibility: "All enrolled tribal members.",
        link: "#"
    },
    {
        name: "Elder Support Fund",
        description: "Financial support for elders over the age of 55.",
        eligibility: "Tribal members aged 55 and above.",
        link: "#"
    }
];

// DOM elements
const programList = document.getElementById("program-list");
const searchInput = document.getElementById("search-programs");
const inquiryForm = document.getElementById("inquiry-form");

// Function to render funding programs
function renderPrograms(filter = "") {
    // Clear the program list
    programList.innerHTML = "";

    // Filter and display programs
    fundingPrograms
        .filter(program =>
            program.name.toLowerCase().includes(filter.toLowerCase()) ||
            program.description.toLowerCase().includes(filter.toLowerCase())
        )
        .forEach(program => {
            const programCard = document.createElement("div");
            programCard.className = "program-card";
            programCard.innerHTML = `
                <h3>${program.name}</h3>
                <p>${program.description}</p>
                <p><strong>Eligibility:</strong> ${program.eligibility}</p>
                <a href="${program.link}" target="_blank">Learn More</a>
            `;
            programList.appendChild(programCard);
        });

    // If no programs match, display a message
    if (programList.innerHTML === "") {
        programList.innerHTML = "<p>No funding programs match your search.</p>";
    }
}

// Search bar functionality
searchInput.addEventListener("input", (e) => {
    const filter = e.target.value;
    renderPrograms(filter);
});

// Inquiry form submission
inquiryForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Prevent page reload

    // Get form data
    const name = document.getElementById("inquiry-name").value.trim();
    const email = document.getElementById("inquiry-email").value.trim();
    const message = document.getElementById("inquiry-message").value.trim();

    if (name && email && message) {
        alert("Thank you for your inquiry! We will get back to you soon.");
        inquiryForm.reset(); // Clear the form
    } else {
        alert("Please fill out all fields before submitting.");
    }
});

// Initial render of funding programs
renderPrograms();