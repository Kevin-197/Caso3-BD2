import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'path';
import exphbs from "express-handlebars";

import authRoutes from './routes/auth.routes';

const app = express();

// settings
app.set('port', process.env.PORT || 3000);

// view settings
app.set('views', path.join(__dirname, '../../src/views'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    helpers: require('./lib/helpers')
}));
app.set('view engine', 'hbs');

// middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

//routes
app.get('/', (req, res) => {
  return res.send(`The API is at http://localhost:${app.get('port')}`);
})

app.use(express.static(path.join(__dirname + 'public')));
app.use(authRoutes);

export default app;