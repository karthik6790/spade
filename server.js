const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());

// 🔥 This line tells backend to serve your frontend
app.use(express.static(path.join(__dirname, "client")));

app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend 🔥" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});