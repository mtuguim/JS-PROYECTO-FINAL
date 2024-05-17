const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config();
const RutasPaisajes= require(`./routers/rutas`);

const app = express();
const port = process.env.PORT || 9000;

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', RutasPaisajes)
app.use('/public', express.static(`${__dirname}/uploads`))
app.use('/user', express.static(`${__dirname}/user`))


app.use(express.static(`${__dirname}/user`))

//RUTA 
app.get('/', (req,res)=>{
    //res.send("bienvenidos a mi api")
    res.sendFile(`${__dirname}/index.html`)
})
app.listen(port, () => console.log('Server listening at port: ', port));


//CONNEXION MONGO 
mongoose.connect(process.env.MONGODB_URL)
.then(()=> console.log('Connectes to Database'))
.catch((error)=> console.error(error))