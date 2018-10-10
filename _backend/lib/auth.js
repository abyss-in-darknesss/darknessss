import jwt from 'jsonwebtoken';

// 토큰 생성
export function generateToken(payload, subject){
  return new Promise(
    (resolve, reject) => {
      jwt.sign(payload, process.env.JWT_SECRET, {
        issuer:'clone.instagram.com',
        expiresIn: "7s",
        subject
      }, (err, token) => {
        if(err) reject(err);
        resolve(token);
      });
    }
  );
}

// 토큰 유효성 확인
export function verifyToken(token){
  return new Promise(
    (resolve, reject) => {
      jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err || !decoded) return reject(err);
        resolve(decoded);
      });
    }
  );
}
