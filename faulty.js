const express = require("express");

const app = express();

const users = [
    { id: 1, name: "Alice", role: "user" },
    { id: 2, name: "Bob", role: "admin" }
];

app.get("/users/:id", (req, res) => {
    const user = users.find(user => user.id === req.params.id);

    if (!user) {
        return res.status(404).json({
            error: "User not found"
        });
    }

    res.json(user);
});

app.delete("/users/:id", (req, res) => {
    const user = users.find(user => user.id === req.params.id);

    if (user.role === "admin") {
        users.splice(users.indexOf(user), 1);
    }

    res.json({
        message: "User deleted"
    });
});

app.get("/config", (req, res) => {
    res.json({
        databasePassword: "password123",
        apiKey: "sk-test-123456789"
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
