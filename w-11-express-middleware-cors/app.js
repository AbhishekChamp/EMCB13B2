const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;

// Middleware setup
app.use(express.json()); // Parses JSON request bodies
app.use(cors()); // Enables Cross-Origin Resource Sharing

app.use(
    cors({
        origin: "http://127.0.0.1:5500",
        methods: ["GET", "POST"],
    }),
);

// Custom Middleware
app.use((req, res, next) => {
    console.log("Custom middleware executed");
    next();
});

app.get("/", (req, res) => {
    res.json({ name: "EMC" });
});

app.get("/hello", (req, res) => {
    res.json({ text: "Hello World" });
});

app.listen(port, () => {
    console.log(`App is running in port ${port}`);
});
