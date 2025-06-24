const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the client directory
app.use(express.static(path.join(__dirname, '../client')));

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Fallback to index.html for SPA routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/render front.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
