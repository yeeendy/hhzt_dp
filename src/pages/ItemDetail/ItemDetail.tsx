import Header from '../../components/Header';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
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

  const { data, isLoading, isError } = useQuery({
    queryKey: ['itemListDetail'],
    queryFn: () => itemListDetail(Number(itemId)),
  });
  console.log('data', data);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
