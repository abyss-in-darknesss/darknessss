import db from './db';
import {
  User,
  UserProfile
} from './models';

export function associate() {
  User.associate();
}

export const sync = function() {
  associate();
  db.sync();
}
