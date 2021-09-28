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
    proveedor: { type: Schema.ObjectId, ref: "proveedorModel", default: "615248ce41a6d8a8a4d51d91"},
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
    actividades: [{ type: Schema.ObjectId, ref: "actividadModel", default: "6152638d7077742d2889268e"}],
    elemento: { type: Schema.ObjectId, ref: "elementoModel", default: "6152684d08cd15c30603aace"},
});


    //return this.fechaFinLicencia.toISOString().substring(0,10);
    
  

module.exports = model('equipoModel', equipoSchema)