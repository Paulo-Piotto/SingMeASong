import express from 'express';
import cors from 'cors';
import * as recommendController from './controllers/recommendController.js';
import * as voteController from './controllers/voteController.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommendations', recommendController.recommend);
app.post('/recommendations/:id/upvote', voteController.upVote);
app.post('/recommendations/:id/downvote', voteController.downVote);

export default app;
