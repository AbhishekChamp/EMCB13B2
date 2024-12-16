const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());

const secretKey = "your_secret_key";

// Login route
app.post("/login", async (req, res) => {
    const { username, password } = req.body;
    const user = users.find((u) => u.username === username);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Invalid credentials");
    }

    // Generate token
    const token = jwt.sign({ userId: user.username }, secretKey, {
        expiresIn: "30s",
    });

    res.status(200).send({ token });
});

let users = [];

// Signup route
app.post("/signup", async (req, res) => {
    const { username, password } = req.body;

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 8);

    // Store user
    users.push({ username, password: hashedPassword });
    console.log(users);

    res.status(201).send("User created");
});

app.get("/", (req, res) => {
    res.status(200).send("hello world");
});

// Middleware for token verification
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) return res.status(401).send("Token required");

    jwt.verify(token, secretKey, (err, user) => {
        if (err) return res.status(403).send("Invalid or expired token");
        req.user = user;
        next();
    });
};

// Protected route example
app.get("/dashboard", authenticateToken, (req, res) => {
    res.status(200).send("Welcome to the dashboard, " + req.user.userId);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
