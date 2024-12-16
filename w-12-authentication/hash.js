const crypto = require("crypto");

function hashPassword(password) {
    // Create a SHA-256 hash
    const hash = crypto.createHash("sha256");
    hash.update(password);
    return hash.digest("hex");
}

const password = "1234";
const hashedPassword = hashPassword(password);

console.log("Hashed Password:", hashedPassword);
