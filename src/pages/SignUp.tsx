//리액트쿼리에서 useMutation 타입 구글링해서 온에러에 리스폰스타입 뭐로해야하는지 찾아보기 외부라이브러리 사용하는경우 타입 뭔지 체크하기 어디서 타입에러가 뜨는지 찾아서 구글링하기
import React, { useEffect, useState } from 'react';
import {
  Page,
  TitleWrap,
  ContentWrap,
  InputTitle,
  Input,
  InputWrap,
  ErrorMessageWrap,
  BottomButton,
  CustomLink,
  ButtonContainer,
  CheckingButton,
  Box,
} from '../components/user/Common';
import { useNavigate } from 'react-router-dom';
import {
  signUp,
  duplicateNicknameCheck,
  duplicateIdCheck,
} from '../apis/signUp'; // 이렇게 임포트 하는 것처럼 에러타입을 입포트 할수 있다 에시오스에서제공하는 에시오스타입에러가 필요
import { idCheck } from '../util/Id';
import { passwordCheck } from '../util/Password';
import { nicknameCheck } from '../util/Nickname';
import { useMutation } from '@tanstack/react-query';

interface CustomErrorData {
  msg: string;
}

interface CustomAxiosError extends Error {
  response?: {
    data: CustomErrorData;
  };
}

function SignUp() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [pw_check, setPw_check] = useState('');
  const [nickname, setNickname] = useState('');

  const [idValid, setIdValid] = useState<boolean>(false);
  const [pwValid, setPwValid] = useState<boolean>(false);
  const [nicknameValid, setNicknameValid] = useState<boolean>(false);
  const [pw_checkValid, setPw_checkValid] = useState<boolean>(false);
  const [notAllow, setNotAllow] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (idValid && nicknameValid && pwValid && pw_checkValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, nicknameValid, pwValid, pw_checkValid]);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
    }
  };

  const handleNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNickname(e.target.value);
    const regex = /^[가-힣a-zA-Z0-9]{2,10}$/;
    if (regex.test(e.target.value)) {
      setNicknameValid(true);
    } else {
      setNicknameValid(false);
    }
  };

  const handlePw = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw(e.target.value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    if (regex.test(e.target.value)) {
      setPwValid(true);
    } else {
      setPwValid(false);
    }
  };

  const handlePw_check = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPw_check(e.target.value);
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
    if (regex.test(e.target.value)) {
      setPw_checkValid(true);
    } else {
      setPw_checkValid(false);
      false;
    }
  };

  const signUpMutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      if (data?.data.status === true) {
        // data가 없을 수 있으니(성공했을 때 data가 안담겨오니까 undefined.status는 성립할수 없음) data 뒤에 물음표 붙여서 되는지 확인해보기
        alert('회원가입 안성~');
        navigate('/login');
      }
    },
    onError: (error: CustomAxiosError) => {
      // console.log(error, 'error');
      alert(`회원가입 실패 : ${error.response?.data.msg}`);
    },
  });

  const idDuplicateCheck = useMutation({
    mutationFn: duplicateIdCheck,
    onSuccess: (data) => {
      if (data?.data.status === true) {
        alert('사용가능한 아이디(메일)입니다.');
      }
    },
    onError: (error: CustomAxiosError) => {
      alert(`회원가입 실패 : ${error.response?.data.msg}`);
    },
  });
  //데이터 바디 값으로 판단해야한다.

  const nicknameDuplicateCheck = useMutation({
    mutationFn: duplicateNicknameCheck,
    onSuccess: (data) => {
      if (data?.data.status === true) {
        alert('사용가능한 닉네임입니다.');
      }
    },
    onError: (error: CustomAxiosError) => {
      // 애시오스의 에러 객체에 리스폰스키가 있따!
      alert(`회원가입 실패 : ${error.response?.data.msg}`); //리스폰스가 반드시 오지 않을수 있으니 ? 쓰자 올때만 데이터에 접근할수 있똘고 처리 필요
    },
  });
  //
  const idDuplicateCheckButton = async () => {
    idDuplicateCheck.mutate({ id });
  };

  const nicknameDuplicateCheckButton = async () => {
    nicknameDuplicateCheck.mutate({ nickname });
  };

  const onClickSignUpButton = async () => {
    if (id === '' || pw === '' || nickname === '') {
      alert('아이디, 비밀번호, 닉네임을 모두 입력해주세요.');
      return;
    }
    if (!idCheck(id)) {
      alert('올바른 아이디(메일주소) 형식을 입력하세요.');
      return;
    }
    if (!nicknameCheck(nickname)) {
      alert('올바른 닉네임 형식(3~15자리)을 입력하세요.');
      return;
    }
    if (!passwordCheck(pw)) {
      alert(
        '올바른 비밀번호 형식(최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자)을 입력하세요.',
      );
      return;
    }
    signUpMutation.mutate({ id, pw, nickname });
    navigate('/login');
  };

  // 보여주는 메시지 alert로
  // 복붙하고 api 주소 넣으면

  return (
    <Page>
      <TitleWrap>항해장터 회원가입</TitleWrap>
      <ContentWrap>
        <InputTitle>아이디</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="text"
            placeholder="이메일 주소"
            value={id}
            onChange={handleId}
          />
          <CheckingButton onClick={idDuplicateCheckButton}>
            중복확인
          </CheckingButton>
        </InputWrap>
        <ErrorMessageWrap>
          {!idValid && id.length > 0 && (
            <div>이메일 형식으로 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>비밀번호</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="password"
            placeholder="최소 하나 이상의 대문자, 소문자, 숫자를 포함한 6~20자리 문자를 입력하세요."
            value={pw}
            onChange={handlePw}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {!pwValid && pw.length > 0 && (
            <div>
              최소 하나 이상의 영어 소문자, 대문자, 특수문자, 숫자 포함 8
              ~15자리로 입력해주세요.
            </div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>비밀번호 확인</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="password"
            placeholder="비밀번호를 다시 입력하세요."
            value={pw_check}
            onChange={handlePw_check}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {pw_check !== pw && pw_check.length > 0 && (
            <div>비밀번호가 일치하지 않습니다.</div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>닉네임</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="text"
            placeholder="닉네임(특수문자를 포함하지 않은 2~10자리)"
            value={nickname}
            onChange={handleNickname}
          />
          <CheckingButton onClick={nicknameDuplicateCheckButton}>
            중복확인
          </CheckingButton>
        </InputWrap>
        <ErrorMessageWrap>
          {!nicknameValid && nickname.length > 0 && (
            <div>
              닉네임은 특수문자를 포함하지 않은 2~10자리로 입력해주세요.
            </div>
          )}
        </ErrorMessageWrap>
        <ButtonContainer>
          <BottomButton onClick={onClickSignUpButton} disabled={notAllow}>
            회원가입
          </BottomButton>
          <Box>
            <CustomLink to="/login" style={{ textDecoration: 'none' }}>
              로그인
            </CustomLink>
            <CustomLink to="/" style={{ textDecoration: 'none' }}>
              홈으로
            </CustomLink>
          </Box>
        </ButtonContainer>
      </ContentWrap>
    </Page>
  );
}

export default SignUp;
// export default withAuth(SignUp, true);

// 중복검사하는 법
// post했을 때 에러를 잡으면 된다.
// 회원가입 해씅ㄹ때 엑시오스에서 에러를 잡으면 된다(메시지가 있다는 가정하에)
