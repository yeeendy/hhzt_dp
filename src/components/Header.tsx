// import { useState } from 'react';
// import {
//   HeadContainer,
//   HeaderContainer,
//   Logo,
//   LogoImg,
//   IconContainer,
//   IconImg,
//   MenuContainer,
//   StLink,
// } from './styles';
// import SearchField from './Item/SearchField/SearchField';

// function Header() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태

//   return (
//     <HeadContainer>
//       <HeaderContainer>
//         <StLink to={'/'}>
//           <Logo>
//             <LogoImg src="/assets/logo.svg" alt="logo" />
//             <h1>항해장터</h1>
//           </Logo>
//         </StLink>
//         <SearchField />
//         <IconContainer>
//           <StLink to={'/item'}>
//             <div>
//               <IconImg src="/assets/sell_icon.png" alt="sell_icon" />
//               <span>판매하기</span>
//             </div>
//           </StLink>
//           <div className="vertical"></div>
//           <div>
//             <IconImg src="/assets/myStore_icon.png" alt="myStore_icon" />
//             <span>내상점</span>
//           </div>
//           <div className="vertical"></div>
//           {/* 로그인 상태에 따라 다른 내용 렌더링 */}
//           {isLoggedIn ? (
//             <div>
//               <IconImg src="/assets/logout_icon.png" alt="logout_icon" /> {/* 로그아웃 아이콘 */}
//               <span>로그아웃</span>
//             </div>
//           ) : (
//             <div>
//               <IconImg src="/assets/thunderTalk_icon.png" alt="thunderTalk_icon" /> {/* 로그인 아이콘 */}
//               <span>로그인</span>
//             </div>
//           )}
//         </IconContainer>
//       </HeaderContainer>
//       <MenuContainer>
//         <img src="/assets/menu_icon.svg" alt="menu" />
//         <span>번개장터 판매자센터</span>
//       </MenuContainer>
//     </HeadContainer>
//   );
// }

// export default Header;

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

function Header() {
  const navigate = useNavigate();

  const onClickLogoutHandler = () => {
    localStorage.removeItem('Authorization');
    navigate('/login');
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
              <span>판매하기</span>
            </div>
          </StLink>
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
            <div>
              {localStorage.getItem('Authorization') ? ( // 문자열이 지금 상태에서 빈무ㄴ자열로 오기때문에  위에 콘솔 찍어서 어떤게 오는지 보기
                <>
                  <button onClick={onClickLogoutHandler}>로그아웃</button>
                </>
              ) : (
                <Link to="/login">로그인</Link>
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
