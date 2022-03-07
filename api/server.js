const express = require('express');
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static(path.join(__dirname, '../reactjs')));

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../reactjs/build', 'index.html'));
});

app.listen(port);
