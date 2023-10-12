

// Function to fetch and display quotes
function fetchAndDisplayQuotes() {
    const url = 'https://type.fit/api/quotes';
    
     fetch(url)
        .then((response) => {
            console.log(response)
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
var number=1
    quotes.forEach((quote) => {
        const quoteElement = document.createElement('div');
        quoteElement.classList.add('quote');
        quoteElement.innerHTML = `<p>${number++} - "${quote.text}" - ${quote.author}</p>`;
        // Append the quote to the quote section
        quoteSection.appendChild(quoteElement);
    });
}

// Call the function to fetch and display quotes
fetchAndDisplayQuotes();
// Event listener for the search form
document.querySelector('#search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const searchQuery = document.querySelector('#search-input').value;
    // Implement search logic to filter quotes based on searchQuery
});
// Event listener for comment submission
document.querySelector('#comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const commentText = document.querySelector('#comment-input').value;
    // Handle comment submission and update the comment section
});
// Event listener for the like button
document.querySelector('#like-button').addEventListener('click', function() {
    // Handle the like action and update the UI
});

// Event listener for the dislike button
document.querySelector('#dislike-button').addEventListener('click', function() {
    // Handle the dislike action and update the UI
});
document.addEventListener('DOMContentLoaded', function() {
    // Your code to fetch quotes, set up event listeners, and populate the page
});


