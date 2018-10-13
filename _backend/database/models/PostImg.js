import Sequelize from 'sequelize';
import db from '../db';
import { Post } from '../models';
const PostImg = db.define('post_img', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  post_id: {
    type: Sequelize.UUID,
    allowNull: false,
  },
  img_url: {
    type: Sequelize.STRING,
    allowNull: false,
  }
}, {
  timestamps: false,
  underscored: true,
});
PostImg.associate = function() {
  PostImg.hasOne(Post);
}
export default PostImg;