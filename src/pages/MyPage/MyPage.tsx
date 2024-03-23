import styled from "styled-components";
import MyProduct from "../../components/user/Myproduct";
import Photo from "../img/Photo.png";

const MyShop = () => {
  return (
    <div>
      <Section>
        <All>
          <All1>
            <Imggg>
              <ImgG>
                <img src={Photo} />
              </ImgG>
              <ImgG1>
                <img
                  src={Photo}
                  width="100"
                  height="100"
                  alt="상점 프로필 이미지"
                  class="sc-fATqzn hyPlln"
                />
              </ImgG1>
              <ImgBtt>닉네임여기도받아오기</ImgBtt>
              <ImgBtt1>
                <button>내상점 관리</button>
              </ImgBtt1>
            </Imggg>
          </All1>
          <TextWindow>
            <Nickname>
              닉네임여기다가 넣기
              <NicknameBtt>상점명 수정</NicknameBtt>
            </Nickname>
          </TextWindow>
        </All>
        <div>
          <MyProduct />
        </div>
      </Section>
    </div>
  );
};

export default MyShop;

const Section = styled.div`
  width: 1024px;
  margin: auto;
  padding: 2rem 0px 15rem;
  display: flex;
  flex-wrap: wrap;
`;

const All = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
  width: 1024px;
  margin-bottom: 30px;
  border: 1px solid rgb(238, 238, 238);
`;

const Imggg = styled.div``;

const All1 = styled.div``;

const ImgG = styled.div`
  img {
    width: 310px;
    width: 310px;
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    transform: scale(1.02);
    z-index: -1;
  }
`;

const ImgG1 = styled.div`
  img {
    border-radius: 100%;
    border: 1px solid rgb(155, 155, 155);
    width: 100px;
    height: 100px;
    z-index: -100;
  }
`;

const ImgBtt = styled.div``;

const ImgBtt1 = styled.div`
  button {
    width: 106px;
    border: 1px solid rgb(255, 255, 255);
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 13px;
    background-color: transparent;
  }
`;

const TextWindow = styled.div`
  margin-left: 10px;
  padding-top: 25px;
`;

const Nickname = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
`;

const NicknameBtt = styled.button`
  height: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 5px;
  color: rgb(136, 136, 136);
  border: 1px solid rgb(238, 238, 238);
  font-size: 11px;
`;







// import { useEffect, useState } from "react";
// import { getMyPage } from "../../apis/mypage";

// // import { findLoginUser } from '../../service/MemberService'
// function MyPage() {
//   const [data, setData] = useState();
//   useEffect(() => {
//     //mypage 정보를 불러오기
//     getMyPage().then((res) => {
//       setData(res)
//     })
//   }, []);
//   return (
//   // <div> MyPage
//   //   <div>{data.data?.email}</div>
//   //   <div>{data.data?.nickname}</div>
//   //   <div>{data.data?.createdAt}</div>
//   // </div>
//     <Container>
//       <Title>마이 페이지</Title>
//       <UserInfo>
//         <Id>아이디 : </Id>
//         <Value>
//           {user.userId}
//           <Line />
//         </Value>
//       </UserInfo>
//       <Link to="/mypage/modify">
//         <Btn type="submit" value="수정" />
//       </Link>
//     </Container>
//   );
// }

// export default MyPage;


// const MyPage = () => {
//   const { user } = useUserState();
//   return (
//   );
// };