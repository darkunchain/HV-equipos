const express = require('express');
const equipoModel = require('../models/equipoModel');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req,res) => {
    const equipos = await equipoModel.find().lean().sort('_id')

    res.render('index', {equipos})
})

router.post('/', async (req,res) => {
    
    const {activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional} = req.body;
        
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

        console.log('newEquipo: ', newEquipo)

        await newEquipo.save()
    res.render('index')
})


router.get('/equipos/edit/:id', async (req,res) => {
    const reqid = req.params.id    
    const equipo = await equipoModel.findById(req.params.id).lean()
    if(equipo.fechaInstalacion){equipo.fechaInstalacion = equipo.fechaInstalacion.toISOString().substring(0,10);}
    if(equipo.fechaInstalacion){equipo.fechaRetiro = equipo.fechaRetiro.toISOString().substring(0,10);}
    if(equipo.fechaInstalacion){equipo.fechaFinSoporte = equipo.fechaFinSoporte.toISOString().substring(0,10);}
    if(equipo.fechaInstalacion){equipo.fechaFinLicencia = equipo.fechaFinLicencia.toISOString().substring(0,10);}
    
    
    

    res.render('partials/modalEquipoEdit', {equipo})
})


router.put('/equipos/edit/:id', async (req,res) => {    

    const editEquipo = {activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional} = req.body;
        
        console.log('editEquipo: ',editEquipo)

    await equipoModel.findByIdAndUpdate(req.params.id, {activo, serial, nombre, marca, modelo, descripcion, placa,
        proveedor, fechaInstalacion, fechaRetiro, fechaFinSoporte,
        fechaFinLicencia, ipGestion, macAddress, sistemaOperativo,
        rack, urack, linea, tipo, infoAdicional})

    res.redirect('/')    
})



router.get('/equipos/view/:id', async (req,res) => {
    const reqid = req.params.id    
    const equipo = await equipoModel.findById(req.params.id).lean()
    if(equipo.activo = 'on'){
        equipo.activo = 'SI'
    }else{
        equipo.activo = 'NO'
    }
    if(equipo.fechaInstalacion){equipo.fechaInstalacion = equipo.fechaInstalacion.toISOString().substring(0,10);}
    if(equipo.fechaInstalacion){equipo.fechaRetiro = equipo.fechaRetiro.toISOString().substring(0,10);}
    if(equipo.fechaInstalacion){equipo.fechaFinSoporte = equipo.fechaFinSoporte.toISOString().substring(0,10);}
    if(equipo.fechaInstalacion){equipo.fechaFinLicencia = equipo.fechaFinLicencia.toISOString().substring(0,10);}
    
    
    

    res.render('viewEquipo', {equipo})
})





module.exports = router;
