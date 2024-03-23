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
  Box,
} from '../components/user/Common';
import { useNavigate } from 'react-router-dom';
import { login } from '../apis/login';
import { idCheck } from '../util/Id';
import { useMutation } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
// import withAuth from "../hocs/hoc";

function Login() {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const [idValid, setIdValid] = useState(false);
  const [pwValid, setPwValid] = useState(false);
  const [notAllow, setNotAllow] = useState(true);

  const navigate = useNavigate();

  useEffect(() => {
    if (idValid && pwValid) {
      setNotAllow(false);
      return;
    }
    setNotAllow(true);
  }, [idValid, pwValid]);

  const handleId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (regex.test(e.target.value)) {
      setIdValid(true);
    } else {
      setIdValid(false);
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

  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      const Authorization = data?.headers.authorization || '';
      console.log(data.headers.Authorization);
      if (data?.data.status === true) {
        localStorage.setItem('Authorization', Authorization);
        alert(`로그인 성공하였습니다. 메인페이지로 이동합니다!`);
        navigate('/');
      }
    },
    onError: (error) => {
      console.log('로그인 실패 : ', error);
      alert('로그인에 실패하였습니다!');
    },
  });
  // 헤더에 있는 액세스토큰 뽑기
  //Auth 라는헤더는 예약이 되어있는 정해진 키 이름서버에서 응답헤더를 보낼때
  // 콘솔로그로 찍었을때 값이 잘들어오는지 확인하기 undefined로 나오징 ㅏㄴㅎ는지
  //undefined로 나오면 서버에 문의를ㄹ 드려야함 ==>잘만 나오네...
  const onClickLoginButton = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) => {
    e.preventDefault();
    if (id === '' || pw === '') {
      alert('아이디(메일주소)와 비밀번호를 모두 입력하세요.');
      return;
    }
    if (!idCheck(id)) {
      alert('올바른 아이디(메일주소) 형식을 입력하세요.');
      return;
    }
    loginMutation.mutate({ id, pw });
    // navigate("/");
  };

  return (
    <Page>
      <TitleWrap>항해장터 로그인</TitleWrap>
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
        </InputWrap>
        <ErrorMessageWrap>
          {!idValid && id.length > 0 && (
            <div>올바른 아이디를 입력해주세요.</div>
          )}
        </ErrorMessageWrap>
        <InputTitle style={{ marginTop: '26px' }}>비밀번호</InputTitle>
        <InputWrap>
          <Input
            className="input"
            type="password"
            placeholder="최소 하나 이상의 영어 소문자, 대문자, 특수문자, 숫자 포함 8~15자리 문자"
            value={pw}
            onChange={handlePw}
          />
        </InputWrap>
        <ErrorMessageWrap>
          {!pwValid && pw.length > 0 && (
            <div>
              최소 하나 이상의 영어 소문자, 대문자, 특수문자, 숫자 포함
              8~15자리로 입력해주세요.
            </div>
          )}
        </ErrorMessageWrap>
        <ButtonContainer>
          <BottomButton onClick={onClickLoginButton} disabled={notAllow}>
            로그인
          </BottomButton>
          <Box>
            <CustomLink to="/signup" style={{ textDecoration: 'none' }}>
              회원가입
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

export default Login;
// export default withAuth(Login, true);

//   interface PostTypeButtonProps {
//     value: string;
//     userPageCategory: string;
//     onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
//     }

//     const PostTypeButton = styled.button<PostTypeButtonProps>`
