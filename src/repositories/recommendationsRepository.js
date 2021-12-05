import connection from '../database/database.js';

async function getAmount({ amount }) {
  try {
    const result = await connection.query('SELECT * FROM recommendations ORDER BY score DESC LIMIT $1', [amount]);

    if (result.rowCount < 1) {
      return { status: 404, value: undefined };
    }
    return { value: result.rows, status: undefined };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

export {
  getAmount,
};
