export const isLogin = (req, res, next) => {
  if (req.user) {
    next();
  }else {
    res.end('로그인 하셔야 합니다.');
  }
}
export default isLogin;