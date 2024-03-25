import styled from 'styled-components';
import { getMyPage } from '../../apis/mypage';
import { useQuery } from '@tanstack/react-query';
import { checkDate } from '../../util/checkDate';
import MyProduct from '../../components/Myproduct';
import Photo from '../../../public/assets/Photo.png';
import exam1 from '../../../public/assets/exam1.png';
import Header from '../../components/Header';
import favorites from '../../../public/assets/favorites.png';

function MyPage() {
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
    return <div>로긴하세욧!!</div>;
  }

  return (
    <>
      <Header />
      <Wrapper>
        <Container>
          <Section>
            <Profile>
              <ProfileBackground>
                <img src={Photo} />
              </ProfileBackground>
              <Picture>
                <img
                  src={exam1}
                  width="100"
                  height="100"
                  alt="상점 프로필 이미지"
                />
              </Picture>
              <ProfileButton>
                {data?.data.nickname}
                <img src={favorites} />
                {/* 별 누끼 어케할거냐고 물어보기 */}
                <button>&nbsp;내 상점 관리</button>
              </ProfileButton>
            </Profile>
          </Section>
          <TextWindow>
            <Nickname>
              {data?.data.nickname}
              <NicknameBtt>상점명 수정</NicknameBtt>
            </Nickname>
            <div>상점오픈일:{daysDifference}</div>
            <div>내 아이디:{data?.data.email}</div>
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
  bottom: 300px;
  left: 140px;
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

const Profile = styled.div``;

const Section = styled.div`
  padding: 0px;
  margin: 0px;
  height: 310px;
`;

const ProfileBackground = styled.div`
  img {
    width: 310px;
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
    box-shadow: rgba(4, 0, 0, 0.03) 0px 5px 10px 0px;
  }
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
    bottom: 300px;
    left: 140px;
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
  font-weight: bold;
  font-size: 18px;
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
