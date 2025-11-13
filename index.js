import express from "express";

const app = express();
const PORT = 3000;

// Middleware to parse JSON (optional for POST)
app.use(express.json());

// 1️⃣ Home route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Express Demo!" });
});

// 2️⃣ Users route
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Sunil Nagpal", role: "Web Developer" },
    { id: 2, name: "Amit Sharma", role: "Backend Developer" },
  ];
  res.json(users);
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
