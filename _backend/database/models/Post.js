import Sequelize from 'sequelize';
import db from '../db';
import { User, PostImg } from '../models';

const Post = db.define('post', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  user_id: {
    type: Sequelize.UUID,
    allowNull:false,
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  bio: {
    type: Sequelize.TEXT,
  },
  like: {
    type: Sequelize.INTEGER,
  },
  hit: {
    type: Sequelize.INTEGER,
  },
}, {
  timestamps: true,
  underscored: true,
});

Post.associate = function() {
  Post.belongsTo(User, {
    foreignKey: 'user_id',
  });
  Post.hasMany(PostImg);
}

export default Post;