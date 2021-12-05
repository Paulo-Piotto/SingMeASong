import * as voteRepository from '../repositories/voteRepository.js';

async function upVoteService({ id }) {
  try {
    const score = await voteRepository.getScore({ id });
    if (score.status) {
      return score.status;
    }
    const newScore = score.value + 1;
    await voteRepository.addVote({ id, newScore });
    return 200;
  } catch (error) {
    return 500;
  }
}

async function downVoteService({ id }) {
  try {
    const score = await voteRepository.getScore({ id });
    if (score.status) {
      return score.status;
    }

    if (score.value <= -5) {
      await voteRepository.deleteMusic({ id });
      return 200;
    }
    const newScore = score.value - 1;
    await voteRepository.addVote({ id, newScore });
    return 200;
  } catch (error) {
    return 500;
  }
}

export {
  upVoteService,
  downVoteService,
};
