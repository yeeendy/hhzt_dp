import {
  HeadContainer,
  HeaderContainer,
  Logo,
  LogoImg,
  IconContainer,
  IconImg,
  MenuContainer,
  StLink,
} from './styles';
import SearchField from './Item/SearchField/SearchField';
import { Link, useNavigate } from 'react-router-dom';
// import { useQuery } from '@tanstack/react-query';

function Header() {
  const navigate = useNavigate();

  const onClickLogoutHandler = () => {
    localStorage.removeItem('Authorization');
    navigate('/');
  };

  // const { data: profile } = useQuery('myInfo', getMyInfo);

  // const onClickMyProfile = () => {
  //   setIsActiveModal((prev) => !prev);
  // };

  return (
    <HeadContainer>
      <HeaderContainer>
        <StLink to={'/'}>
          <Logo>
            <LogoImg src="/assets/logo.svg" alt="logo" />
            <h1>항해장터</h1>
          </Logo>
        </StLink>
        <SearchField />
        <IconContainer>
          <StLink to={'/item'}>
            <div>
              <IconImg src="/assets/sell_icon.png" alt="sell_icon" />
              <span>판매하기</span>
            </div>
          </StLink>
          <div className="vertical"></div>
          <StLink to={'/user/mypage'}>
            <IconImg src="/assets/myStore_icon.png" alt="myStore_icon" />
            <span>내상점</span>
          </StLink>
          <div className="vertical"></div>
          <div>
            <IconImg
              src="/assets/thunderTalk_icon.png"
              alt="thunderTalk_icon"
            />
            <div>
              {localStorage.getItem('Authorization') ? ( // 문자열이 지금 상태에서 빈무ㄴ자열로 오기때문에  위에 콘솔 찍어서 어떤게 오는지 보기
                <>
                  <button onClick={onClickLogoutHandler} style={{ backgroundColor:"white", color:"black", border:"none", padding:"0px" }}>로그아웃</button>
                </>
              ) : (
                <Link to="/login" style={{ color:"black", textDecoration: "none" }}>로그인</Link>
              )}
            </div>
          </div>
        </IconContainer>
      </HeaderContainer>
      <MenuContainer>
        <img src="/assets/menu_icon.svg" alt="menu" />
        <span>번개장터 판매자센터</span>
      </MenuContainer>
    </HeadContainer>
  );
}

export default Header;
