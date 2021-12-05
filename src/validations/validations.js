import joi from 'joi';

const recommendationValidation = joi.object({
  name: joi.string().min(3).required(),
  link: joi.string().required(),
});

const voteValidation = joi.object({
  email: joi.string().email().required(),
  password: joi.string().alphanum().min(5).required(),
});

export {
  recommendationValidation,
  voteValidation,
};
