import styled from 'styled-components';

export const Img = styled.img`
  width: 428px;
  height: 428px;
`;

export const ItemBox = styled.div`
  height: 480px;
  display: flex;
  margin-top: 30px;
  margin-bottom: 40px;
`;

export const ItemInfo = styled.div`
  margin-left: 20px;
  div {
    margin-bottom: 30px;
  }
  hr {
    background: #eeeeee;
    height: 1px;
    border: 0;
  }
  h2 {
    margin-top: 0;
    font-size: 24px;
  }
  h4 {
    margin: 0;
    display: flex;
    align-items: center;
    font-size: 40px;
    span {
      margin-left: 5px;
      font-size: 28px;
    }
  }
  button {
    margin-top: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;
export const LikeButton = styled.button`
  width: 176px;
  height: 56px;
  border-radius: 0;
  color: white;
  font-size: 18px;
  font-weight: 700;
  background-color: #cccccc;
  &:hover {
    border: none;
  }
`;
export const PayButton = styled(LikeButton)`
  background-color: #f70100;
`;

export const InfoBox = styled.div`
  margin-top: 48px;
  padding-bottom: 120px;
  span {
    font-size: 18px;
    margin-bottom: 16px;
  }
  hr {
    background: #eeeeee;
    height: 1px;
    border: 0;
  }
  p {
    font-size: 14px;
    margin-top: 40px;
  }
`;

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  div {
    display: flex;
    gap: 12px;
    margin-top: 8px;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #d9d9d9;
    color: #ffffff;
    &:hover {
      background: lightgray;
      border: 1px solid gray;
    }
  }
`;
