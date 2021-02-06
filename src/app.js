const express = require('express');
const app = express();
var cors = require('cors');

app.use(cors());

//config
app.set('port', 3001);

//rountes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log(`Running on port ${app.get("port")}`)
})