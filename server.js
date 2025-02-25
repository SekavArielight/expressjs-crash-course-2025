const express = require("express");
const path = require("path");
const posts = require('./routes/posts');
const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

app.listen(port, () => console.log(`Server is running on port ${port}`));
