const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;
const uri = "mongodb+srv://AlejogvyDB:aGyt3AAPNt6rKn9t@cluster0.mnlrm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const client = new MongoClient(uri);

// Route to the root
app.get('/', (req, res) => {
    res.send('Welcome to the User API');
});

// Route to get users
app.get('/users', async (req, res) => {
    try {
        console.log("Accessing the route /users...");
        await client.connect();
        const db = client.db('AlejogvyDB');
        const users = await db.collection('users').find().toArray();
        res.json(users);
    } catch (error) {
        console.error("Error:", error.message);
        res.status(500).json({ error: error.message });
    } finally {
        await client.close();
    }
});

// Raise the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
