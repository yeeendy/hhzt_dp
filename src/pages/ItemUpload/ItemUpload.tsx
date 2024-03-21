import Header from '../../components/Header';
import SelectCategory from '../../components/Item/SelectCategory/SelectCategory';
// import { registerItem, updateItem } from '../../service/itemService';
import styled from 'styled-components';
function ItemUpload() {
  return (
    <div>
      <Header />
      <UploadItem>상품등록</UploadItem>
      <HorizonLine />
      <BasicInfo>
        <h2>기본정보</h2>
        <span>*필수항목</span>
      </BasicInfo>
      <RegisterContainer>
        <ImgBox>
          <h3>
            상품이미지<span>*</span>
          </h3>
          <div>
            <ImgLabel htmlFor="image_upload">
              <img src="/assets/camera_icon.svg" alt="camera_icon" />
              <span>이미지 등록</span>
            </ImgLabel>
            <input id="image_upload" type="file" />
          </div>
        </ImgBox>
        <Box>
          <h3>
            상품명<span>*</span>
          </h3>
          <input type="text" placeholder="상품명을 입력해 주세요." />
        </Box>
        <Box>
          <h3>
            카테고리<span>*</span>
          </h3>
          <div>
            <SelectCategory />
            <span>선택한 카테고리 :</span>
          </div>
        </Box>
        <Box>
          <h3>
            가격<span>*</span>
          </h3>
          <input type="text" placeholder="가격을 입력해 주세요." />
        </Box>
        <Box>
          <h3>
            설명<span>*</span>
          </h3>
          <textarea></textarea>
        </Box>
      </RegisterContainer>
    </div>
  );
}

export default ItemUpload;

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
