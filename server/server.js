const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

// Serve Angular static files from dist folder (build your Angular app first)
app.use(express.static(path.join(__dirname, '../dist/my-angular-app')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/my-angular-app/index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
