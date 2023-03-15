const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/save', (req, res) => {
  console.log('Save endpoint called');
  res.status(200).send('Save successful');
});

app.post('/publish', (req, res) => {
  console.log('Publish endpoint called');
  res.status(200).send('Publish successful');
});

app.post('/validate', (req, res) => {
  console.log('Validate endpoint called');
  res.status(200).send('Validation successful');
});

app.post('/execute', (req, res) => {
  console.log('Execute endpoint called');
  res.status(200).send('Execute successful');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
