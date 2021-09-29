const express = require('express');
const router = express.Router();
const equipoModel = require('../models/equipoModel');
const proveedorModel = require('../models/proveedorModel');
const actividadModel = require('../models/actividadModel');
const { findById } = require('../models/equipoModel');


router.get('/actividades', async (req,res) => {    
    const actividades = await actividadModel.find().lean()
    
    actividades.forEach(element => {
        if(element.fecha){
            element.fecha = element.fecha.toISOString().substring(0,10);
        }                
    }); 

    res.render('actividades', {actividades})
})

router.get('/actividades/new/:id', async (req,res) => {
    
    const reqid = req.params.id       
    
    res.render('newActivity', {reqid})
})


router.post('/actividades/new/:id', async (req,res) => {
    
    const reqid = req.params.id    
    const {descripcion, ticket, ejecutor, tipo,    
    infoAdicional, fecha, horaInicio, horaFin} = req.body

    const newActividad = new actividadModel({        
        descripcion, ticket, ejecutor, tipo,    
        infoAdicional, fecha, horaInicio, horaFin 
    })    
        await newActividad.save()   

        const equipo = await equipoModel.findById(reqid)
        equipo.actividades.push(newActividad)        
        equipo.save();       
    
    res.render('index')
})






module.exports = router;
