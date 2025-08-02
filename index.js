const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

// Root route (for default "/")
app.get('/', (req, res) => {
  res.send('Hello! Try going to <a href="/friend-request-pussy-cat">your invite</a>.');
});

app.listen(PORT, () => {
  console.log(`Server is live at http://localhost:${PORT}/friend-request-pussy-cat`);
});