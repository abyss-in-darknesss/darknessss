module.exports = (req, res, next) => {
  if (req.isAuthenticated()){
    return next();
  } else {
    return res.status(200).json({
      isLogin: false,
      message: '비 로그인 상태입니다.'
    });
  }
}