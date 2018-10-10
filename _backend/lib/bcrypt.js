import bcrypt from 'bcrypt';

export function generateHash(password) {
  return new Promise(
      (resolve, reject) => {
          bcrypt.hash(password, 10, (err, hash) => {
              if(err) {
                  // error occurred
                  return reject(err);
              }
              resolve(hash);
          })
      }
  )
}

export function compareHash(hash, password) {
  return new Promise(
      (resolve, reject) => {
          bcrypt.compare(password, hash, (err, result) => {
              if(err) {
                  // error occured
                  return reject(err);
              }
              resolve(result); // true or false
          })
      }
  )
}