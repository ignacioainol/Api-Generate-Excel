const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

//config
const port = 3000 || process.env.PORT;

//rountes
app.use(require('./routes/index'));

app.listen(process.env.PORT || 3000, () => {
    console.log(`Running on port ${port}`)
})