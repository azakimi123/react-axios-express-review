const express = require('express');
const ctrl = require('./controller');
const app = express();


//endpoints
app.get('/api/books', ctrl.getBooks);




app.listen(4500, () => console.log('Server running on 4500'));