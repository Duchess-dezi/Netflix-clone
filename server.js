const express = require('express');
const path = require('path');

let initial_path = path.join(__dirname, "Public");

let app = express();
app.use(express.static(initial_path));

app.get('/', (req, res) =>{
    res.sendfile(path.join(initial_path, "index.html"));
})

app.listen(3000, () => {
    console.log('listening on port 3000......');
})