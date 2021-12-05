import express from 'express';
import cors from 'cors';
import * as recommendController from './controllers/recommendController.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommendations', recommendController.recommend);

export default app;
