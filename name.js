const express = require("express");
const fs = require("fs/promises");
const path = require("path");
const crypto = require("crypto");

const app = express();

app.use(express.json());

const uploadsDir = path.resolve(__dirname, "uploads");

function hashPassword(password) {
    return crypto.createHash("sha256").update(password).digest("hex");
}

function generateToken() {
    return crypto.randomBytes(32).toString("hex");
}

function findDuplicates(values) {
    const seen = new Set();
    const duplicates = new Set();

    for (const value of values) {
        if (seen.has(value)) {
            duplicates.add(value);
        } else {
            seen.add(value);
        }
    }

    return [...duplicates];
}

function calculateTotal(items) {
    return items.reduce((sum, value) => sum + value, 0);
}

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    if (
        typeof username !== "string" ||
        typeof password !== "string"
    ) {
        return res.status(400).json({
            error: "Invalid request payload."
        });
    }

    const hashedPassword = hashPassword(password);

    const user = {
        username,
        passwordHash: hashedPassword
    };

    res.json({
        message: "Login request processed.",
        user: {
            username: user.username
        }
    });
});

app.post("/register", async (req, res) => {
    const { username, password } = req.body;

    if (
        typeof username !== "string" ||
        typeof password !== "string"
    ) {
        return res.status(400).json({
            error: "Invalid request payload."
        });
    }

    const user = {
        username,
        passwordHash: hashPassword(password),
        token: generateToken()
    };

    res.status(201).json({
        message: "User registered successfully.",
        username: user.username
    });
});

app.get("/download", async (req, res) => {
    const requestedFile = path.basename(req.query.file || "");

    if (!requestedFile) {
        return res.status(400).json({
            error: "File name is required."
        });
    }

    try {
        const filePath = path.join(uploadsDir, requestedFile);
        const contents = await fs.readFile(filePath, "utf8");
        res.type("text/plain").send(contents);
    } catch {
        res.status(404).json({
            error: "File not found."
        });
    }
});

app.get("/analytics", (req, res) => {
    const values = Array.from({ length: 1000 }, (_, index) => index + 1);

    const total = calculateTotal(values);

    res.json({
        total,
        count: values.length
    });
});

app.get("/report", (req, res) => {
    const data = [1, 2, 3, 2, 4, 5, 5, 6];

    const duplicates = findDuplicates(data);

    res.json({
        duplicates
    });
});

app.use((req, res) => {
    res.status(404).json({
        error: "Route not found."
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
function calculate(items) {
    return items.reduce((sum, value) => sum + value, 0);
}
