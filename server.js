const express = require("express");
const connectDB = require("./config/database");

const app = express();
const PORT = 3000;

// Connexion à MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Serveur démarré sur http://localhost:${PORT}`);
});

