const express = require('express');
const app = express();

require('./routes')(app, {});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=> console.log(`Server started on ${PORT}`));