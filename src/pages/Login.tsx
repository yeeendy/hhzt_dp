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
  } from "../components/user/Common";
  import { useNavigate } from "react-router-dom";
  import { login } from "../apis/login";
  import { idCheck } from "../util/Id";
  import { useMutation } from "@tanstack/react-query";
  import { useEffect, useState } from "react";
  // import withAuth from "../hocs/hoc";
  
  function Login() {
    const [id, setId] = useState("");
    const [pw, setPw] = useState("");
  
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
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,15}$/;
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
        // const refreshToken = data.data.refreshToken;
        const token = data.data.token || '';
        if (data.data.status === 200) {
          localStorage.setItem("token", token);
        //   setCookie("refreshToken", refreshToken);
          alert(`로그인 성공하였습니다. 메인페이지로 이동합니다!`);
          navigate("/");
        } else {
          console.log("로긍니 실패");
        }
      },
      onError: (error) => {
        console.log("로그인 실패 : ", error);
        alert("로그인에 실패하였습니다!");
      },
    });
  
    const onClickLoginButton = async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      e.preventDefault();
      if (id === "" || pw === "") {
        alert("아이디(메일주소)와 비밀번호를 모두 입력하세요.");
        return;
      }
      if (!idCheck(id)) {
        alert("올바른 아이디(메일주소) 형식을 입력하세요.");
        return;
      }
      loginMutation.mutate({ id, pw });
      // navigate("/");
    };
  
    return (
      <Page>
        <TitleWrap>로그인</TitleWrap>
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
          <InputTitle style={{ marginTop: "26px" }}>비밀번호</InputTitle>
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
              최소 하나 이상의 영어 소문자, 대문자, 특수문자, 숫자 포함 8~15자리로
              입력해주세요.
              </div>
            )}
          </ErrorMessageWrap>
          <ButtonContainer>
            <BottomButton onClick={onClickLoginButton} disabled={notAllow}>
              로그인
            </BottomButton>
            <CustomLink to="/signup" style={{ textDecoration: "none" }}>
              회원가입
            </CustomLink>
            <CustomLink to="/" style={{ textDecoration: "none" }}>
              홈으로
            </CustomLink>
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