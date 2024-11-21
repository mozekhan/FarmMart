// backend/controllers/authController.js
const bcrypt = require(“bcryptjs”);
Const jwt = require(“jsonwebtoken”);
Const User = require(“../models/User”);

Exports.register = async (req, res) => {
  Const { name, email, password, role } = req.body;
  Try {
    Const hashedPassword = await bcrypt.hash(password, 10);
    Const user = new User({ name, email, password: hashedPassword, role });
    Await user.save();
    Res.status(201).json({ message: “User registered successfully” });
  } catch (err) {
    Res.status(500).json({ error: err.message });
  }
};

Exports.login = async (req, res) => {
  Const { email, password } = req.body;
  Try {
    Const user = await User.findOne({ email });
    If (!user || !(await bcrypt.compare(password, user.password))) {
      Return res.status(400).json({ message: “Invalid credentials” });
    }
    Const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: “1h” });
    Res.json({ token, user });
  } catch (err) {
    Res.status(500).json({ error: err.message });
  }
};
