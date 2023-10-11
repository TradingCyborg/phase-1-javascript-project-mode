const apiUrl = '"https://zenquotes.io/api/quotes/';

// Function to fetch and display quotes
function fetchAndDisplayQuotes() {
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            displayQuotes(data);
        })
        .catch((error) => {
            console.error('Error fetching quotes:', error);
        });
}

// Function to display quotes on the webpage
function displayQuotes(quotes) {
    const quoteSection = document.getElementById('quote-section');

    quotes.forEach((quote) => {
        const quoteElement = document.createElement('div');
        quoteElement.classList.add('quote');
        quoteElement.innerHTML = `<p>"${quote.text}" - ${quote.author}</p>`;

        // Append the quote to the quote section
        quoteSection.appendChild(quoteElement);
    });
}

// Call the function to fetch and display quotes
fetchAndDisplayQuotes();
