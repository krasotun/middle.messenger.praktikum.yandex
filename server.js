const express = require('express');
const path = require('path');
const fallback = require('express-history-api-fallback');
const root = `${__dirname}/dist`;
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'dist')));
app.use(fallback('index.html', { root }));
app.listen(PORT, () => {
  console.log(`App works at http://localhost:${PORT}`);
});
