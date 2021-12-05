import * as recommendRepository from '../repositories/recommendRepository.js';

async function validRecommendation({ name, link }) {
  const youtubeLink = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
  const isValid = youtubeLink.test(link);
  if (!isValid) {
    return 400;
  }
  try {
    const result = await recommendRepository.addRecommendation({ name, link });
    return (result);
  } catch (error) {
    return 500;
  }
}

export {
  validRecommendation,
};
