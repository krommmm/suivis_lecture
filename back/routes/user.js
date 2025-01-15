const express = require("express");
const router = express.Router();
const userCtrl = require("../ctrl/auth");
const auth = require("../middlewares/auth");
const multer = require("../middlewares/multer-config");

router.post("/signUp", userCtrl.signUp);
router.post("/login", userCtrl.login);

module.exports = router;