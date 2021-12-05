import * as voteService from '../services/voteService.js';

async function upVote(req, res) {
  const { params } = req;
  const { id } = params;
  try {
    const result = await voteService.upVoteService({ id });
    res.sendStatus(result);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function downVote(req, res) {
  const { params } = req;
  const { id } = params;
  try {
    const result = await voteService.downVoteService({ id });
    res.sendStatus(result);
  } catch (error) {
    res.sendStatus(500);
  }
}

export {
  upVote,
  downVote,
};
