import { recommendationValidation } from '../validations/validations.js';
import * as recommendService from '../services/recommendService.js';

async function recommend(req, res) {
  const { body } = req;
  const { error } = recommendationValidation.validate(body);

  if (error) {
    res.sendStatus(400);
  }
  try {
    const result = await recommendService.validRecommendation(body);
    res.sendStatus(result);
  } catch (err) {
    res.sendStatus(500);
  }
}

export {
  recommend,
};
