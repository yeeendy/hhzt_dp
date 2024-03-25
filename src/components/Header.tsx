import {
  HeadContainer,
  HeaderContainer,
  Logo,
  LogoImg,
  IconContainer,
  IconImg,
  MenuContainer,
  StLink,
  NavCategory,
  CustomLink,
} from './styles';
import SearchField from './Item/SearchField/SearchField';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [showBox, setShowBox] = useState(false);

  const toggleBox = () => {
    setShowBox(!showBox);
  };

  const onClickLogoutHandler = () => {
    localStorage.removeItem('Authorization');
    navigate('/');
  };

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
              <span style={{ fontSize: '14px', textAlign: 'center' }}>
                판매하기
              </span>
            </div>
          </StLink>
          <div className="vertical"></div>
          <StLink to={'/user/mypage'}>
            <div>
              <IconImg src="/assets/myStore_icon.png" alt="myStore_icon" />
              <span style={{ fontSize: '14px' }}>내상점</span>
            </div>
          </StLink>
          <div className="vertical"></div>
          <div>
            <IconImg
              src="/assets/thunderTalk_icon.png"
              alt="thunderTalk_icon"
            />
            <div>
              {localStorage.getItem('Authorization') ? (
                <>
                  <button
                    onClick={onClickLogoutHandler}
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      border: 'none',
                      padding: '0px',
                      fontSize: '14px',
                    }}
                  >
                    로그아웃
                  </button>
                </>
              ) : (
                <StLink to="/login">
                  <div>
                    <span>로그인/회원가입</span>
                  </div>
                </StLink>
              )}
            </div>
          </div>
        </IconContainer>
      </HeaderContainer>
      <MenuContainer>
        <div onClick={toggleBox} style={{ position: 'relative' }}>
          <img src="/assets/menu_icon.svg" alt="menu" />
          {showBox && (
            <NavCategory>
              <div>
                <CustomLink to="/category?category=CLOTHES">의류</CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=ACCESSORY">
                  액세서리
                </CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=DIGITAL">디지털</CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=STAR_GOODS">
                  스타굿즈
                </CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=APPLIANCES">가전</CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=BOOKS">도서</CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=PET_GOODS">
                  반려동물용품
                </CustomLink>
              </div>
              <div>
                <CustomLink to="/category?category=FOODS">식품</CustomLink>
              </div>
            </NavCategory>
          )}
        </div>

        <span>번개장터 판매자센터</span>
      </MenuContainer>
    </HeadContainer>
  );
}

export default Header;
