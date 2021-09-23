const express = require('express');
const router = express.Router();

router.get('/proveedores', async (req,res) => {
    //const equipos = await equipoModel.find().lean()

    res.render('proveedores')
})


module.exports = router;
