const mongoose = require ('mongoose');
const PaisajesSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    place:{
        type: String,
        require: true
    },
    image:{
        type: String,
        required: true
    }

})


PaisajesSchema.methods.setImgUrl = function setImgUrl(filename){
this.image = `public/${filename}`
}

module.exports = mongoose.model('Specie', PaisajesSchema);
