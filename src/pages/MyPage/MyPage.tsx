import styled from 'styled-components';
import { getMyPage } from '../../apis/mypage';
import { useQuery } from '@tanstack/react-query';
import { checkDate } from '../../util/checkDate';
import MyProduct from '../../components/Myproduct';
import watch from '../../../public/assets/watch.jpeg';
import kawaiisally from '../../../public/assets/kawaiisally.jpeg';
import emojione_ship from '../../../public/assets/emojione_ship.svg';
import Header from '../../components/Header';
import star_icon from '../../../public/assets/star_icon.svg';
import { useNavigate } from 'react-router-dom';

function MyPage() {
  const navigate = useNavigate();
  const { data, isLoading, isError } = useQuery({
    queryKey: ['getMyPage'],
    queryFn: () => getMyPage(),
  });
  const createdAt = new Date(data?.data.createdAt);
  const daysDifference = checkDate(createdAt);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }
  if (isError) {
    return (
      <div
        style={{
          display: 'flex',
          flex: 'colum',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        혹시 로그인을 안하셨나요?? 로그인 드가실거면 오른쪽의 배먹어 배 버튼을
        누르자~ 흐헤헤
        <br />
        <button
          onClick={() => {
            navigate('/login');
          }}
        >
          <ImageStyleButton src={emojione_ship} alt="로고사진" />
        </button>
      </div>
    );
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Section>
            <Profile>
              <ProfileBackground>
                <img src={watch} />
              </ProfileBackground>
              <Picture>
                <img
                  src={kawaiisally}
                  width="100"
                  height="100"
                  alt="상점 프로필 이미지"
                />
              </Picture>
              <ProfileButton>
                <ImgBtt>{data?.data.nickname}</ImgBtt>
                <ImageStyle src={star_icon} alt="내 펑점" />
                <ImageStyle src={star_icon} alt="내 펑점" />
                <ImageStyle src={star_icon} alt="내 펑점" />
                <ImageStyle src={star_icon} alt="내 펑점" />
                <ImageStyle src={star_icon} alt="내 펑점" />
                <button>&nbsp;내 상점 관리</button>
              </ProfileButton>
            </Profile>
          </Section>
          <TextWindow>
            <Nickname>
              {data?.data.nickname}
              <NicknameBtt>상점명 수정</NicknameBtt>
            </Nickname>
            <MyInfo>
              <StoreOpen>
                <img src="https://m.bunjang.co.kr/pc-static/resource/4b323fe1ef79c2b715fe.png" />
                &nbsp;
                <span>상점오픈일:&nbsp;{daysDifference}</span>
              </StoreOpen>
              <MyId>
                <img src="https://m.bunjang.co.kr/pc-static/resource/e6792c64a6ba6f2b10a2.png" />
                &nbsp;
                <span>내 아이디:&nbsp;{data?.data.email}</span>
              </MyId>
            </MyInfo>
            <HiHello>
              <div>애드라 택포 네고 안받는다. 그리고 나한테 사기치려는 생각 하덜덜 말어라~<br/>와치 와치 시계는 와치</div>
              <NicknameBtt>소개글 수정</NicknameBtt>
            </HiHello>
          </TextWindow>
        </Container>
        <div>
          <MyProduct />
        </div>
      </Wrapper>
    </>
  );
}

export default MyPage;

const ImgBtt = styled.div`
  margin-top: 10px;
  display: flex;
`;
const HiHello = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const ProfileButton = styled.div`
  button {
    width: 106px;
    border: 1px solid rgb(255, 255, 255);
    height: 40px;
    display: flex;
    align-items: center;
    font-size: 13px;
    background-color: transparent;
  }
  position: relative;
  bottom: 270px;
  left: 110px;
`;

const Wrapper = styled.div`
  width: 1024px;
  margin: auto;
  padding: 2rem 0px 15rem;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 1024px;
  margin: auto;
  display: flex;
  width: 1024px;
  margin-bottom: 30px;
  border: 1px solid rgb(238, 238, 238);
`;

const Profile = styled.div`
  width: 295px;
  height: 295px;
  margin: 0px;
  padding: 0px;
  position: relative;
  top: 3px;
  left: 3px;
`;
const Section = styled.div`
  padding: 0px;
  margin: 0px;
  height: 310px;
`;

const MyInfo = styled.div`
  font-size: 13px;
  width: 665px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  border-top: 1px solid #eeeeee;
  padding-bottom: 5px;
`;
const MyId = styled.div`
  font-size: 13px;
  width: 665px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 5px;
`;

const StoreOpen = styled.div`
  font-size: 13px;
  font-size: 13px;
  width: 665px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 5px;
`;

const ProfileBackground = styled.div`
  img {
    /* width: 310px; */
    -webkit-filter: blur(5px);
    -moz-filter: blur(5px);
    -o-filter: blur(5px);
    -ms-filter: blur(5px);
    filter: blur(5px);
    transform: scale(1.02);
    /* z-index: -1; */
    /* position: inherit; */
    display: flex;
    width: 100%;
    height: 100%;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    flex-direction: column;
    /* box-shadow: rgba(4, 0, 0, 0.03) 0px 5px 10px 0px; */
  }
  position: relative;
  top: 3px;
  left: 3px;
`;

const Picture = styled.div`
  img {
    /* border-radius: 100%; */
    border: 1px solid rgb(155, 155, 155);
    /* z-index: -100; */
    border-radius: 50%;
    margin-bottom: 15px;
    cursor: pointer;
    vertical-align: bottom;
    border-style: none;
    overflow-clip-margin: content-box;
    overflow: clip;
    width: 100px;
    aspect-ratio: auto 100 / 100;
    height: 100px;
    position: relative;
    bottom: 250px;
    left: 110px;
  }
`;

const TextWindow = styled.div`
  margin-left: 10px;
  padding: 25px;
  flex-wrap: nowrap;
  gap: 0px;
  img {
    width: 14px;
    height: 13px;
  }
`;

const Nickname = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  font-weight: bold;
  font-size: 18px;
  gap: 10px;
`;

const NicknameBtt = styled.button`
  height: 20px;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  padding: 0px 5px;
  color: rgb(136, 136, 136);
  border: 1px solid rgb(238, 238, 238);
  border-radius: 0px;
  font-size: 11px;
`;

const ImageStyle = styled.img`
  height: 15px;
`;
const ImageStyleButton = styled.img`
  margin: 0px;
  padding: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

