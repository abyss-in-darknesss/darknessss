import { User, UserProfile } from '../../../database/models';
import {generateHash} from '../../../lib/bcrypt';
import { isEmail, isPassword, isUserName } from '../../../lib/validation';
import { Map } from 'immutable';

/*****************************************
*  URL: api/auth/user/signup
*  method: POST
*  data: {
*    email: body.email,
*    password: body.password
*  }
*****************************************/
export const signin = async (req, res) => {
  console.log(req.user);

  res.status(200).json({
    success: true,
    message: "로그인이 성공했습니다.",
    email: req.user.email
  })
}
export const logout = (req, res) => {
  req.logout();
  res.status(200).json({
    success: true,
    message: "로그아웃이 성공했습니다."
  })
}

export const signup = async (req, res) => {
  const body = req.body;
  console.log(body);
  
  let status = Map({
    success: true,
    errors: Map({})
  });

  status = body.email ? status : status.setIn(['errors', 'email'], Map({ message: "이메일이 누락되었습니다."}));
  status = body.username ? status : status.setIn(['errors', 'username'], Map({ message: "닉네임이 누락되었습니다."}));
  status = body.password ? status : status.setIn(['errors', 'password'], Map({ message: "비밀번호가 누락되었습니다."}));
  
  //이메일 검증
  await User.findOne({
    where: {
      email: body.email
    }
  }).then(user => {
    if(!user) {
      status = isEmail(body.email) ? 
        status :
        status.setIn(['errors', 'email'], Map({ message: "사용하실 수 없는 이메일 입니다."}));
    }else {
      status = status.setIn(['errors', 'email'], Map({ message: "이미 가입된 이메일 입니다."}));
    }
  });

  //유저네임 검증
  await UserProfile.findOne({
    where: {
      username: body.username
    }
  }).then(userProfile => {
    if(!userProfile) {
      // status = isUserName(body.username) ? 
      //   status :
      //   status.setIn(['errors', 'username'], Map({ message: "사용하실 수 없는 닉네임 입니다."}));
    }else {
      status = status.setIn(['errors', 'username'], Map({ message: "이미 가입된 닉네임 입니다."}));
    }
  });

  //패스워드 검증
  status = isPassword(body.password) ? status : status.setIn(['errors', 'password'], Map({ message: "사용하실 수 없는 비밀번호입니다."}));
  
  //모든 검사를 통과한지에 대한 여부, errors가 없으면 통과
  const isSuccess = !status.get('errors').count();

  if(isSuccess) {
    const hash = await generateHash(body.password);
    // 유저 생성
    await User.create({
      email: body.email,
      password: hash
    }).then(user => {
      //유저 프로파일 생성
      UserProfile.create({
        user_id: user.id,
        username: body.username
      })
    });
    console.log(status);
    return res.json(status.toJSON());
  }else {
    status = status.set('success', false);
    console.log(status);
    return res.json(status.toJSON());
  }
  
}