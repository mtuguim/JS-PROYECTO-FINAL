const multer = require('multer')

const storage= multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, './src/uploads')
    },
    filename: function(req, file, cb){
        /* console.log('foto:'+JSON.stringfy(file)) */
        cb(null, `${file.fieldname}-${Date.now()}.jpg` ) //rename the image to original name
    }
})


const upload = multer({storage})

module.exports = upload