const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

//config
const port = 3001 || process.env.PORT;

//rountes
app.use(require('./routes/index'));

app.listen(port, () => {
    console.log(`Running on port ${port}`)
})