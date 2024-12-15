const cartoonFacts = {
    "cartoon_facts": [
        {
            "id": 1;
            "fact": "Mickey Mouse was originally named Mortimer Mouse until Walt Disney's wife convinced him to change it",
            "year": 1928
        },
        // Include all 20 facts from your JSON data
    ]
};

let currentFactIndex = 0;

function displayNextFact() {
    if (currentFactIndex < cartoonFacts.cartoon_facts.length) {
        const factObj = cartoonFacts.cartoon_facts[currentFactIndex];
        const factDisplay = document.getElementById('fact-display');
        factDisplay.innerHTML = ''; // Clear previous fact

        const factText = document.createElement('p');
        factText.className = 'fact-text';
        factText.textContent = factObj.fact;
        factDisplay.appendChild(factText);

        if (factObj.year) {
            const yearText = document.createElement('p');
            yearText.className = 'fact-year';
            yearText.textContent = `Year: ${factObj.year}`;
            factDisplay.appendChild(yearText);
        }

        currentFactIndex++; // Move to the next fact
    } else {
        // Reset to the first fact if end of array is reached
        currentFactIndex = 0;
        displayNextFact();
    }
}

document.getElementById('next-fact').addEventListener('click', displayNextFact);

// Display the first fact on page load
window.addEventListener('load', displayNextFact);
