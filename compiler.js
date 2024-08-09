document.addEventListener("DOMContentLoaded", function() {
    const apiEndpoint = 'https://jsonplaceholder.typicode.com/posts'; // Mock API endpoint
    const apiKey = 'sk_test_4eC39HqLyjWDarjtT1zdp7dc'; // User API key for demonstration
    const compileButton = document.getElementById('compileButton');
    const resultContainer = document.getElementById('resultContainer');

    // Function to compile code using the API
    function compileCode(code) {
        fetch(apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: JSON.stringify({ code: code })
        })
        .then(response => response.json())
        .then(data => {
            console.log('API response:', data);
            displayResult(data);
        })
        .catch(error => {
            console.error('Error:', error);
            displayResult({ error: 'Failed to compile code. Please try again later.' });
        });
    }

    // Function to display the result of the compilation
    function displayResult(data) {
        if (data.error) {
            resultContainer.innerHTML = `<p style="color: red;">${data.error}</p>`;
        } else {
            resultContainer.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
        }
    }

    // Event listener for the compile button
    compileButton.addEventListener('click', function() {
        const codeInput = document.getElementById('codeInput').value;
        if (codeInput.trim()) {
            compileCode(codeInput);
        } else {
            resultContainer.innerHTML = '<p style="color: red;">Please enter code to compile.</p>';
        }
    });
});
