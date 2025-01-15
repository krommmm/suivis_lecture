require("dotenv").config();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/user");
const user = require("../models/user");

exports.signUp = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then((hash) => {

            const user = new User({
                name: req.body.name,
                email: req.body.email,
                password: hash
            });
            user.save()
                .then(() => res.status(201).json({ msg: "user created" }))
                .catch((err) => res.status(401).json({ err }));
        })
        .catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then((user) => {
            if (!user) {
                return res.status(401).json({ msg: "Pair email/mdp incorrect" });
            }
            bcrypt.compare(req.body.password, user.password)
                .then((valid) => {
                    if (!valid) {
                        return res.status(401).json({ msg: "Pair email/mdp incorrect" });
                    }
                    res.status(200).json({
                        token: jwt.sign(
                            { userId: user._id, isAdmin: user.isAdmin },
                            `${process.env.SECRET_KEY}`,
                            { expiresIn: "24h" }
                        )
                    })
                })
                .catch((err) => res.status(400).json({ err }))
        })
        .catch((err) => res.status(500).json({ err }));

}