import Sequelize from 'sequelize';
import db from '../db';
import { Post, Tag } from '../models';

const PostTag = db.define('post_tag', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
  },
  post_id: {
    type: Sequelize.UUID,
  },
  tag_id: {
    type: Sequelize.UUID,
  }
}, {
  timestamps: false,
  underscored:true,
  charset: 'utf8',
  collate: 'utf8_general_ci'
});

PostTag.associate = function() {
  Post.belongsToMany(Tag, {
    onDelete: 'CASCADE',
    onUpdate: 'restrict',
    through: {
      model: PostTag
    },
    foreignKey: 'tag_id'
  });
  Tag.belongsToMany(Post, {
    onDelete: 'CASCADE',
    onUpdate: 'restrict',
    through: {
      model: PostTag
    },
    foreignKey: 'post_id'
  });
}

export default PostTag;