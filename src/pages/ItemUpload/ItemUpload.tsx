import { useRef, useState } from 'react';
import Header from '../../components/Header';
import SelectCategory from '../../components/Item/SelectCategory/SelectCategory';
import {
  BasicInfo,
  Box,
  Footer,
  HorizonLine,
  ImgBox,
  ImgLabel,
  RegisterContainer,
  UploadItem,
} from './styles';
import { authInstance } from '../../apis/axios';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';

// post type
interface ItemData {
  title: string;
  category: { value: string; label: string };
  contents: string;
  price: number;
}

// post api
export const itemPostFn = async (newItem: ItemData) => {
  try {
    const res = await authInstance.post(`/item`, newItem, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return res;
  } catch (error) {
    console.log('error', error);
  }
};

function ItemUpload() {
  const navigate = useNavigate();
  // img들 담을 state
  const [imgList, setImgList] = useState([]);
  console.log('imgList', imgList);
  const [itemPost, setItemPost] = useState<ItemData>({
    title: '',
    category: { value: '', label: '' },
    contents: '',
    price: 0,
  });

  // react-query / mutation
  const postMutation = useMutation({
    mutationFn: (newItem: ItemData) => {
      // console.log('newItem', newItem);
      return itemPostFn(newItem);
    },
    onSuccess: (res) => {
      console.log('res', res);
      navigate('/');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const handleCategoryChange = (selectedCategory: {
    value: string;
    label: string;
  }) => {
    setItemPost((prev) => ({ ...prev, category: selectedCategory }));
  };
  const handleFile = (e) => {
    setImgList(e.target.files);
  };

  // post 함수
  const handleItemSubmit = () => {
    const formData = new FormData();
    formData.append(
      'requestDto',
      // new Blob(
      //   [
      JSON.stringify({
        title: itemPost.title,
        contents: itemPost.contents,
        category: itemPost.category.value,
        price: itemPost.price,
      }),
      //   ],
      //   { type: 'application/json' },
      // ),
    );
    // 여러 장의 이미지를 forEach로 append
    // Array(imgList).forEach((myImg) => formData.append('imgList', myImg));
    // formData.append('imgList', imgList);
    // for (let i = 0; i < imgList.length; i++) {
    //   formData.append('imgList', imgList[i]);
    // }
    // formData.append('imgList', imgList);
    Array.from(imgList).forEach((myImg) => formData.append('imgList', myImg));
    postMutation.mutate(formData);
  };
  console.log('3333333333333', Array(imgList));

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
            <input
              id="image_upload"
              type="file"
              // ref={imgRef}
              onChange={(e) => handleFile(e)}
              multiple
            />
          </div>
        </ImgBox>
        <Box>
          <h3>
            상품명<span>*</span>
          </h3>
          <input
            type="text"
            placeholder="상품명을 입력해 주세요."
            value={itemPost.title}
            onChange={(e) =>
              setItemPost({ ...itemPost, title: e.target.value })
            }
          />
        </Box>
        <Box>
          <h3>
            카테고리<span>*</span>
          </h3>
          <div>
            <SelectCategory onCategoryChange={handleCategoryChange} />
            <span>선택한 카테고리 : {itemPost.category.label}</span>
          </div>
        </Box>
        <Box>
          <h3>
            가격<span>*</span>
          </h3>
          <input
            type="number"
            placeholder="가격을 입력해 주세요."
            value={itemPost.price}
            onChange={(e) =>
              setItemPost({ ...itemPost, price: Number(e.target.value) })
            }
          />
        </Box>
        <Box>
          <h3>
            설명<span>*</span>
          </h3>
          <textarea
            value={itemPost.contents}
            onChange={(e) =>
              setItemPost({ ...itemPost, contents: e.target.value })
            }
          ></textarea>
        </Box>
      </RegisterContainer>
      <Footer>
        <button>나가기</button>
        <button onClick={handleItemSubmit}>등록하기</button>
      </Footer>
    </div>
  );
}

export default ItemUpload;
