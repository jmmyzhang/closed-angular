const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Serve Angular static files from dist folder (adjust path if your Angular app name differs)
app.use(express.static(path.join(__dirname, '../dist/Closed/browser')));

app.get('/{*any}', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/Closed/browser/index.html'));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
