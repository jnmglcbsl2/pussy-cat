const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/friend-request-pussy-cat', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'friend-request-pussy-cat.html'));
});

app.listen(PORT, () => {
    console.log('Server is live at http://localhost:${Port}/friend-request-pussy-cat');
});