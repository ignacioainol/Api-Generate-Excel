const express = require('express');
const app = express();

//config
app.set('port', 3001);

//rountes
app.use(require('./routes/index'));

app.listen(app.get('port'), () => {
    console.log(`Running on port ${app.get("port")}`)
})