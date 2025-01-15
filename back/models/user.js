const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    imgUrl: {type: String, default:"sdiofhjsdf"},
    favorites: [
        {
            bookId: { type: String, require: true },
            status: { type: String, enum: ['à lire', 'en cours', 'lus'], default: 'à lire' }
        }
    ]
});


module.exports = mongoose.model("user", userSchema);