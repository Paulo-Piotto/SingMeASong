import connection from '../database/database.js';

async function getScore({ id }) {
  try {
    const result = await connection.query('SELECT * FROM recommendations WHERE id = $1', [id]);

    if (result.rowCount < 1) {
      return { status: 404, value: undefined };
    }
    return { value: result.rows[0].score, status: undefined };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

async function deleteMusic({ id }) {
  try {
    await connection.query('DELETE FROM recommendations WHERE id = $1', [id]);
    return 200;
  } catch (error) {
    return 500;
  }
}

async function addVote({ id, newScore }) {
  try {
    const result = await connection.query('SELECT * FROM recommendations WHERE id = $1', [id]);
    if (result.rowCount < 1) {
      return 404;
    }
    await connection.query('UPDATE recommendations SET score = $1 WHERE id = $2', [newScore, id]);
    return 200;
  } catch (error) {
    return 500;
  }
}

export {
  getScore,
  deleteMusic,
  addVote,
};
