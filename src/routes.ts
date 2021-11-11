import express from 'express';
import convertRoute from './routes/convert';

const routes = express.Router();

routes.use('/convert', convertRoute);

export default routes;
