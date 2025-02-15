 const express = require('express');
 const path = require('path');

const app = express();

// Setup static folder
// app.use(express.static(path.join(__dirname, 'public')));

let posts = [
    {id: 1, title: 'Post One'},
    {id: 2, title: 'Post Two'},
    {id: 3, title: 'Post Three'}
]

app.get('/api/posts', (req, res) => {
    res.json(posts);
});

app.listen(3000, () => console.log(`Server is running on port 3000`));