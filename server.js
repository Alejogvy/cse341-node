const express = require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const app = express();
const port = 3000;

// Middleware for BongoDB 
connectDB();

// Middleware for JSON
app.use(express.json());

// Endpoint
app.get('/api/data', (req, res) => {
    const sampleData = {
        message: "¡Hi, I made a GET request successfully!"
    };
    res.json(sampleData);
});

// User routes
app.use('/api/users', userRoutes);

// We use port 3000
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
