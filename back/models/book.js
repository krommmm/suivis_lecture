const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    titre: { type: String, required: true },
    auteur: { type: String, required: true },
    edition: { type: String, required: true },
    auteur: { type: String, required: true },
    description: { type: String, required: true },
    genre: { type: String, enum: ['fantastique', 'sf', 'policier', 'romance', 'historique', 'jeunesse', 'classiques'], default: 'fantastique' },
    publishedDate: { type: Date, required: true },
    ratings: [
        {
            userId: { type: String },
            ratings: { type: Number }
        }
    ],
    imgUrl: { type: String },
});

module.exports = mongoose.model("book", bookSchema);