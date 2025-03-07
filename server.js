const express = require("express");
const path = require("path");
const posts = require('./routes/posts');
const logger = require("./middleware/logger.middleware");
const errorHandler = require("./middleware/error");
const port = process.env.PORT || 8000;

const app = express();

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Logger middleware
app.use(logger);

// Setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use('/api/posts', posts);

// Error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
