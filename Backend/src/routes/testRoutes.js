const express = require('express');
const equipoModel = require('../models/equipoModel');
const actividadModel = require('../models/actividadModel');
const elementoModel = require('../models/elementoModel');
const proveedorModel = require('../models/proveedorModel');
const router = express.Router();
const mongoose = require('mongoose');


router.get('/actividadmanual', async (req,res) => {

    const newActividad = new actividadModel({
        
    descripcion: 'Actividad de prueba 1',
    ticket: 'INC000126544',
    ejecutor: 'Luis Fernando Prieto Jimenez',
    tipo: 'Correctivo',    
    infoAdicional: 'Ninguna informacion',
    fecha: '',
    horaInicio: '',
    horaFin: '', })

    await newActividad.save() 

    res.redirect('/')
});





router.get('/elementomanual', async (req,res) => {

    const newElemento = new elementoModel({
        tipo: 'memoria',   
        descripcion: 'memoria RAM',    
        equipo: '',    
        infoAdicional: 'otra info',       
})

    await newElemento.save() 

    res.redirect('/')
});


router.get('/equipomanual', async (req,res) => {

    const newEquipo = new equipoModel({
        activo: 'on',
        serial: '82021821',
        nombre: 'equipo generado manualmente',
        marca: 'Sonicwall',
        modelo: 'Supermassive 9200',    
        descripcion: 'Descripcion del equipo',
        placa: '000-123243',    
        proveedor: "615248ce41a6d8a8a4d51d91",        
        ipGestion: '172.20.20.20',
        macAddress: '00:34:12:ed:54:ad',
        sistemaOperativo: 'sistema operativo dl equipo',
        rack: '8',
        urack: '10',
        linea: 'Seguridad',
        tipo: 'Appliance',
        infoAdicional: 'Informacion Adicional del equipo',
        actividades: ["6152638d7077742d2889268e","6152641bf72d58063e7e403f"],
        
})

    await newEquipo.save() 

    res.redirect('/')
});



router.get('/manual', async (req,res) => {
    




    var id = mongoose.Types.ObjectId();

    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C0EAE485535C",
                "nombre": "FIREWALL-Sonicwall-PRI",
                "marca": "SonicWall",
                "modelo": "Supermassive 9200",
                "Descripcion": "Firewall Perimetral Primario",
                "proveedor": "Opengroup",
                "ipGestion": "192.168.10.5",
                "sistemaOperativo": "SonicOS Enhanced 6.5.1.3-12n",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C0EAE4913F16",
                "nombre": "FIREWALL-Sonicwall-SEC",
                "marca": "SonicWall",
                "modelo": "Supermassive 9200",
                "Descripcion": "Firewall Perimetral Secundario",
                "proveedor": "Opengroup",
                "ipGestion": "192.168.10.6",
                "sistemaOperativo": "SonicOS Enhanced 6.5.1.3-12n",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FG600C3914800463",
                "nombre": "FIREWALL-FORTIGATE-11",
                "marca": "Fortinet",
                "modelo": "FortiGate 600C",
                "Descripcion": "Firewall de navegacion Fortinet Primario",
                "ipGestion": "172.20.60.11",
                "sistemaOperativo": "v5.4.5,build1138",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FG600C3914800238",
                "nombre": "FIREWALL-FORTIGATE-125",
                "marca": "Fortinet",
                "modelo": "FortiGate 600C",
                "Descripcion": "Firewall de navegacion Fortinet Secundario",
                "ipGestion": "172.20.60.125",
                "sistemaOperativo": "v5.4.5,build1138",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FI400B3916000066",
                "nombre": "DDoS",
                "marca": "Fortinet",
                "modelo": "FortiDDoS 400B",
                "Descripcion": "FortiDDoS",
                "ipGestion": "172.20.60.198",
                "sistemaOperativo": "FI400B v5.3.0,build0204,200201",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FV-3KETE19000037",
                "nombre": "WAF-PRI",
                "marca": "Fortinet",
                "modelo": "Fortiweb 3000E",
                "Descripcion": "WAF Fortiweb Primario",
                "ipGestion": "172.20.60.150",
                "sistemaOperativo": "FortiWeb-3000E 6.22,build0737(GA),191218",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FV-3KE3216000096",
                "nombre": "WAF-SEC",
                "marca": "Fortinet",
                "modelo": "Fortiweb 3000E",
                "Descripcion": "WAF Fortiweb Secundario",
                "ipGestion": "172.20.60.150",
                "sistemaOperativo": "FortiWeb-3000E 6.22,build0737(GA),191218",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "JX380Q2",
                "nombre": "SMGSCANNER-PRI",
                "marca": "Symantec",
                "modelo": "SMG 8380",
                "Descripcion": "Antispam Symantec Primario",
                "proveedor": "Multisoft",
                "ipGestion": "192.168.232.22",
                "sistemaOperativo": "Version brightmail 10.7.3-5",
                "linea": "Seguridad",
                "Tipo": "Appliance",
                "infoAdicional": "Intel(R) Xeon(R) CPU ES-2620 v4 @ 2.10GHz"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "JX35CP2",
                "nombre": "SMGSCANNER-SEC",
                "marca": "Symantec",
                "modelo": "SMG 8380",
                "Descripcion": "Antispam Symantec Secundario",
                "proveedor": "Multisoft",
                "ipGestion": "192.168.232.23",
                "sistemaOperativo": "Version brightmail 10.7.3-5",
                "linea": "Seguridad",
                "Tipo": "Appliance",
                "infoAdicional": "Intel(R) Xeon(R) CPU ES-2620 v4 @ 2.10GHz"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "JX37RP2",
                "nombre": "SMGSCANNER-CTRL",
                "marca": "Symantec",
                "modelo": "SMG 8380",
                "Descripcion": "Antispam Symantec Management",
                "proveedor": "Multisoft",
                "ipGestion": "192.168.232.24",
                "sistemaOperativo": "Version brightmail 10.7.3-5",
                "linea": "Seguridad",
                "Tipo": "Appliance",
                "infoAdicional": "Intel(R) Xeon(R) CPU ES-2620 v4 @ 2.10GHz"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C5E4-72FC-CB0A-48DB-8783-F8B6-D363-515F",
                "nombre": "TRIGEO-LEM",
                "marca": "Solarwinds",
                "modelo": "LEM50",
                "Descripcion": "Correlacionador de eventos LEM - Solarwinds",
                "proveedor": "e-dea networks",
                "ipGestion": "172.20.60.155",
                "sistemaOperativo": "Linux swi-lem 3.2.0-3-amd64",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "J0A0418043",
                "nombre": "MWG-PRI",
                "marca": "McAfee",
                "modelo": "WBG5000C",
                "Descripcion": "Proxy McAfee Web Gateway Primario",
                "proveedor": "Multisoft",
                "ipGestion": "172.20.60.104",
                "sistemaOperativo": "Linux mwg-pri 3.18.134-1.mlos2.mwg.x86_64",
                "linea": "Seguridad",
                "Tipo": "Appliance",
                "infoAdicional": "96 GB - Intel Xeon E5/Core i7"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "001E678A16E8",
                "nombre": "MWG-SEC",
                "marca": "McAfee",
                "modelo": "WBG5000C",
                "Descripcion": "Proxy McAfee Web Gateway Secundario",
                "proveedor": "Multisoft",
                "ipGestion": "172.20.60.105",
                "sistemaOperativo": "Linux mwg-pri 3.18.134-1.mlos2.mwg.x86_64",
                "linea": "Seguridad",
                "Tipo": "Appliance",
                "infoAdicional": "96 GB - Intel Xeon E5/Core i7"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN001",
                "nombre": "CMS-VPN-WWW",
                "marca": "Sonicwall",
                "modelo": "SonicWall Secure Mobile Access CMS",
                "Descripcion": "CMS Manager VPN www3",
                "proveedor": "Opengroup",
                "ipGestion": "172.20.60.250",
                "sistemaOperativo": "Version:  12.3.0-02939",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C0EAE4F93490",
                "nombre": "VPN-WWW-PRI",
                "marca": "Sonicwall",
                "modelo": "SonicWall Secure Mobile Access 7200",
                "Descripcion": "Appliance VPN www3 Primario",
                "proveedor": "Opengroup",
                "ipGestion": "172.20.61.41",
                "sistemaOperativo": "Version:  12.3.0-02939",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C0EAE4FDF2F8",
                "nombre": "VPN-WWW-SEC",
                "marca": "Sonicwall",
                "modelo": "SonicWall Secure Mobile Access 7200",
                "Descripcion": "Appliance VPN www3 Secundario",
                "proveedor": "Opengroup",
                "ipGestion": "172.20.61.42",
                "sistemaOperativo": "Version:  12.3.0-02939",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN002",
                "nombre": "CMS-VPN-PMT",
                "marca": "Sonicwall",
                "modelo": "SonicWall Secure Mobile Access CMS",
                "Descripcion": "CMS Manager VPN PMT",
                "proveedor": "Opengroup",
                "ipGestion": "172.20.60.149",
                "sistemaOperativo": "Version:  12.3.0-02939",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C0EAE4F93450",
                "nombre": "VPN-PMT-PRI",
                "marca": "Sonicwall",
                "modelo": "SonicWall Secure Mobile Access 7200",
                "Descripcion": "Appliance VPN PMT Primario",
                "proveedor": "Opengroup",
                "ipGestion": "192.168.1.179",
                "sistemaOperativo": "Version:  12.3.0-02939",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "C0EAE4F93478",
                "nombre": "VPN-PMT-SEC",
                "marca": "Sonicwall",
                "modelo": "SonicWall Secure Mobile Access 7200",
                "Descripcion": "Appliance VPN PMT Secundario",
                "proveedor": "Opengroup",
                "ipGestion": "192.168.1.180",
                "sistemaOperativo": "Version:  12.3.0-02939",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "0017C53C788C",
                "nombre": "VPN-PMT-OLD",
                "marca": "Sonicwall",
                "modelo": "SonicWall SRA EX7000",
                "Descripcion": "Appliance VPN PMT antiguo",
                "proveedor": "Opengroup",
                "ipGestion": "192.168.1.150",
                "sistemaOperativo": "Version:  11.4.0-468",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "7139-3100-7906-4725-7040-8519-23",
                "nombre": "ConsolaEPO",
                "marca": "McAfee",
                "modelo": "Windows Server 2016 Standard",
                "Descripcion": "Consola EPO Antivirus",
                "proveedor": "Multisoft",
                "ipGestion": "172.20.60.109",
                "sistemaOperativo": "Windows Server 2016 Standard",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "5010-6171-4882-0679-0668-5037-64",
                "nombre": "RNEC-CSRAPP-00",
                "marca": "McAfee",
                "modelo": "Windows Server 2016 Standard",
                "Descripcion": "Content Security Reporter McAfee",
                "proveedor": "Multisoft",
                "ipGestion": "172.20.60.242",
                "sistemaOperativo": "Windows Server 2016 Standard",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "USE332BA19",
                "nombre": "RNEC-ANALYZER",
                "marca": "SonicWall",
                "modelo": "Windows Server 2012 R2 Standard",
                "Descripcion": "Reporteador del firewall Sonicwall",
                "proveedor": "Opengroup",
                "ipGestion": "172.20.60.91",
                "sistemaOperativo": "Windows Server 2012 R2 Standard",
                "linea": "Seguridad",
                "Tipo": "Servidor Fisico"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "7482-7950-2165-8400-1319-9616-07",
                "nombre": "Nessus-Tenable",
                "marca": "Tenable",
                "modelo": "CentOS 7",
                "Descripcion": "Analizador de vulnerabilidades",
                "ipGestion": "172.20.61.43",
                "sistemaOperativo": "Linux 3.10.0-1062.4.3.el7.x86_64 CentOS 7.0",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "000BABE845EA",
                "nombre": "FireEye-4500",
                "marca": "FireEye",
                "modelo": "NX-4500",
                "Descripcion": "Antimalware moderno APT",
                "ipGestion": "172.20.60.108",
                "sistemaOperativo": " (NX) 8.2.3.859361 2019-06-08 13:32:18",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN003",
                "nombre": "Imperva Gateway",
                "marca": "Imperva",
                "Descripcion": "Firewall de Base de datos Gateway",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN004",
                "nombre": "Imperva Management",
                "marca": "Imperva",
                "Descripcion": "Firewall de Base de datos Management",
                "linea": "Seguridad",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN005",
                "nombre": "Trendmicro",
                "marca": "TrendMicro",
                "Descripcion": "Parcheo Virtual",
                "linea": "Seguridad",
                "Tipo": "Servidor Virtual"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "F5-BXYC-IJMH",
                "nombre": "BigIP-F5-PRI",
                "marca": "F5",
                "modelo": "BigIP C115",
                "Descripcion": "Balanceador de carga F5 Primario",
                "proveedor": "NeoNet",
                "ipGestion": "172.20.34.245",
                "sistemaOperativo": "BIG-IP 13.1.3.2 Build 0.0.4 Point Release 2",
                "linea": "LAN",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "F5-HXVH-IIFN",
                "nombre": "BigIP-F5-SEC",
                "marca": "F5",
                "modelo": "BigIP C115",
                "Descripcion": "Balanceador de carga F5 Secundario",
                "proveedor": "NeoNet",
                "ipGestion": "172.20.34.246",
                "sistemaOperativo": "BIG-IP 13.1.3.2 Build 0.0.4 Point Release 2",
                "linea": "LAN",
                "Tipo": "Appliance"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20CN",
                "nombre": "SW-CCSA-4",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde sotano CCSA",
                "ipGestion": "172.20.100.4",
                "macAddress": "4001-C69C-4AEB",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20WF",
                "nombre": "SW-CCSA-5",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde sotano CCSA",
                "ipGestion": "172.20.100.5",
                "macAddress": "B8AF-671F-1AEE",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20TG",
                "nombre": "SW-CCSA-6",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde sotano CCSA",
                "ipGestion": "172.20.100.6",
                "macAddress": "B8AF-671F-12D4",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20TZ",
                "nombre": "SW-CCSA-7",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde sotano CCSA",
                "ipGestion": "172.20.100.7",
                "macAddress": "B8AF-671F-14F4",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN70K3LDN1",
                "nombre": "SW-CCSA-9",
                "marca": "Hewlett-Packard",
                "modelo": "1920S 24G JL381A",
                "Descripcion": "Switch de borde sotano CCSA",
                "ipGestion": "172.20.100.9",
                "macAddress": "D067-2648-D0D8",
                "sistemaOperativo": "Linux 3.6.5, U-Boot 2012.10-00118 (Oct 11 2016 - 15:39:54)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23V5",
                "nombre": "SW-CCSB-2",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde sotano CCSB",
                "ipGestion": "172.20.100.2",
                "macAddress": "B8AF-6754-5C8B",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX21YJ",
                "nombre": "SW-CCSB-3",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde sotano CCSB",
                "ipGestion": "172.20.100.3",
                "macAddress": "B8AF-6752-1005",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "PVT22D3000034",
                "nombre": "SW-CCSB-8",
                "marca": "D-Link",
                "modelo": "DGS-3120-24TC",
                "Descripcion": "Switch de borde sotano CCSB",
                "ipGestion": "172.20.100.8",
                "macAddress": "ACF1-DFB7-B0E0",
                "sistemaOperativo": "Build 2.50.015",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "R30J1BA000044",
                "nombre": "SW-CCSB-90",
                "marca": "D-Link",
                "modelo": "DGS-3120-48TC",
                "Descripcion": "Switch de borde sotano CCSB",
                "ipGestion": "172.20.100.90",
                "macAddress": "84C9-B2A0-6B80",
                "sistemaOperativo": "Build 1.02.013",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20RL",
                "nombre": "SW-CC1A-17",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1A",
                "ipGestion": "172.20.100.17",
                "macAddress": "B8AF-671F-0B20",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20RG",
                "nombre": "SW-CC1A-18",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1A",
                "ipGestion": "172.20.100.18",
                "macAddress": "B8AF-671F-0A98",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20CX",
                "nombre": "SW-CC1A-19",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1A",
                "ipGestion": "172.20.100.19",
                "macAddress": "B8AF-671E-DB0C",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20R5",
                "nombre": "SW-CC1A-20",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1A",
                "ipGestion": "172.20.100.20",
                "macAddress": "B8AF-671F-0966",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20Y7",
                "nombre": "SW-CC1A-21",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1A",
                "ipGestion": "172.20.100.21",
                "macAddress": "B8AF-671F-225E",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN70K3LDDB",
                "nombre": "SW-CC1A-24",
                "marca": "Hewlett-Packard",
                "modelo": "V1920S-24G JL381A",
                "Descripcion": "Switch de borde piso 1 CC1A",
                "ipGestion": "172.20.100.24",
                "macAddress": "D067-2648-E0F4",
                "sistemaOperativo": "Linux 3.6.5, U-Boot 2012.10-00118 (Oct 11 2016 - 15:39:54)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN70K3LF2P",
                "nombre": "SW-CC1B-25",
                "marca": "Hewlett-Packard",
                "modelo": "V1920S-24G JL381A",
                "Descripcion": "Switch de borde piso 1 CC1B",
                "ipGestion": "172.20.100.25",
                "macAddress": "D067-2648-21F0",
                "sistemaOperativo": "Linux 3.6.5, U-Boot 2012.10-00118 (Oct 11 2016 - 15:39:54)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX210K",
                "nombre": "SW-CC1C-12",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.12",
                "macAddress": "B8AF-671F-2BEE",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX25BM",
                "nombre": "SW-CC1C-13",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.13",
                "macAddress": "B8AF-673E-246C",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20ZJ",
                "nombre": "SW-CC1C-14",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.14",
                "macAddress": "B8AF-671F-27AE",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN38F5Z0Y4",
                "nombre": "SW-CC1C-87-1",
                "marca": "Hewlett-Packard",
                "modelo": "A5120-48G-PoE+ EI JG237A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.87_Slot 1",
                "macAddress": "CC3E-5F70-933B",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN38F5Z0BF",
                "nombre": "SW-CC1C-87-2",
                "marca": "Hewlett-Packard",
                "modelo": "A5120-48G-PoE+ EI JG237A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.87_Slot 2",
                "macAddress": "CC3E-5F6E-9409",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN35F5Z1MP",
                "nombre": "SW-CC1C-87-3",
                "marca": "Hewlett-Packard",
                "modelo": "A5120-48G-PoE+ EI JG237A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.87_Slot 3",
                "macAddress": "CC3E-5F12-5D40",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN26BX51BS",
                "nombre": "SW-CC1C-200",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.200",
                "macAddress": "B8AF-67CC-6548",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN35F5Z25W",
                "nombre": "SW-CC1C-11",
                "marca": "Hewlett-Packard",
                "modelo": "A5120-48G-PoE+ EI JG237A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.11",
                "macAddress": "CC3E-5F12-5D40",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN47F5Z2BX",
                "nombre": "SW-CC1C-16",
                "marca": "Hewlett-Packard",
                "modelo": "A5120-48G-PoE+ EI JG237A",
                "Descripcion": "Switch de borde piso 1 CC1C",
                "ipGestion": "172.20.100.16",
                "macAddress": "CC3E-5F12-5D40",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23LP",
                "nombre": "SW-CC1D-15",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1D",
                "ipGestion": "172.20.100.15",
                "macAddress": "B8AF-6754-1461",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN29BX26K6",
                "nombre": "SW-CC1D-22",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 1 CC1D",
                "ipGestion": "172.20.100.22",
                "macAddress": "D07E-281E-ED21",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN70K3LF2F",
                "nombre": "SW-Video-27",
                "marca": "Hewlett-Packard",
                "modelo": "1920S-24G JL381A",
                "Descripcion": "Switch Sala Videoconferencia",
                "ipGestion": "172.20.100.27",
                "macAddress": "D067-2648-D010",
                "sistemaOperativo": "Linux 3.6.5, U-Boot 2012.10-00118 (Oct 11 2016 - 15:39:54)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20YW",
                "nombre": "SW-CC2A-40",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.40",
                "macAddress": "B8AF-671F-2506",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20VT",
                "nombre": "SW-CC2A-41",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.41",
                "macAddress": "B8AF-671F-1868",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20ZH",
                "nombre": "SW-CC2A-42",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.42",
                "macAddress": "B8AF-671F-278C",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20V5",
                "nombre": "SW-CC2A-43",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.43",
                "macAddress": "B8AF-671F-15C0",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX269V",
                "nombre": "SW-CC2A-44",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.44",
                "macAddress": "B8AF-6788-652C",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN29BX24Q8",
                "nombre": "SW-CC2A-46",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.46",
                "macAddress": "D07E-281E-59B5",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1516P03",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "PVT62D3000073",
                "nombre": "SW-CC2A-97",
                "marca": "D-Link",
                "modelo": "DGS-3120-24TC",
                "Descripcion": "Switch de borde piso 2 CC2A",
                "ipGestion": "172.20.100.97",
                "macAddress": "7854-2E3A-9E80",
                "sistemaOperativo": "Build 3.00.022",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX2550",
                "nombre": "SW-CC2B-36",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2B",
                "ipGestion": "172.20.100.36",
                "macAddress": "B8AF-6722-63A8",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX202Q37",
                "nombre": "SW-CC2B-37",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2B",
                "ipGestion": "172.20.100.37",
                "macAddress": "B8AF-67CC-D0E5",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN29BX50D5",
                "nombre": "SW-CC2B-38",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 2 CC2B",
                "ipGestion": "172.20.100.38",
                "macAddress": "D07E-2818-9042",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX510Y",
                "nombre": "SW-CC2B-39",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 2 CC2B",
                "ipGestion": "172.20.100.39",
                "macAddress": "B8AF-6740-1EC2",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN65GP798D",
                "nombre": "SW-CC2B-23",
                "marca": "Hewlett-Packard",
                "modelo": "V1920-48G ",
                "Descripcion": "Switch de borde piso 2 CC2B",
                "ipGestion": "172.20.100.23",
                "macAddress": "D894-032E-0B00",
                "sistemaOperativo": "3Com O.S. Version 5.20.99, Release 1114",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN70K3LDK8",
                "nombre": "SW-CC2B-48",
                "marca": "Hewlett-Packard",
                "modelo": "V1920S-24G JL381A",
                "Descripcion": "Switch de borde piso 2 CC2B",
                "ipGestion": "172.20.100.48",
                "macAddress": "D067-2648-E0C4",
                "sistemaOperativo": "Linux 3.6.5, U-Boot 2012.10-00118 (Oct 11 2016 - 15:39:54)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23KB",
                "nombre": "SW-CC2C-31",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2C",
                "ipGestion": "172.20.100.31",
                "macAddress": "B8AF-6754-0ECD",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20V4",
                "nombre": "SW-CC2C-32",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2C",
                "ipGestion": "172.20.100.32",
                "macAddress": "B8AF-671F-159E",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX511H",
                "nombre": "SW-CC2C-34",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 2 CC2C",
                "ipGestion": "172.20.100.34",
                "macAddress": "B8AF-6740-229C",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN29BX26KF",
                "nombre": "SW-CC2C-45",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 2 CC2C",
                "ipGestion": "172.20.100.45",
                "macAddress": "D07E-281E-EE0F",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN26BX50ZN",
                "nombre": "SW-CC2C-47",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 2 CC2C",
                "ipGestion": "172.20.100.47",
                "macAddress": "B8AF-67C9-8D93",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN54GP70F3",
                "nombre": "SW-CC2C-29",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 2 CC2C",
                "ipGestion": "172.20.100.29",
                "macAddress": "BCEA-FAE8-5EF3",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN26BX5181",
                "nombre": "SW-CC2D-35-SIN",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 2 CC2D-SNI ",
                "ipGestion": "172.20.100.35",
                "macAddress": "B8AF-67CC-51E3",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "R30J2C1000031",
                "nombre": "SW-CC2E-93",
                "marca": "D-Link",
                "modelo": "DGS-3120-48TC",
                "Descripcion": "Switch de borde piso 2 CC2E",
                "ipGestion": "172.20.100.93",
                "macAddress": "2810-7B57-9AF0",
                "sistemaOperativo": "Build 2.00.010",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20ZY",
                "nombre": "SW-CC3A-54",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3A",
                "ipGestion": "172.20.100.54",
                "macAddress": "B8AF-671F-2968",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX2033",
                "nombre": "SW-CC3A-55",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3A",
                "ipGestion": "172.20.100.55",
                "macAddress": "B8AF-671E-B6CA",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20R9",
                "nombre": "SW-CC3A-56",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3A",
                "ipGestion": "172.20.100.56",
                "macAddress": "B8AF-671F-09EE",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX203G",
                "nombre": "SW-CC3A-57",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3A",
                "ipGestion": "172.20.100.57",
                "macAddress": "B8AF-671E-B840",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX269R",
                "nombre": "SW-CC3A-58",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3A",
                "ipGestion": "172.20.100.58",
                "macAddress": "B8AF-6788-64C6",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX202Q50",
                "nombre": "SW-CC3B-50",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3B",
                "ipGestion": "172.20.100.50",
                "macAddress": "B8AF-671E-B532",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20W9",
                "nombre": "SW-CC3B-51",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3B",
                "ipGestion": "172.20.100.51",
                "macAddress": "B8AF-671F-1A66",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20TY",
                "nombre": "SW-CC3B-52",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3B",
                "ipGestion": "172.20.100.52",
                "macAddress": "B8AF-671F-14D2",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20SC",
                "nombre": "SW-CC3B-53",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 3 CC3B",
                "ipGestion": "172.20.100.53",
                "macAddress": "B8AF-671F-0E50",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN70K3LDYP",
                "nombre": "SW-CC3B-26",
                "marca": "Hewlett-Packard",
                "modelo": "V1920S-24G JL381A",
                "Descripcion": "Switch de borde piso 3 CC3B",
                "ipGestion": "172.20.100.26",
                "macAddress": "D067-2648-D040",
                "sistemaOperativo": "Linux 3.6.5, U-Boot 2012.10-00118 (Oct 11 2016 - 15:39:54)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX2025",
                "nombre": "SW-CC4A-66",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4A",
                "ipGestion": "172.20.100.66",
                "macAddress": "B8AF-671E-B2F0",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX201Y",
                "nombre": "SW-CC4A-67",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4A",
                "ipGestion": "172.20.100.67",
                "macAddress": "B8AF-671E-B202",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20XY",
                "nombre": "SW-CC4A-68",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4A",
                "ipGestion": "172.20.100.68",
                "macAddress": "B8AF-671F-212C",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20RM",
                "nombre": "SW-CC4B-61",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4B",
                "ipGestion": "172.20.100.61",
                "macAddress": "B8AF-671F-0B42",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX2111",
                "nombre": "SW-CC4B-62",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4B",
                "ipGestion": "172.20.100.62",
                "macAddress": "B8AF-671F-2DEC",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20TT",
                "nombre": "SW-CC4B-63",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4B",
                "ipGestion": "172.20.100.63",
                "macAddress": "B8AF-671F-144A",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20TH",
                "nombre": "SW-CC4B-64",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4B",
                "ipGestion": "172.20.100.64",
                "macAddress": "B8AF-671F-12F6",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN29BX24Z0",
                "nombre": "SW-CC4B-84",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 4 CC4B",
                "ipGestion": "172.20.100.84",
                "macAddress": "D07E-281D-A719",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23F0",
                "nombre": "SW-CC5A-72",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.72",
                "macAddress": "B8AF-6753-FCDF",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23V4",
                "nombre": "SW-CC5A-73",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.73",
                "macAddress": "B8AF-6754-5C69",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23VX",
                "nombre": "SW-CC5A-74",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.74",
                "macAddress": "B8AF-6754-5F99",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX222C",
                "nombre": "SW-CC5A-75",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.75",
                "macAddress": "B8AF-6752-1FB1",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX5102",
                "nombre": "SW-CC5A-76",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.76",
                "macAddress": "B8AF-6740-18A4",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23FH",
                "nombre": "SW-CC5A-77",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.77",
                "macAddress": "B8AF-6753-FEDD",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN23BX23LD",
                "nombre": "SW-CC5A-78",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.78",
                "macAddress": "B8AF-6754-132F",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN53GP71CJ",
                "nombre": "SW-CC5A-79",
                "marca": "Hewlett-Packard",
                "modelo": "HPE1920-48G",
                "Descripcion": "Switch de borde piso 5 CC5A",
                "ipGestion": "172.20.100.79",
                "macAddress": "BCEA-FAE4-A009",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX20TF",
                "nombre": "SW-CC6A-81",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 6 CC6A",
                "ipGestion": "172.20.100.81",
                "macAddress": "B8AF-671F-12B2",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN1BBX500C",
                "nombre": "SW-CC6A-83",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-48G JE009A",
                "Descripcion": "Switch de borde piso 6 CC6A",
                "ipGestion": "172.20.100.83",
                "macAddress": "B8AF-673F-40F4",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "CN25BX20SF",
                "nombre": "SW-CC6A-88",
                "marca": "Hewlett-Packard",
                "modelo": "V1910-24G JE006A",
                "Descripcion": "Switch de borde piso 6 CC6A",
                "ipGestion": "172.20.100.88",
                "macAddress": "B8AF-6797-EF8D",
                "sistemaOperativo": "3Com O.S. Version 5.20 Release 1108P01",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SMG1349N06U",
                "nombre": "SW-CORE-PRI",
                "marca": "Cisco",
                "modelo": "WS-C6509-E",
                "Descripcion": "Switch CORE LAN Primario",
                "ipGestion": "172.20.60.1",
                "sistemaOperativo": "Cisco IOS Software, s72033_rp Software (s72033_rp-ADVIPSERVICESK9-M), Version 15.1(2)SY4a, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SMG1906N00Q",
                "nombre": "SW-CORE-SEC",
                "marca": "Cisco",
                "modelo": "WS-C6509-E",
                "Descripcion": "Switch CORE LAN Secundario",
                "ipGestion": "172.20.60.1",
                "sistemaOperativo": "Cisco IOS Software, s72033_rp Software (s72033_rp-ADVIPSERVICESK9-M), Version 15.1(2)SY4a, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FDO22040FQE",
                "nombre": "SW-DMZ-PRI",
                "marca": "Cisco",
                "modelo": "cisco WS-C3650-48TS",
                "Descripcion": "Switch DMZ LAN Primario",
                "ipGestion": "192.168.232.2",
                "sistemaOperativo": "Cisco IOS Software (CAT3K_CAA-UNIVERSALK9-M), Version 16.3.5b, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FDO22040ANW",
                "nombre": "SW-DMZ-SEC",
                "marca": "Cisco",
                "modelo": "cisco WS-C3650-48TS",
                "Descripcion": "Switch DMZ LAN Secundario",
                "ipGestion": "192.168.232.7",
                "sistemaOperativo": "Cisco IOS Software (CAT3K_CAA-UNIVERSALK9-M), Version 16.3.5b, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FDO22040BJU",
                "nombre": "SW-SERVIDORES-PRI",
                "marca": "Cisco",
                "modelo": "cisco WS-C3650-48TS",
                "Descripcion": "Switch Servidores Primario",
                "ipGestion": "172.20.60.2",
                "sistemaOperativo": "Cisco IOS Software (CAT3K_CAA-UNIVERSALK9-M), Version 16.3.5b, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FDO22040BG2",
                "nombre": "SW-SERVIDORES-SEC",
                "marca": "Cisco",
                "modelo": "cisco WS-C3650-48TS",
                "Descripcion": "Switch Servidores Secudario",
                "ipGestion": "172.20.61.2",
                "sistemaOperativo": "Cisco IOS Software (CAT3K_CAA-UNIVERSALK9-M), Version 16.3.5b, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FDO22040BH8",
                "nombre": "SW-PAIS",
                "marca": "Cisco",
                "modelo": "WS-C3650-48TS",
                "Descripcion": "Switch Pais",
                "ipGestion": "172.168.192.2",
                "sistemaOperativo": "Cisco IOS Software [Denali], Catalyst L3 Switch Software (CAT3K_CAA-UNIVERSALK9-M), Version 16.3.5b, RELEASE SOFTWARE (fc1)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FOC22010Z68",
                "nombre": "SW-WLAN",
                "marca": "Cisco",
                "modelo": " WS-C2960X-48TS-LL",
                "Descripcion": "Switch Wireless LAN",
                "ipGestion": "172.20.60.116",
                "sistemaOperativo": "Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FOC22010Z34",
                "nombre": "SW-LAN",
                "marca": "Cisco",
                "modelo": "WS-C2960X-48TS-LL",
                "Descripcion": "Switch LAN",
                "ipGestion": "192.168.1.230",
                "sistemaOperativo": "Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "FOC2201T37C",
                "nombre": "SW-IMPERVA",
                "marca": "Cisco",
                "modelo": "WS-C2960X-48TS-LL",
                "Descripcion": "Switch Bases de datos Imperva",
                "ipGestion": "172.20.60.3",
                "sistemaOperativo": "Cisco IOS Software, C2960X Software (C2960X-UNIVERSALK9-M), Version 15.2(2)E7, RELEASE SOFTWARE (fc3)",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN006",
                "nombre": "SW-BAY1",
                "marca": "Cisco",
                "Descripcion": "Switch Blade IBM PRI old",
                "ipGestion": "172.20.100.101",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN007",
                "nombre": "SW-BAY2",
                "marca": "Cisco",
                "Descripcion": "Switch Blade IBM SEC old",
                "ipGestion": "172.20.100.102",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN008",
                "nombre": "6125G/XG Blade Switch",
                "marca": "Hewlett-Packard",
                "Descripcion": "SW Blade HP new 24 C7000-2",
                "ipGestion": "192.168.200.24",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN009",
                "nombre": "6125G/XG Blade Switch",
                "marca": "Hewlett-Packard",
                "Descripcion": "SW Blade HP new 25 C7000-2",
                "ipGestion": "192.168.200.25",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN010",
                "nombre": "SW_6120XG_bay1",
                "marca": "Hewlett-Packard",
                "Descripcion": "SW Blade1 HP new 20",
                "ipGestion": "192.168.200.20",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN011",
                "nombre": "SW_6120XG_bay2",
                "marca": "Hewlett-Packard",
                "Descripcion": "SW Blade2 HP new 27",
                "ipGestion": "192.168.200.27",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN012",
                "nombre": "SW-bay1-47",
                "marca": "Hewlett-Packard",
                "Descripcion": "SW Blade1 HP old 47",
                "ipGestion": "192.168.200.47",
                "macAddress": "00:25:03:c9:1c:00",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN013",
                "nombre": "SW-bay2-48",
                "marca": "Hewlett-Packard",
                "Descripcion": "SW Blade2 HP old 48",
                "ipGestion": "192.168.200.48",
                "macAddress": "00:25:03:bd:c7:00",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    
    var id = mongoose.Types.ObjectId();
    
    var newEquipo = new equipoModel(
            {
                _id:id,
    "activo": "on",
                "serial": "SN014",
                "nombre": "RNEC-SCR-03-ACT",
                "marca": "Cisco",
                "Descripcion": "Switch ANI",
                "ipGestion": "172.20.60.10",
                "linea": "LAN",
                "Tipo": "Switch"
            });
    await newEquipo.save()
    
    

    res.render('index')
})







module.exports = router;