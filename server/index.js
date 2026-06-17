const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;

app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', service: 'Cinema Time Backend', developer: 'N58' });
});

// TMDB Proxy Example
app.get('/api/movies/trending', async (req, res) => {
  try {
    // Logic for TMDB fetch would go here
    res.json({ results: [] });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

app.listen(PORT, () => {
  console.log(`Cinema Time Server running on port ${PORT} [N58]`);
});