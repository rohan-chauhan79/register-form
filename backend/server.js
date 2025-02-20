require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// User Schema
const UserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    password: String
});

const User = mongoose.model('User', UserSchema);

// Register Route
app.post('/register', async (req, res) => {
    const { firstName, lastName, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ firstName, lastName });
    if (existingUser) {
        return res.status(400).json({ message: "User with this name already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ firstName, lastName, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully!" });
});

// Get Users Route
app.get('/users', async (req, res) => {
    const users = await User.find().select('-password'); // Don't send passwords
    res.json(users);
});

// Start Server
app.listen(5000, () => console.log('Server running on port 5000'));
