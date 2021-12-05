import express from 'express';
import cors from 'cors';
import * as recommendController from './controllers/recommendController.js';
import * as voteController from './controllers/voteController.js';
import * as remmendationsController from './controllers/recommendationsController.js';

const app = express();

app.use(cors());
app.use(express.json());

app.post('/recommendations', recommendController.recommend);
app.post('/recommendations/:id/upvote', voteController.upVote);
app.post('/recommendations/:id/downvote', voteController.downVote);
app.get('/recommendations/top/:amount', remmendationsController.topAmount);

export default app;
