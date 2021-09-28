const { Schema,model } = require('mongoose')


const actividadSchema = new Schema({   
   
    descripcion: {type:String,default: ''},
    ticket: {type:String,default: ''},
    ejecutor: {type:String,default: ''},
    tipo: {type:String,default: ''},
    //equipo: { type: Schema.ObjectId, ref: "equipoModel", default: 'ObjectId("614e3003026a7951c7282e80")'},    
    infoAdicional: {type: String,default: ''},
    fecha: {type: Date,default: ''},
    horaInicio: {type: Date,default: ''},
    horaFin: {type: Date,default: ''},   
    
})

module.exports = model('actividadModel', actividadSchema)