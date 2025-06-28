// Import the Express library (a web framework for Node.js)
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port the app will listen on (use environment variable PORT if set, else default to 3000)
const PORT = process.env.PORT || 3000;

// Define a GET route for the root URL ("/")
// When someone visits http://localhost:3000/, this will send a simple response
app.get('/', (req, res) => {
    res.send('Hello from Node.js in Kubernetes!');
});

// Start the server and listen on the specified port
// When the app starts, it will print a message to the console
app.listen(PORT, () => {
    console.log(`App running on port ${PORT}`);
});

