const express = require('express');

// Basic express setup

const app = express();

// Specify localhost port
app.listen(3000);

app.get('/', (req, res) => {
  res.sendFile('./views/index.html', { root: __dirname });
});

// 301 redirect
app.get('/about-me', (req, res) => {
  res.redirect(301, '/about');
});

app.get('/about', (req, res) => {
  res.sendFile('./views/about.html', { root: __dirname });
});

// 404 page
app.use((req, res) => {
  res.status(404).sendFile('./views/404.html', { root: __dirname });
});
