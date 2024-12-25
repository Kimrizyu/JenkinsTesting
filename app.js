const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to our API!');
});

app.get('/api/status', (req, res) => {
    res.json({
        status: 'ok',
        timestamp: new Date().toISOString()
    });
});

app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

module.exports = app;
