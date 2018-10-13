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
});

export default Tag;