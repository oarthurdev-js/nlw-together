// @types/express
import express from 'express';
import "reflect-metadata";
import { router } from '../routes';

import "./database";


const app = express();

app.use(express.json());
app.use(router)

//http://localhost:3000/
app.listen(3000, () => console.log('Server is running'))