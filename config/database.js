const mongoose = require("mongoose");

async function connectDB() {
    try {
        await mongoose.connect("mongodb+srv://beraultcyril:0vm8CtU3xeAgdLTf@clustertraveltool.dennm.mongodb.net/?retryWrites=true&w=majority&appName=ClusterTravelTool", {
           
        });
        console.log("✅ Connexion à MongoDB réussie !");
    } catch (error) {
        console.error("❌ Erreur de connexion à MongoDB :", error);
    }
}

module.exports = connectDB;
