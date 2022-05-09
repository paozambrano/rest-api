const express = require('express');
const app = express();


//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(express.json());

//Routes

app.use(require('./routes/employees'))
//Starting Server
app.get('/', () => {
    app.send('Port 3000')
})
app.listen(app.get('port'), () => {
    console.log('Server on Port', app.get('port'))
})