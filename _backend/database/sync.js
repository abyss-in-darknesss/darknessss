import db from './db';
import {
  User,
  UserProfile,
  Post,
  PostTag,
  Tag,
  PostImg
} from './models';

export function associate() {
  User.associate();
  PostTag.associate();
  //Tag.associate();
  Post.associate();
  //UserProfile.associate();
  //PostImg.associate();
}

export const sync = function() {
  associate();
  db.sync();
}
