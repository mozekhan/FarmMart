// backend/routes/auth.js
Const express = require(“express”);
Const { register, login } = require(“../controllers/authController”);

Const router = express.Router();

Router.post(“/register”, register);
Router.post(“/login”, login);

Module.exports = router;

