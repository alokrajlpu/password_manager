const express = require("express");
const dotenv = require("dotenv");
const { MongoClient } = require("mongodb");
const bodyparser = require("body-parser");
const cors = require("cors");
const { createLogger } = require("vite");
const User = require("./mongo");
const bcrypt = require("bcrypt");

dotenv.config();

// Connecting to the MongoDB Client
const url = process.env.MONGO_URI;
const client = new MongoClient(url);
client.connect().then(() => {
  console.log("mongodb connected");
});

// App & Database
const dbName = process.env.DB_NAME;
const app = express();
const port = 3000;

// Middleware
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use(cors());

//signup
app.post("/signup", async (req, res) => {
  try {
    // const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // Create a new user
    // console.log(username)
    // console.log(email)
    // console.log(password)
    if (email.length == 0 || password.length == 0) {
      res.send("Details Missing !");
      return;
    }
    const newUser = await User.create({
      email,
      password,
    });

    console.log("User created:", newUser);
    // Return the created user data in the response
    res.status(201).json(
      //    / Include the new user data in the response
      "Created",
    );
    // res.redirect("http://localhost:5173/Home");
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

//login
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // console.log(email)

    // Find user by email
    if (email.length == 0 || password.length == 0) {
      res.send("Details Missing !");
      return;
    }

    const user = await User.findOne({ email });
    console.log(user);
    if (!user) {
      // User not found
      res.send("User not found");
      return;
    }

    // // Check if passwords match
    if (password === user.password) {
      // Passwords match, redirect to home page
      res.send("Correct");
    } else {
      // Passwords don't match
      res.send("Incorrect password");
    }
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).send("Internal server error");
  }
});
// const bcrypt = require('bcrypt');

// app.post('/login', async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         console.log("Login request received:", email);

//         // Find user by email
//         const user = await User.findOne({ email });

//         if (!user) {
//             // User not found
//             console.log("User not found");
//             res.status(404).json({ message: "User not found" });
//             return;
//         }

//         // Compare passwords using bcrypt
//         const passwordMatch = await bcrypt.compare(password, user.password);

//         if (passwordMatch) {
//             // Passwords match, authentication successful
//             console.log("Login successful:", email);
//             res.status(200).json({ message: "Login successful" });
//         } else {
//             // Passwords don't match
//             console.log("Incorrect password for user:", email);
//             res.status(401).json({ message: "Incorrect email or password" });
//         }
//     } catch (error) {
//         console.error("Error during login:", error);
//         res.status(500).json({ message: "Internal server error" });
//     }
// });

// Get all the passwords
app.get("/", async (req, res) => {
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.find({}).toArray();
  res.json(findResult);
});

// Save a password
app.post("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.insertOne(password);
  res.send({ success: true, result: findResult });
});

// Delete a password by id
app.delete("/", async (req, res) => {
  const password = req.body;
  const db = client.db(dbName);
  const collection = db.collection("passwords");
  const findResult = await collection.deleteOne(password);
  res.send({ success: true, result: findResult });
});

app.listen(port, () => {
  console.log(`Example app listening on  http://localhost:${port}`);
});
