import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeadContainer = styled.div`
  width: 1024px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 16px;
`;
export const Logo = styled.div``;
export const LogoImg = styled.img`
  width: 28px;
`;

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;

  h1 {
    font-size: 1.5rem;
    font-weight: 900;
  }

  span {
    font-size: 14px;
  }

  div {
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .vertical {
    width: 1px;
    background-color: lightgray;
    height: 12px;
    margin: 0 10px;
  }
`;

export const IconContainer = styled.div`
  gap: 4px;
`;

export const IconImg = styled.img`
  margin-right: 10px;
  width: 24px;
`;

export const MenuContainer = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
  /* img svg:hover {
    fill: red;
  } */

  span {
    font-weight: 800;
  }
`;

export const StLink = styled(Link)`
  all: unset;
  &:hover {
    color: unset;
  }
`;

export const NavCategory = styled.div`
  width: 200px;
  height: 220px;
  background: white;
  position: absolute;
  top: 53px;
  z-index: 1;
  border: 1px solid #d9d9d9;
`;

export const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  font-size: 18px;
  &:visited {
    color: black;
  }
`;