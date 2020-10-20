import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import './database/connection';
import path from 'path';
import errorHandler from './errors/handler';
import 'dotenv/config';

const app = express();
const uploadPath = (process.env.UPLOAD_PATH ? process.env.UPLOAD_PATH : 'uploads');

console.log(uploadPath);

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(uploadPath));
app.use(errorHandler);


app.listen(process.env.PORT || 3333)