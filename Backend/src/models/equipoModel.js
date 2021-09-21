const { Schema,model } = require('mongoose')

const equipoSchema = new Schema({
    Activo: Boolean,
    serial: {
        type:String,    
        required:true,    
        unique:true    
      },
    nombre: {type:String,required:true},
    marca: {type:String,required:true},
    modelo: {type: String,default: ''},    
    descripcion: {type: String,default: ''},
    placa: {type: String,default: ''},
    proveedor: {type: String,default: ''},
    fechaInstalacion: {type: Date,default: ''},
    fechaRetiro: {type: Date,default: ''},
    fechaIniSoporte: {type: Date,default: ''},
    fechaFinSoporte: {type: Date,default: ''},
    ipGestion: {type: String,default: ''},
    macAddress: {type: String,default: ''},
    sistemaOperativo: {type: String,default: ''},
    rack: {type: String,default: ''},
    urack: {type: Number,default: ''},

    

})

module.exports = model('equipo', equipoSchema)