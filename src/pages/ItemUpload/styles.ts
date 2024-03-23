import styled from 'styled-components';

export const UploadItem = styled.div`
  color: #d80d17;
  font-size: 13px;
  padding: 20px 0 13px 8px;
`;

export const HorizonLine = styled.hr`
  background: #eeeeee;
  height: 1px;
  border: 0;
`;

export const BasicInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;
  border-bottom: 2px solid black;
  padding: 6px 0;
  h2 {
    font-size: 26px;
    font-weight: 500;
  }
  span {
    color: #d80d17;
  }
`;

export const RegisterContainer = styled.div`
  padding-bottom: 120px;
  input[type='file'] {
    display: none;
  }

  input {
    outline: none;
    background: #ffffff;
    color: #000000;
    border: 1px solid gray;
    border-radius: 2px;
    height: 36px;
    padding-left: 12px;
    &:nth-child(1) {
      width: 800px;
    }

    &:nth-child(2) {
      width: 300px;
    }
  }

  textarea {
    outline: none;
    background: #ffffff;
    color: #000000;
    width: 856px;
    height: 164px;
  }

  h3 {
    width: 168px;
    font-size: 18px;
    font-weight: 500;
    padding: 20px 0 0 4px;
    span {
      color: #d80d17;
    }
  }
`;

export const ImgLabel = styled.label`
  cursor: pointer;
  width: 200px;
  height: 200px;
  background-color: #fafafa;
  border: 1px solid gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  display: flex;
  align-items: baseline;
  padding: 12px 0;
`;

export const ImgBox = styled.div`
  display: flex;
  justify-content: baseline;
  label {
    margin-top: 40px;
  }
`;

export const Footer = styled.div`
  height: 88px;
  background: #f6f6f6;
  border-top: 1px solid #d9d9d9;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 12px;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  button {
    width: 160px;
    height: 56px;
    border-radius: 0;
    font-size: 18px;
    font-weight: 600px;
    cursor: pointer;
    &:nth-child(1) {
      color: #666666;
      background: #ffffff;
      border: 1px solid #d9d9d9;
    }

    &:nth-child(2) {
      color: #ffffff;
      background: #d80d17;
      border: 1px solid #d9d9d9;
    }
  }
`;
