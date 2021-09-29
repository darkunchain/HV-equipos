const { Schema,model } = require('mongoose')


const actividadSchema = new Schema({   
   
    descripcion: {type:String,default: ''},
    ticket: {type:String,default: ''},
    ejecutor: {type:String,default: ''},
    tipo: {type:String,default: ''},    
    infoAdicional: {type: String,default: ''},
    fecha: {type: Date,default: ''},
    horaInicio: {type: String,default: ''},
    horaFin: {type: String,default: ''},   
    
})

module.exports = model('actividadModel', actividadSchema)