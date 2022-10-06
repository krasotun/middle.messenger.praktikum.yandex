const express = require("express");
const path = require("path");
const PORT = 3000;
const app = express();
const pathName = path.join(__dirname, "../dist/index.html")
app.use(express.static("./dist"));
app.listen(PORT, () => console.log(`App works at PORT:${PORT}`));
