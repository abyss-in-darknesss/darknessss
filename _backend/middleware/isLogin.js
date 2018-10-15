export const isLogin = (req, res, next) => {
  if (req.user) {
    next();
  }else {
    res.status(401).end('로그인 하셔야 합니다.');
  }
}
export default isLogin;