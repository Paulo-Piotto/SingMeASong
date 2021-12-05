import * as recommendationsRepository from '../repositories/recommendationsRepository.js';

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

export {
  getAmountService,
};
