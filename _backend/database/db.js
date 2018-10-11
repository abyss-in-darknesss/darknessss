import Sequelize from 'sequelize';

const db = new Sequelize(
  process.env.DB_DATABASE,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    'host': process.env.DB_HOST,
    'port': process.env.DB_PORT,
    'dialect': process.env.DB_NAME,
  }
);

export default db;