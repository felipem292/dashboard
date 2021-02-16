const express = require("express");
const path = require("path");
const port = process.env.PORT || 8080;
const app = express();
var distDir = path.join(__dirname, "dist/");

app.use(express.static(distDir));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(distDir, "index.html"));
});

console.log("DIST DIR CHECK ", distDir);
console.log("LISTENING! on port ", port);
app.listen(port);
