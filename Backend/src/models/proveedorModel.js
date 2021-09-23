const { Schema,model } = require('mongoose')


const proveedorSchema = new Schema({    
    
    pid: {
        type:String,    
        required:true,    
        unique:true    
      },
    representante: {type:String,default: ''},
    telRep: {type:String,default: ''},
    correoRep: {type: String,default: ''},    
    adicionalRep: {type: String,default: ''},    
    fechaInicio: {type: Date,default: ''},
    fechaFin: {type: Date,default: ''},    
    URL: {type: String,default: ''},
    telSoporte: {type: String,default: ''},
    correoSoporte: {type: String,default: ''},
    adicionalSoporte: {type: String,default: ''},    
})

module.exports = model('proveedorModel', proveedorSchema)