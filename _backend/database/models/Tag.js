import Sequelize from 'sequelize';
import db from '../db';

const Tag = db.define('tag', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  underscored: true,
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

export default Tag;