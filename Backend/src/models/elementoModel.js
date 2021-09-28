const { Schema,model } = require('mongoose')


const elementoSchema = new Schema({

    tipo: {type:String,default: ''},   
    descripcion: {type:String,default: ''},    
    //equipo: { type: Schema.ObjectId, ref: "equipoModel", default: 'ObjectId("615248ce41a6d8a8a4d51e65")'},    
    infoAdicional: {type: String,default: ''},
    
})

module.exports = model('elementoModel', elementoSchema)