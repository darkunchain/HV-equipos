const express = require('express');
const equipoModel = require('../models/equipoModel');
const proveedorModel = require('../models/proveedorModel');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req,res) => {
    const equipos = await equipoModel.find().lean().populate('proveedor')
    const proveedores = await proveedorModel.find().lean();
    
    res.render('index', {equipos, proveedores})
})

router.post('/', async (req,res) => {
    
    const {activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional} = req.body;
        
    
    const proveedorDrop = await proveedorModel.find();
    
    

    const errors =[];
    if(!serial){
        errors.push({text: 'Debe ingresar el serial del equipo'})
    }
    if(!nombre){
        errors.push({text: 'Debe ingresar el nombre del equipo'})
    }

    const newEquipo = new equipoModel({activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional});

      

        await newEquipo.save()
    res.render('index', {proveedor})
})


router.get('/equipos/edit/:id', async (req,res) => {
    const reqid = req.params.id    
    const equipo = await equipoModel.findById(req.params.id).lean().populate('proveedor').populate('actividades').populate('elemento')
    const proveedores = await proveedorModel.find().lean()
    const activities = equipo.actividades
    

    if(equipo.fechaInstalacion){equipo.fechaInstalacion = equipo.fechaInstalacion.toISOString().substring(0,10);}
    if(equipo.fechaRetiro){equipo.fechaRetiro = equipo.fechaRetiro.toISOString().substring(0,10);}
    if(equipo.fechaFinSoporte){equipo.fechaFinSoporte = equipo.fechaFinSoporte.toISOString().substring(0,10);}
    if(equipo.fechaFinLicencia){equipo.fechaFinLicencia = equipo.fechaFinLicencia.toISOString().substring(0,10);}
    
    

    res.render('partials/modalEquipoEdit', {equipo,proveedores,activities})
})


router.put('/equipos/edit/:id', async (req,res) => {    

    const editEquipo = {activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional} = req.body;
        
        

    await equipoModel.findByIdAndUpdate(req.params.id, {activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional})

    res.redirect('/')    
})



router.get('/equipos/view/:id', async (req,res) => {
    const reqid = req.params.id    
    const equipo = await equipoModel.findById(req.params.id).lean().populate('proveedor')
    if(equipo.activo = 'on'){
        equipo.activo = 'SI'
    }else{
        equipo.activo = 'NO'
    }
    if(equipo.fechaInstalacion){equipo.fechaInstalacion = equipo.fechaInstalacion.toISOString().substring(0,10);}
    if(equipo.fechaRetiro){equipo.fechaRetiro = equipo.fechaRetiro.toISOString().substring(0,10);}
    if(equipo.fechaFinSoporte){equipo.fechaFinSoporte = equipo.fechaFinSoporte.toISOString().substring(0,10);}
    if(equipo.fechaFinLicencia){equipo.fechaFinLicencia = equipo.fechaFinLicencia.toISOString().substring(0,10);}
    
    
    const equipoActividades = await equipoModel.findById(req.params.id).lean().populate('actividades')
    const activities = equipoActividades.actividades
    console.log('actividades1: ', activities)

    
    activities.forEach(element => {
        if(element.fecha){
            element.fecha = element.fecha.toISOString().substring(0,10);
        }
                
    });   
    
    
    res.render('viewEquipo', {equipo,activities})
})

router.get('/proveedores', async (req,res) => {
    const equipos = await equipoModel.find().lean().sort('_id')
    const proveedores = await proveedorModel.find().lean();    

    res.render('proveedores', {equipos, proveedores})
})

router.post('/proveedores', async (req,res) => {
   

    const {nombre, representante, orden, telRep, correoRep, adicionalRep, fechaInicio, 
    fechaFin, URL, telSoporte, correoSoporte, adicionalSoporte} = req.body;    
        
    
     const newProveedor = new proveedorModel({nombre, representante, orden, telRep, correoRep, adicionalRep, fechaInicio, 
        fechaFin, URL, telSoporte, correoSoporte, adicionalSoporte});

        

        await newProveedor.save() 
    res.render('proveedores')
})





module.exports = router;
