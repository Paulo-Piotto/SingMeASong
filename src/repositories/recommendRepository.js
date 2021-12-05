import connection from '../database/database.js';

async function addRecommendation({ name, link }) {
  try {
    const result = await connection.query('SELECT * FROM recommendations WHERE link = $1', [link]);
    if (result.rowCount > 0) {
      return 409;
    }
    await connection.query('INSERT INTO recommendations (name,link,score) VALUES ($1,$2,$3)', [name, link, 1]);
  } catch (error) {
    return 500;
  }
  return 200;
}

export {
  addRecommendation,
};
