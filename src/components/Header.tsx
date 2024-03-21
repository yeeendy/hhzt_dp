import {
  HeadContainer,
  HeaderContainer,
  Logo,
  LogoImg,
  IconContainer,
  IconImg,
  MenuContainer,
} from './styles';
import SearchField from './SearchField/SearchField';

function Header() {
  return (
    <HeadContainer>
      <HeaderContainer>
        <Logo>
          <LogoImg src="/assets/logo.svg" alt="logo" />
          <h1>항해장터</h1>
        </Logo>
        <SearchField />
        <IconContainer>
          <div>
            <IconImg src="/assets/sell_icon.png" alt="sell_icon" />
            <span>판매하기</span>
          </div>
          <div className="vertical"></div>
          <div>
            <IconImg src="/assets/myStore_icon.png" alt="myStore_icon" />
            <span>내상점</span>
          </div>
          <div className="vertical"></div>
          <div>
            <IconImg
              src="/assets/thunderTalk_icon.png"
              alt="thunderTalk_icon"
            />
            <span>로그인</span>
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
