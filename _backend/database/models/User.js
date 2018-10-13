import Sequelize from 'sequelize';
import db from '../db';
import { UserProfile, Post } from '../models';

const User = db.define('user', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
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
}, {
  underscored:true
});

User.associate = function () {
  User.hasMany(Post);
  User.hasOne(UserProfile, {foreignKey: 'user_id', onDelete: 'CASCADE'});
}

export default User;