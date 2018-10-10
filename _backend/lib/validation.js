// 이메일 유효 검사
export const isEmail = (email) => {
  const regexp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  return regexp.test(email);
}

// 비밀번호 유효 검사
export const isPassword = (password) => {
  const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm;
  return regexp.test(password);
}

// 디스플레이네임 유효 검사
export const isDisplayName = (displayName) => {
  const regexp = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/igm;
  return regexp.test(displayName);
}