const bcrypt = require("bcryptjs");

const saltRounds = 13;
const password = "1234";

// Function to hash the password
async function hashPassword(password) {
    try {
        // Generate salt
        const salt = await bcrypt.genSalt(saltRounds);

        // Hash the password with the salt
        const hashedPassword = await bcrypt.hash(password, salt);

        return { salt, hashedPassword };
    } catch (error) {
        console.error("Error hashing password:", error);
    }
}

// Hash the password
hashPassword(password).then(({ salt, hashedPassword }) => {
    console.log("Salt:", salt);
    console.log("Hashed Password:", hashedPassword);
});
