import express from 'express';
import cors from 'cors';
import connection from './database/database.js';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', async (req, res) => {
  const result = await connection.query('SELECT * FROM recommendations');
  res.send(result.rowCount).status(200);
});

export default app;
