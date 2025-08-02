const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Route for the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'friend-request-pussy-cat.html'));
});

// Optional: Named route (you can keep or remove)
app.get('/friend-request-pussy-cat', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'friend-request-pussy-cat.html'));
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}`);
});