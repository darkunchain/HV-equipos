
const express =require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const methodOverride = require('method-override')
const session = require('express-session');

//Inicializacion
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 8282);
app.set('views', path.join(__dirname,'views'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir:path.join(app.get('views'), 'partials'),
    extname: '.hbs',
}));
app.set('view engine','.hbs');


app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(session({
    secret: 'Un_password_privado_de_encripci0n',
    resave: true,
    saveUninitialized: true
}))

app.use(require('./routes/equiposRoutes'));
app.use(require('./routes/actividadesRoutes'));
app.use(require('./routes/testRoutes'));
app.use(require('./routes/proveedoresRoutes'));

app.use(express.static(path.join(__dirname, '/public')));



app.listen(app.get('port'), () => {
    console.log('server on port: ', app.get('port'))
})
