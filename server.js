const express = require('express');

const app = express();

const PORT = process.env.PORT || 7777;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

require('./routes/apiRoutes')(app);
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Server is listening at http://localhost:${PORT}`));