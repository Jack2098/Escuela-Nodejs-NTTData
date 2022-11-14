import 'dotenv/config';
import express, { json, Request, Response } from 'express';
import cors from 'cors';
import hbs from 'hbs';
import { router } from './routers';

const app = express();
const PORT = process.env.PORT || 3000;

// hbs.registerPartials(`${__dirname}/template`, function (err: any) {console.log(err)});
// hbs.registerHelper('if', function (conditional, options) {
//     return conditional.fn('');
// })
// app.set('view engine', 'hbs');
// app.set('views', `${__dirname}/template`);

app.use(express.static(`${__dirname}/public`));

app.use(express.json());

app.use(cors());

app.use('/', router);

app.listen(PORT, () => {console.log(`Escuchando en puerto ${PORT}, localhost:${PORT}`);});
