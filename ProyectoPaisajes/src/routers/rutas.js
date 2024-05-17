const express = require('express');
const PaisajesSchema = require ('../models/ProyectoPaisajes')
const router = express.Router();
const upload = require(`../libs/storage`);



router.post('/rutas', upload.single('image'), (req, res) => {
    const paisaje= PaisajesSchema(req.body)
    if(req.file){
        const{filename}=req.file
        paisaje.setImgUrl(filename)
    }
    paisaje.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message:error }))
})

//crear especie
router.post('/rutas', (req,res)=>{
    const paisajes = PaisajesSchema(req.body)
    paisajes.save()
    .then((data)=> res.json(data))
    .catch((error)=> res.json({ message:error }))
});




//listar todas las species-paisajes

router.get('/rutas', (req,res) => {
    //res.header('Acces-Control-Allow-Origin', '*')
    PaisajesSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({message: error}))
});



//actualizar una especie-paisaje por la BD
router.put('/rutas/:id', (req, res) => {
    const { id } = req.params;
    const { name, place, image} = req.body;
    PaisajesSchema
    .updateOne({_id: id}, {$set: {name, place, image}})
    .then((data) => res.json((data)))
    .catch((error) => res.json({message:(error)}))
});



//borrar una especie-paisaje
router.delete('/rutas/:id', (req, res)=> {
    const { id } = req.params;
    userSchema
    .deleteOne({_id : id})
    .then((data) => res.json(data))
    .catch((error) => res.json({message: (error)}))
})




module.exports =router;
