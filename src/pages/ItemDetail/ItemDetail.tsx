import Header from '../../components/Header';
import { useNavigate, useParams } from 'react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import {
  ButtonContainer,
  Carousel,
  Img,
  InfoBox,
  ItemBox,
  ItemInfo,
  LikeButton,
  PayButton,
} from './styles';
import { checkDate } from '../../util/checkDate';
import { detailItemGet, editItemPut, removeItemPost } from '../../apis/itemAPI';
import {
  BasicInfo,
  Box,
  Footer,
  HorizonLine,
  ImgBox,
  ImgLabel,
  RegisterContainer,
  UploadItem,
} from '../ItemUpload/styles';
import SelectCategory from '../../components/Item/SelectCategory/SelectCategory';
// import { ItemData } from '../ItemUpload/ItemUpload';

export interface ItemDataRes {
  // id: number;
  // imageUrl: string[];
  // createdAt: string;
  itemId?: number;
  title: string;
  category: { value: string; label: string };
  contents: string;
  price: number;
}

export interface UpdatedItem {
  itemId: number;
  title: string;
  category: any;
  contents: string;
  price: number;
}

function ItemDetail() {
  // const queryClient = useQueryClient();
  const { itemId } = useParams();
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState(false);
  const [itemPost, setItemPost] = useState<ItemDataRes>({
    // id: 0,
    // imageUrl: [],
    // createdAt: '',
    title: '',
    category: { value: '', label: '' },
    contents: '',
    price: 0,
  });

  const { data, isLoading, isError } = useQuery({
    queryKey: ['itemListDetail'],
    queryFn: () => detailItemGet(Number(itemId)),
  });
  // console.log('data', data);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const deleteMutation = useMutation<any, any, number>({
    mutationFn: (itemId) => removeItemPost(itemId),
    onSuccess: (res) => {
      console.log('res', res);
      navigate('/');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const editMutation = useMutation({
    mutationFn: (updatedItem: any) => {
      return editItemPut({ itemId: Number(itemId), updatedItem });
    },
    onSuccess: (res) => {
      console.log('res', res);
      navigate('/');
    },
    onError: (error) => {
      console.log('error', error);
    },
  });

  const goToNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % data.data.imageUrl.length,
    );
  };

  const goToPrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + data.data.imageUrl.length) % data.data.imageUrl.length,
    );
  };

  const handleCategoryChange = (selectedCategory: {
    value: string;
    label: string;
  }) => {
    setItemPost((prev) => ({ ...prev, category: selectedCategory }));
  };

  const handleNavigateClick = () => {
    setIsEdit(!isEdit);
    // initFunc();
  };

  const handleEditMode = () => {
    setIsEdit(!isEdit);
    console.log('data', data);
    setItemPost({
      // ...itemPost,
      title: data.data.title,
      category: data.data.category,
      contents: data.data.contents,
      price: data.data.price,
    });
  };

  const handleItemSubmit = () => {
    const formData = new FormData();
    const updatedItem = {
      // ...itemPost,
      itemId: Number(itemId),
      title: itemPost.title,
      contents: itemPost.contents,
      category: itemPost.category.value,
      price: itemPost.price,
    };
    formData.append('requestDto', JSON.stringify(updatedItem));
    editMutation.mutate(formData);
  };

  const createdAt = new Date(data?.data.createdAt);
  const daysDifference = checkDate(createdAt);

  const deleteItem = (itemId: any) => {
    deleteMutation.mutate(itemId);
  };

  if (isLoading) {
    return <div>로딩 중</div>;
  }
  if (isError) {
    return <div>에러다</div>;
  }
  return (
    <>
      <Header />
      {isEdit ? (
        <>
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
                  // onChange={(e) => handleFile(e)}
                  multiple
                  disabled
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
                <span>
                  선택한 카테고리 :{' '}
                  {itemPost.category ? itemPost.category.label : ''}
                </span>
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
            <button onClick={handleNavigateClick}>나가기</button>
            <button onClick={handleItemSubmit}>수정하기</button>
          </Footer>
        </>
      ) : (
        <>
          <span>홈</span>
          &nbsp;
          <span>카테고리</span>
          <hr />
          <ItemBox>
            <Carousel>
              <Img src={data.data.imageUrl[currentImageIndex]} alt="" />
              <div>
                <button onClick={goToPrevImage}>&#60;</button>
                <button onClick={goToNextImage}>&#62;</button>
              </div>
            </Carousel>
            <ItemInfo>
              <div>
                <h2>{data.data.title}</h2>
                <h4>
                  {data.data.price.toLocaleString()}
                  <span>원</span>
                </h4>
                <button onClick={handleEditMode}>수정</button>
                <button onClick={() => deleteItem(data.data.id)}>삭제</button>
              </div>
              <hr />
              {daysDifference}
              <ButtonContainer>
                <LikeButton>찜</LikeButton>
                <PayButton>바로구매</PayButton>
              </ButtonContainer>
            </ItemInfo>
          </ItemBox>
          <hr />
          <InfoBox>
            <span>상품정보</span>
            <hr />
            <p>{data.data.contents}</p>
          </InfoBox>
        </>
      )}
    </>
  );
}

export default ItemDetail;
