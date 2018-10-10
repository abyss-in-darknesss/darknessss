import db from './db';

export const sync = function() {
  db.sync();
}
