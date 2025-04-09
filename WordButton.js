// Function to fetch a random word from Urban Dictionary
async function fetchRandomWord() {
    try {
        const response = await fetch('https://api.urbandictionary.com/v0/random');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        const randomWord = data.list[0]?.word || 'No word found';
        const definition = data.list[0]?.definition || 'No definition found';

        // Display the word and definition
        document.getElementById('wordDisplay').innerText = `Word: ${randomWord}`;
        document.getElementById('definitionDisplay').innerText = `Definition: ${definition}`;
    } catch (error) {
        console.error('Error fetching random word:', error);
        document.getElementById('wordDisplay').innerText = 'Error fetching word';
        document.getElementById('definitionDisplay').innerText = '';
    }
}

// Add event listener to the button
document.getElementById('fetchWordButton').addEventListener('click', fetchRandomWord);