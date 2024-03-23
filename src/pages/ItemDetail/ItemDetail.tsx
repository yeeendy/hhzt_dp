import Header from '../../components/Header';
import { useNavigate, useParams } from 'react-router';
import { useMutation, useQuery } from '@tanstack/react-query';
import { instance } from '../../apis/axios';
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
import { removeItemPost } from '../../apis/itemAPI';

export const itemListDetail = async (itemId: number) => {
  try {
    const { data } = await instance.get(`/item/${itemId}`);
    return data;
  } catch (error) {
    console.log('error', error);
  }
};

function ItemDetail() {
  const { itemId } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['itemListDetail'],
    queryFn: () => itemListDetail(Number(itemId)),
  });
  // console.log('data', data);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const deleteMutation = useMutation({
    mutationFn: (itemId) => removeItemPost(itemId),
    onSuccess: (res) => {
      console.log('res', res);
      navigate(-1);
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
    <div>
      <Header />
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
    </div>
  );
}

export default ItemDetail;
