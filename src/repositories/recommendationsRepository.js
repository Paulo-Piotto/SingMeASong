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

async function getAll() {
  try {
    const result = await connection.query('SELECT * FROM recommendations');

    if (result.rowCount < 1) {
      return { status: 404, value: undefined };
    }
    return { value: result.rows, status: undefined };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

async function randomRange(type) {
  let result;
  try {
    if (type === 'lower') {
      result = await connection.query('SELECT * FROM recommendations WHERE score >= $1 AND score <= $2', [-5, 10]);
    } else {
      result = await connection.query('SELECT * FROM recommendations WHERE score > $1', [10]);
    }

    if (result.rowCount < 1) {
      return { status: 404, value: undefined };
    }
    return { value: result.rows, status: undefined };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

async function checkRanges() {
  let result = {
    lower: false,
    higher: false,
  };
  try {
    const lower = await connection.query('SELECT * FROM recommendations WHERE score >= $1 AND score <= $2', [-5, 10]);
    if (lower.rowCount > 0) {
      result = { ...result, lower: true };
    }
    const higher = await connection.query('SELECT * FROM recommendations WHERE score >= $1', [11]);
    if (higher.rowCount > 0) {
      result = { ...result, higher: true };
    }
    return { status: undefined, value: result };
  } catch (error) {
    return { status: 500, value: undefined };
  }
}

export {
  getAmount,
  getAll,
  randomRange,
  checkRanges,
};
