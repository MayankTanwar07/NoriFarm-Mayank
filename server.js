const express = require("express");
const cors = require("cors");
const path = require("path");
const matchRoute = require("./Routes/Match");

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "public"))); // Serve index.html and app.js
app.use("/api", matchRoute); // Serve API

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
