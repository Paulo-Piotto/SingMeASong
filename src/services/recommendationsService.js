import * as recommendationsRepository from '../repositories/recommendationsRepository.js';

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function getAmountService({ amount }) {
  try {
    const result = await recommendationsRepository.getAmount({ amount });
    if (result.status) {
      return { status: result.status, value: undefined };
    }
    return { status: undefined, value: result.value };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

async function randomMusicService() {
  try {
    const ranges = await recommendationsRepository.checkRanges();
    if (ranges.status) {
      return { value: undefined, status: ranges.status };
    }
    if (!ranges.value.lower || !ranges.value.higher) {
      const amount = await recommendationsRepository.getAll();
      const index = getRandomInt(0, amount.value.length - 1);
      return { value: amount.value[index], status: undefined };
    }
    const type = getRandomInt(1, 10);
    if (type > 3) {
      const amount = await recommendationsRepository.randomRange('higher');
      const index = getRandomInt(0, amount.value.length - 1);
      return { value: amount.value[index], status: undefined };
    }
    if (type <= 3) {
      const amount = await recommendationsRepository.randomRange('lower');
      const index = getRandomInt(0, amount.value.length - 1);
      return { value: amount.value[index], status: undefined };
    }
    return { status: 501, value: undefined };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

export {
  getAmountService,
  randomMusicService,
};
