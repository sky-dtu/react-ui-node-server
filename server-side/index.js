const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})


app.get('/api/', (req, res) => {
    res.send('Hello World - API');
})


app.listen(3001, () => console.log('Listening on 3000...'));