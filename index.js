const express = require ('express');
const mongoose = require ('mongoose');
const path = require ('path');
const csurf = require('csurf');
const flash = require('connect-flash');
const exphbs = require ('express-handlebars');
const {dirname} = require ('path');
const {fileURLToPath} = require ('url');


const session = require('express-session');
const MongoStore = require('connect-mongodb-session')(session);

const homeRoutes = require('./routes/home');
const authorsRoutes = require('./routes/authors');
const scheduleRoutes = require('./routes/schedule');
const signRoutes = require('./routes/sign');
const accountRoutes = require('./routes/account');
const authRoutes = require('./routes/auth');

const varMiddleware = require('./middleware/variables');

const MONGODB_URI = 'mongodb+srv://admin:oGjp24HfB8Do0Pry@cluster109.ciqquwb.mongodb.net/blog?retryWrites=true&w=majority&appName=Cluster109';

mongoose
    .connect(MONGODB_URI)  //Подключение к БД
    .then(() => console.log('DB OK'))
    .catch((err) => console.log('DB ERROR', err));

const app = express();
const hbs = exphbs.create({
    defaultLayout: 'main',
    extname: 'hbs'
});
const store = new MongoStore({
    collection: 'sessions', 
    uri: MONGODB_URI
});

app.engine('hbs', hbs.engine);  //Регаем движок хенделбарса в экспрессе
app.set('view engine', 'hbs');  //Используем движок
app.set('views', 'views');

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);

app.use(express.json()); //express logic для POST

app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(session({
    secret: 'secret text 190',
    resave: false,
    saveUninitialized: false,
    store
}));
app.use(csurf());
app.use(flash());
app.use(varMiddleware);

app.use('/', homeRoutes);
app.use('/authors', authorsRoutes);
app.use('/schedule', scheduleRoutes);
app.use('/sign', signRoutes);
app.use('/account', accountRoutes);
app.use('/auth', authRoutes);


app.listen(4000, (err) => {  //Запуск сервера (port)
    if (err) {
        return console.log(err);
    }
    
    console.log('Server OK');  //Сервер запущен
});