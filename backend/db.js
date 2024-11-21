// backend/config/db.js
Const mongoose = require(“mongoose”);
Require(“dotenv”).config();

Const connectDB = async () => {
  Try {
    Await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    Console.log(“MongoDB connected...”);
  } catch (err) {
    Console.error(err.message);
    Process.exit(1);
  }
};

Module.exports = connectDB;

