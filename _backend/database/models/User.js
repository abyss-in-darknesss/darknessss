import Sequelize from 'sequelize';
import db from '../db';
import UserProfile from './UserProfile';

const User = db.define('user', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  }
});

User.associate = function () {
  User.hasOne(UserProfile, {foreignKey: 'user_id', onDelete: 'CASCADE'});
}

export default User;