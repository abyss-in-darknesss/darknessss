import Sequelize from 'sequelize';
import db from '../db';

const UserProfile = db.define('user_profile', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  username: {
    type: Sequelize.STRING,
  },
  user_img: {
    type: Sequelize.STRING,
  },
  introduction: {
    type: Sequelize.TEXT,
  }
}, {
  timestamps: false,
});

export default UserProfile;