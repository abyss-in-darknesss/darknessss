import Sequelize from 'sequelize';
import db from '../db';
import { User } from '../models';

const UserProfile = db.define('user_profile', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  user_id: {
    type: Sequelize.UUID,
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
  underscored: true,
});
// UserProfile.associate = function() {
//   UserProfile.hasOne(User);
// }
export default UserProfile;