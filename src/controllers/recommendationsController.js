import * as recommendationsService from '../services/recommendationsService.js';

async function topAmount(req, res) {
  const { params } = req;
  const { amount } = params;
  try {
    const result = await recommendationsService.getAmountService({ amount });
    if (result.status) {
      res.sendStatus(result.status);
    }
    res.send(result.value);
  } catch (error) {
    res.sendStatus(500);
  }
}

async function randomMusic(req, res) {
  try {
    const result = await recommendationsService.randomMusicService();
    if (result.status) {
      res.sendStatus(result.status);
    }
    res.send(result.value);
  } catch (error) {
    res.sendStatus(500);
  }
}

export {
  topAmount,
  randomMusic,
};
