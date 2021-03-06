const express = require('express');

const connectDB = require('./config/db');

const app = express();

connectDB();

app.get('/', (req,res) => res.send("Running"));

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/books', require('./routes/api/books'));

const PORT = process.env.PORT||5000;

app.listen(PORT, ()=>console.log(`Server running on port ${PORT}`));