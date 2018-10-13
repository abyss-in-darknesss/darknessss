export const postById = async (req, res) => {
  console.log(req.user);

  if(req.user) {
    res.send('유저 로그인');
  }else {
    res.send('유저 로그인 안되있음');
  }
}

export const postWrite = async (req, res) => {
  console.log(req.files);
  
  res.send('asdasdasd');
}