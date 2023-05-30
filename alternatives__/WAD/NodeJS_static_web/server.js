// npm init -y
// npm install express

const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Start the server
app.listen(port, () => {
  console.log(`Static website server running on http://localhost:${port}`);
});

// project-directory
// └── public
//     └── index.html
// node server.js