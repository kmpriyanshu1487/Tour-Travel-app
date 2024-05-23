require("dotenv").config();
const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// database connection
mongoose.connect(
  "mongodb+srv://Carrent:Car_rent2024@cluster0.zvxrdu9.mongodb.net/Carrent"
);
// api creation
app.get("/", (req, res) => {
  res.send("Express App is Running");
});

app.listen(port, (error) => {
  if (!error) {
    console.log("Server Running on Port " + port);
  } else {
    console.log("Error:" + error);
  }
});

const Users = mongoose.model("Users", {
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

app.post("/signup", async (req, res) => {
  let check = await Users.findOne({ email: req.body.email });
  if (check) {
    return res
      .status(400)
      .json({ success: false, errors: "Existing user found with same email" });
  }

  const user = new Users({
    name: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });

  await user.save();
  const data = {
    user: {
      id: user.id,
    },
  };
  const token = jwt.sign(data, "secret_ecom");
  res.json({ success: true, token });
});

//login
app.post('/login', async (req, res) => {
    try {
      const user = await Users.findOne({ email: req.body.email });
      if (!user) {
        return res.status(400).json({ success: false, errors: "User not found" });
      }
  
      const passCompare = req.body.password === user.password;
  
      if (passCompare) {
        const data = {
          user: {
            id: user.id,
          },
        };
        const token = jwt.sign(data, "secret_ecom");
        res.json({ success: true, token });
      } else {
        res.status(400).json({ success: false, errors: "Wrong password" });
      }
    } catch (error) {
      console.error("Login Error:", error);
      res.status(500).json({ success: false, errors: "Internal Server Error" });
    }
  });

