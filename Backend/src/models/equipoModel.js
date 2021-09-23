const { Schema,model } = require('mongoose')


const equipoSchema = new Schema({
    
    activo: String,
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
    fechaFinSoporte: {type: Date,default: ''},
    fechaFinLicencia: {type: Date,default: ''},
    ipGestion: {type: String,default: ''},
    macAddress: {type: String,default: ''},
    sistemaOperativo: {type: String,default: ''},
    rack: {type: String,default: ''},
    urack: {type: Number,default: ''},
    linea: {type: String,default: ''},
    tipo: {type: String,default: ''},
    infoAdicional: {type: String,default: ''},
})

module.exports = model('equipoModel', equipoSchema)