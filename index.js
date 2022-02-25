const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.sendFile('app.html', {root: __dirname})
});

app.get('/watch/video', (req, res) => {
  res.sendFile('watch.html', {root: __dirname})
});

app.listen(3000, () => {
  console.log('server started');
});
