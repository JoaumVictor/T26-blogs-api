const express = require('express');
const appRoutes = require('./routes/index.routes');

// ...

const app = express();

app.use(express.json());

app.use(appRoutes);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
