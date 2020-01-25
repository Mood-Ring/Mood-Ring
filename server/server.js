const express = require('express');
const path = require('path');
const app = express();

const PORT = 3000;

app.use('/dist', express.static(path.resolve(__dirname, '../dist/')));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../client/index.html'));
});

// app.get('/dist', (req, res) => {
//     res.status(200).sendFile(path.join(__dirname, '../dist/bundle.js'));
// });

app.listen(PORT, () => {
    console.log("listening on port", PORT);
});