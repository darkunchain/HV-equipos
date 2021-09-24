const express = require('express');
const equipoModel = require('../models/equipoModel');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', async (req,res) => {
    const equipos = await equipoModel.find().lean()

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
    //console.log('reqid: ',reqid)
    //console.log('otro: ',reqid.length)
    //const equipo = await equipoModel.findById(req.params.id)

    res.render('partials/modalEquipoEdit', {reqid})
})




module.exports = router;
