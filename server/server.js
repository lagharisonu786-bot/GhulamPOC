const express = require("express");
const path = require("path");
const foodStore = require("./foodStore");
const app = express();

// Log requests to help trace and debug application behaviour.
app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
});
app.use(express.json());

// The only food API route: retrieve all food products.
app.get("/foods", (req, res) => {
    const foods = foodStore.getAll();
    console.log(`Returning ${foods.length} food items.`);
    res.status(200).json(foods);
});

app.use(express.static(path.join(__dirname, "..", "public")));

// Handle unmatched requests after the API and static files.
app.use((req, res) => {
    console.log(`404: ${req.method} ${req.path}`);
    res.status(404).json({ error: "Route not found" });
});

// Importing the app for tests does not start this listener.
if (require.main === module) {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server running on port ${PORT}`);
    });
}
module.exports = app;
