// 닉네임 : 3~15자리 (중복된 닉네임 X) ==> 아래는 아직 중복만 체크 안한 코드
export const nicknameCheck = (nickname:string) => {
  let regNick = /^[가-힣a-zA-Z0-9]{2,10}$/;
  return regNick.test(nickname);
};
